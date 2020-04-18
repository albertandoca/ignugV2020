import { async } from '@angular/core/testing';
import { Carrera } from './../../modelos/carrera';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { CupoAsignatura } from './../../modelos/cupo-asignatura';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from './../../servicios/global.service';
import { DataRx } from './../../modelos/data-rx';
import { HttpClient } from '@angular/common/http';
import { AutorizadoService } from './../../servicios/autorizado.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-matricula',
  templateUrl: './solicitud-matricula.component.html',
  styleUrls: ['./solicitud-matricula.component.scss']
})
export class SolicitudMatriculaComponent implements OnInit {

  verCuposAsignaturas: number;
  documentosMatriculaForm: FormGroup;
  cuposAsignaturasForm: FormGroup;
  dataRx: DataRx;
  idPeriodoLectivo: number;
  cuposAsignaturas: Array<CupoAsignatura>;
  carreraSelecionada: number;
  documentosMatricula: any;  // crear modelo
  botonDatosMatricula: boolean;
  continuar: boolean;
  valorCheckbox: boolean[];
  carreras: Carrera[];
  isOptional: boolean;
  realizado: boolean;
  verFiltro: boolean;
  cuposFiltrados: CupoAsignatura[];

  constructor(
    private dialog: MatDialog,
    private autorizado: AutorizadoService,
    private http: HttpClient,
    private global: GlobalService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carreraSelecionada = 999;
    this.openDialog();
    this.periodoLectivoActivo();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AvisoLegalComponent, {
      width: '500px',
      disableClose: true,
      autoFocus: true,
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(res => {

    });
  }

  periodoLectivoActivo() {
    this.http.get<DataRx>(`${this.global.urlApi}periodo-lectivo-activo`)
    .subscribe (res => {
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg.toString()) {
          this.idPeriodoLectivo = res.data[0].id;
          this.obtenerCupos();
        } else {
          this.toastr.error('La transacción no se pudo completar correctamente', 'Periodo lectivo sin acceso')
          return false;
        }
      }
    }, err => {
      this.toastr.error('La transacción no se pudo completar correctamente', 'Periodo lectivo sin acceso')
      return false;
    });
  }

  obtenerCupos() {
    this.carreras = [];
    this.verCuposAsignaturas = 0;
    this.verFiltro = true;
    this.http.get<DataRx>(
      `${this.global.urlApi}obtener-cupos/11/${this.idPeriodoLectivo}`
      )
    .subscribe(async res => {
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg.toString()) {
          if (res.data.length === 0) {
            this.verCuposAsignaturas = 2;
          } else {
            this.cuposAsignaturas = res.data;
            let arrayAux = [];
            this.cuposAsignaturas.forEach(async element => {
              await arrayAux.push(element.Asignatura.Malla.Carrera);
            });
            console.log(arrayAux);
            for (let i = 1; i < arrayAux.length; i++) {
              let bandera = true;
              for (let j = 0; j < this.carreras.length; j++) {
                if (arrayAux[i].id === this.carreras[j].id) {
                  bandera = false;
                }
              }
              if (bandera) {
                this.carreras.push(arrayAux[i]);
              }
            }
            console.log(this.carreras);
            if (this.carreras.length <= 1) {
              this.cuposFiltrados = this.cuposAsignaturas
              console.log(this.cuposFiltrados);
              this.valorCheckbox = [];
              this.cuposFiltrados.forEach(element => {
                if (element.estado == 'Asignado') {
                  this.valorCheckbox.push(false);
                } else {
                  this.valorCheckbox.push(true);
                }
              });
              this.verFiltro = false;
              this.verCuposAsignaturas = 1;
            }
          }
        } else {
          this.toastr.error('La transacción no se pudo completar correctamente', 'Cupos Asignaturas sin acceso')
          this.router.navigate(['/dashboard/menu']);
        }
      }
    }, err => {
      if (!err.error.transaccion) {
        this.toastr.error(err.error.msg, 'Cupos Asignaturas sin acceso');
        this.router.navigate(['/dashboard/menu']);
      }
    });
  }

  leerDocumentosMatricula() {
    this.botonDatosMatricula = false;
    this.http.get<DataRx>(`${this.global.urlApi}leer-datos-matricula/${this.autorizado.personaLogin.id}/${this.carreraSelecionada}`)
    .subscribe(res => {
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg.toString()) {
          this.documentosMatricula = res.data[0] || null;
        } else {
          this.toastr.error('La transacción no se pudo completar correctamente', 'Documentos matricula sin acceso')
          this.botonDatosMatricula = true;
        }
      }
    }, err => {
      if (!err.error.transaccion) {
        this.toastr.error(err.error.msg, 'Cupos Asignaturas sin acceso');
        this.botonDatosMatricula = true;
      }
    });
  }


  crearPdf() {

  }

  aplicarCupos() {
    this.continuar = true;
    this.http.put<DataRx>(`${this.global.urlApi}leer-datos-matricula`, this.cuposAsignaturas)
    .subscribe(res => {
      if (res.transaccion) {
        if (res.error) {
          res.error.forEach(element => {
            this.toastr.error(JSON.stringify(element), 'Registros Cupos fallidos');
          });
          this.continuar = false;
          this.toastr.error("Si el problema persiste comuniquese con el administrador del sistema", 'Registros Cupos fallidos');
        }
        if (res.data) {
          res.data.forEach(element => {
            this.toastr.success(JSON.stringify(element), 'Registros Cupos OK');
          });
        }
      }
    }, err => {
      if (!err.error.transaccion) {
        this.toastr.error(err.error.msg, 'Cupos Asignaturas sin acceso');
        this.botonDatosMatricula = true;
      }
    });
  }

  modificarEstado(i) {
    this.cuposAsignaturas[i].estado = this.valorCheckbox[i] ? 'Aplicado' : 'Asignado';
  }


  datosFormulario() {
    console.log(this.carreraSelecionada);
    this.cuposFiltrados = this.cuposAsignaturas.filter(element => element.Asignatura.Malla.Carrera.id === this.carreraSelecionada);
    console.log(this.cuposFiltrados);
    this.valorCheckbox = [];
    this.cuposFiltrados.forEach(element => {
      if (element.estado == 'Asignado') {
        this.valorCheckbox.push(false);
      } else {
        this.valorCheckbox.push(true);
      }
    });
    this.verCuposAsignaturas = 1;

    // this.leerDocumentosMatricula();

  }


}

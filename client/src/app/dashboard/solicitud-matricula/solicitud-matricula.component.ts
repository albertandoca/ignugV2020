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

  verCuposAsignaturas: boolean;
  documentosMatriculaForm: FormGroup;
  cuposAsignaturasForm: FormGroup;
  dataRx: DataRx;
  idPeriodoLectivo: number;
  cuposAsignaturas: Array<CupoAsignatura>;
  carreraSelecionada: number;
  documentosMatricula: any;  // crear modelo
  botonDatosMatricula: boolean;
  continuar: boolean;
  valorCheckbox: Array<boolean>;

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
    this.http.get<DataRx>(`${this.global.urlApi}leer-periodo-lectivo-activo`)
    .subscribe(res => {
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg.toString()){
          this.idPeriodoLectivo = res.data[0].id;
        } else {
          this.toastr.error('La transacción no se pudo completar correctamente', 'Periodo lectivo sin acceso')
        }
      }
    }, err => {
      this.toastr.error('La transacción no se pudo completar correctamente', 'Periodo lectivo sin acceso')
    });
  }

  obtenerCupos() {
    this.http.get<DataRx>(
      `${this.global.urlApi}obtener-cupos/${this.autorizado.personaLogin.id}/${this.idPeriodoLectivo}/${this.carreraSelecionada}`
      )
    .subscribe(res => {
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg.toString()) {
          this.cuposAsignaturas = res.data;
          this.verCuposAsignaturas = this.cuposAsignaturas.length === 0 ? true : false;
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
    this.obtenerCupos();
    this.leerDocumentosMatricula();
  }


}

import { PeriodoAcademico } from './../../modelos/periodo-academico';
import { apiService } from './../../servicios/api.service';
import { async } from '@angular/core/testing';
import { Carrera } from './../../modelos/carrera';
import { Router } from '@angular/router';
import { CupoAsignatura } from './../../modelos/cupo-asignatura';
import { ToastrService } from 'ngx-toastr';
import { DataRx } from './../../modelos/data-rx';
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
  periodoLectivo: PeriodoAcademico;
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
  selectedFile: File[];
  nombreArchivo: string;

  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private api: apiService
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

   // res.data simpre es un array;
  async periodoLectivoActivo() {
    const res = await this.api.sendApi('periodo-lectivo-activo');
    console.log(res);
    this.periodoLectivo = res[0] || null;
    console.log(this.periodoLectivo);
    this.obtenerCupos();
  }

  async obtenerCupos() {
    this.carreras = [];
    this.verCuposAsignaturas = 0;
    this.verFiltro = true;
    this.cuposAsignaturas = await this.api.sendApi('obtener-cupos', this.periodoLectivo.id);
    if (!this.cuposAsignaturas || this.cuposAsignaturas.length === 0) {
      this.verCuposAsignaturas = 2;
      this.verFiltro = false;
    } else {
      const carrerasAux = [];
      for (const cupo of this.cuposAsignaturas) {
        await carrerasAux.push(cupo.Asignatura.Malla.Carrera);
      }
      // eliminar dupĺicados
      for (const carreraAux of carrerasAux) {
        let bandera = await true;
        for (const carrera of this.carreras) {
          if (carreraAux.id === carrera.id) {
            bandera = false;
          }
        }
        if (bandera) {
          this.carreras.push(carreraAux);
        }
      }
      if (this.carreras.length <= 1) {
        this.cuposFiltrados = this.cuposAsignaturas;
        this.valorCheckbox = [];
        for (const cupo of this.cuposFiltrados) {
          if (cupo.estado === 'Asignado') {
            this.valorCheckbox.push(false);
          } else {
            this.valorCheckbox.push(true);
          }
        }
        this.verFiltro = false;
        this.verCuposAsignaturas = 1;
      } else {
        this.verFiltro = true;
      }
    }
  }

  async leerDocumentosMatricula() {
    this.botonDatosMatricula = false;
    const res = await this.api.sendApi('leer-datos-matricula', this.carreraSelecionada);
    this.documentosMatricula = res[0] || null;
  }

  crearPdf() {

  }

  async aplicarCupos() {
    this.continuar = true;
    const res = await this.api.sendApiPut('aplicar-cupos', this.cuposFiltrados);
    if (res) {
      this.continuar = false;
      this.botonDatosMatricula = true;
    }
  }

  modificarEstado(i) {
    this.cuposAsignaturas[i].estado = this.valorCheckbox[i] ? 'Aplicado' : 'Asignado';
    console.log(this.cuposAsignaturas[i].estado);
  }


  datosFormulario() {
    this.cuposFiltrados = this.cuposAsignaturas.filter(cupo => cupo.Asignatura.Malla.Carrera.id === this.carreraSelecionada);
    console.log(this.cuposFiltrados);
    this.valorCheckbox = [];
    for (const cup of this.cuposFiltrados) {
      if (cup.estado === 'Asignado') {
        this.valorCheckbox.push(false);
      } else {
        this.valorCheckbox.push(true);
      }
    }
    this.verCuposAsignaturas = 1;

    // this.leerDocumentosMatricula();

  }

  async sendFile(e, endPoint) {
    this.selectedFile = e.target.files;
    this.nombreArchivo = await this.api.sendFile(endPoint, this.selectedFile);

    // this.institutoForm.controls['pdfRuc'].value(this.nombreArchivo[0]);
  }
}

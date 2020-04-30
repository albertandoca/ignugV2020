import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';
import { ApiService } from './../../servicios/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DocenteAsignatura } from 'src/app/modelos/docente-asignatura';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ServerService } from 'src/app/servicios/server.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDragExit, CdkDragEnter } from '@angular/cdk/drag-drop';
import { Persona } from 'src/app/modelos/persona';
import { Asignatura } from 'src/app/modelos/asignatura';

@Component({
  selector: 'app-docentes-asignaturas',
  templateUrl: './docentes-asignaturas.component.html',
  styleUrls: ['./docentes-asignaturas.component.scss']
})
export class DocentesAsignaturasComponent implements OnInit { docenteAsignaturaForm: FormGroup;
  docenteAsignatura: DocenteAsignatura;
  docenteAsignaturas: DocenteAsignatura[];
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  url: string;
  nuevo: boolean;
  agregar: boolean;
  selectedFile: File[];
  nombreArchivo: string;
  casa: number;
  docentes: Persona[];
  docente: Persona;
  asignaturas: Asignatura[];
  asignaturaDocente: Array<Array<Persona>>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private server: ServerService,
    private toastr: ToastrService
  ) {
    this.url = this.server.getUrl();
   }



  ngOnInit(): void {
    this.nuevo = false;
    this.docenteAsignaturas = [];
    this.leerAsignaturasPeriodoAcademico(3, 1);
    this.leerDocentesAsignaturas();
    this.crearDocenteAsignaturaForm();
    this.selection = new SelectionModel<DocenteAsignatura>(true, []);
    this.nombreArchivo = '';
    this.leerDocentesCarreras(1);
    this.agregar = false;
  }

  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  async leerDocentesAsignaturas() {
    this.docenteAsignaturas = await this.api.sendApi('leer-docente-asignatura');
    if (this.docenteAsignaturas) {
      this.displayedColumns = [
        'select',
        'idDocente',
        'idAsignatura',
        'idPeriodoLectivo',
        'idJornada',
        'idParalelo',
        'createdAt',
        'updatedAt',
        'evento'
      ];
      this.dataSource = new MatTableDataSource(this.docenteAsignaturas);
      this.dataSource.paginator = this.paginator;
    }
  }

  drop(event: CdkDragDrop <number[]>) {
    if (event.container.data.length > 0) {
      return false;
    } else {
      // aqui mandamos a guardar
      console.log(event.container);
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dropDocente(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


   async confirmar(i: number) {
    console.log(this.asignaturas[i]);
    console.log(this.asignaturaDocente[i]);
    this.nuevo = false;
    this.docenteAsignaturas = await this.api.sendApi('gestionar-docente-asignatura');
    if ( this.docenteAsignaturas )  {
    }
    this.leerDocentesAsignaturas();

  }
/*
guardarEditar() {

    this.instituto = this.institutoForm.value
    this.instituto.pdfRuc = this.rucArchivo
    this.instituto.pdfResolucion = this.resolucionArchivo
    this.instituto.logotipo = this.logotipoImg

    this.http.put<DataRx>(`${this.apiUrl.url}modificar-institutos`, this.instituto)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        if (res.data.length.toString() == res.msg){
           console.log("modificado");
        }
      }
    });
    this.openSnackBar(this.instituto.razonSocial,"¡Ha sido Modificado con exito!")
    this.leerInstitutos()
    this.nuevo=false;
  }
  */

  async leerDocentesCarreras(idCarrera) {
    this.docentes = await this.api.sendApi('leer-docentes-carreras', idCarrera);
    console.log(this.docentes);
  }

  async leerAsignaturasPeriodoAcademico(idPA: number, idM: number) {
    const datos = {
      idPeriodoAcademico: idPA,
      idMalla: idM
    };
    this.asignaturas = await this.api.sendApi('leer-asignaturas-periodo-academico', datos);
    console.log(this.asignaturas);
    this.asignaturaDocente = [];
    for (let i = 0; i < this.asignaturas.length; i++) {
      this.asignaturaDocente[i] = [];
    }
    console.log(this.asignaturaDocente);
  }
  // Filtro de busqueda en la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Visualiza PDF en una pestaña
  verFile(urlFile: string, directorio: string) {
    window.open(`${this.url}ver-archivo/${urlFile}/${directorio}`, 'blank');
  }


  // Funciones de gestión de registros
  editar(id: number) {
    console.log(this.docenteAsignaturas);
    this.docenteAsignatura = this.docenteAsignaturas.find(element => element.id === id);
    this.docenteAsignaturaForm.setValue(this.docenteAsignatura);
    console.log('jjj');
    console.log(this.docenteAsignaturaForm.value);
  }

  eliminar(id: number) {
    alert('hola');
  }

  crearRegistro() {
    this.nuevo = true;
    const campo = 'createdAt';
    this.docenteAsignaturaForm.reset();
    this.docenteAsignaturaForm.controls[campo].setValue(new Date(Date.now()));
    console.log(this.docenteAsignaturaForm.value);

  }

  guardarRegistro() {
  }


  async sendFile(e, endPoint) {
    this.selectedFile = e.target.files;
    this.nombreArchivo = await this.api.sendFile(endPoint, this.selectedFile);

    // this.docenteAsignaturaForm.controls['pdfRuc'].value(this.nombreArchivo[0]);
  }

  async sendFilen(e, endPoint) {
    this.selectedFile = e.target.files;
    this.nombreArchivo =  await this.api.sendFile(endPoint, this.selectedFile);
  }

  // Funciones para el manejo del checkbox de la tabla
  // En this.selection.selected se encuentran los registros seleccionados por el checkbox
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: DocenteAsignatura): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }


  // Creación y validación de formulario para ingreso de datos
  crearDocenteAsignaturaForm() {
    this.docenteAsignaturaForm = this.fb.group({
      id: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      idDocente: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      idAsignatura: ['', [Validators.required, Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      idPeriodoLectivo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      idJornada: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      idParalelo: ['', [Validators.required, Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      estado: true,
      createdAt: [''],
      updatedAt: ['']
    });
  }

}


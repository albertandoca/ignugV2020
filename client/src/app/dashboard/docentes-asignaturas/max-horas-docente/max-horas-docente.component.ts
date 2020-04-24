import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';
import { ApiService } from './../../../servicios/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataRx } from './../../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaxHoraDocente } from 'src/app/modelos/max-hora-docente';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ServerService } from 'src/app/servicios/server.service';

@Component({
  selector: 'app-max-horas-docente',
  templateUrl: './max-horas-docente.component.html',
  styleUrls: ['./max-horas-docente.component.scss']
})
export class MaxHorasDocenteComponent implements OnInit {

  maxHorasDocenteForm: FormGroup;
  maxHorasDocente: MaxHoraDocente;
  maxHorasDocentes: MaxHoraDocente[];
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  nuevo: boolean;
  url: string;



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
    this. maxHorasDocentes = [];
    this.leerMaxHorasDocente();
    this.crearMaxHorasDocenteForm();
    this.selection = new SelectionModel<MaxHoraDocente>(true, []);

  }
  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y seleccion checkbox

  async leerMaxHorasDocente() {
    this.maxHorasDocentes = await this.api.sendApi('leer-max-horas-docente');
    if (this.maxHorasDocentes) {
      this.displayedColumns = [
        'idDocente',
        'horas',
        'idPeriodoAcademico',
        'createdAt',
        'updatedAt'
      ];
      this.dataSource = new MatTableDataSource(this.maxHorasDocentes);
      this.dataSource.paginator = this.paginator;
    }
  }

  // Filtro de busqueda en la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // funciones de gesstion de registros
  // Funciones de gestión de registros
  editar(id: number) {
    this.maxHorasDocente = this.maxHorasDocentes.find(element => element.id === id);
    this.maxHorasDocenteForm.setValue(this.maxHorasDocente);
  }

  eliminar(id: number) {
    alert('Que mas ve!');
  }

  crearRegistro() {
    this.nuevo = true;
    const campo = 'createdAt';
    this.maxHorasDocenteForm.reset();
    this.maxHorasDocenteForm.controls[campo].setValue(new Date(Date.now()));
  }

  guardarRegistro() {
    this.nuevo = false;
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

  checkboxLabel(row?: MaxHoraDocente): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }


  // Creacion y validacion de formulario para el ingreso de datos
  crearMaxHorasDocenteForm() {
    this.maxHorasDocenteForm = this.fb.group({
      idDocente: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      horas: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      idPeriodoAcademico: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      createdAt: [''],
      updatedAt: ['']
    });
  }
}

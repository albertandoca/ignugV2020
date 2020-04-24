import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Instituto } from 'src/app/modelos/instituto';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ServerService } from 'src/app/servicios/server.service';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-institutos',
  templateUrl: './institutos.component.html',
  styleUrls: ['./institutos.component.scss']
})
export class InstitutosComponent implements OnInit {

  institutoForm: FormGroup;
  instituto: Instituto;
  institutos: Instituto[];
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  url: string;
  nuevo: boolean;
  selectedFile: File[];
  nombreArchivo: string;
  casa: number;

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
    this.institutos = [];
    this.leerInstitutos();
    this.crearInstitutoForm();
    this.selection = new SelectionModel<Instituto>(true, []);
    this.nombreArchivo = '';
  }

  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  async leerInstitutos() {
    this.institutos = await this.api.sendApi('leer-institutos');
    if (this.institutos) {
      this.displayedColumns = [
        'select',
        'codigoIes',
        'razonSocial',
        'ruc',
        'pdfRuc',
        'resolucion',
        'pdfResolucion',
        'categoria',
        'logotipo',
        'createdAt',
        'updatedAt',
        'evento'
      ];
      this.dataSource = new MatTableDataSource(this.institutos);
      this.dataSource.paginator = this.paginator;
    }
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
    this.instituto = this.institutos.find(element => element.id === id);
    this.institutoForm.setValue(this.instituto);
  }

  eliminar(id: number) {
    alert('hola');
  }

  crearRegistro() {
    this.nuevo = true;
    const campo = 'createdAt';
    this.institutoForm.reset();
    this.institutoForm.controls[campo].setValue(new Date(Date.now()));
  }

  guardarRegistro() {
    this.nuevo = false;
  }


  async sendFile(e, endPoint) {
    this.selectedFile = e.target.files;
    this.nombreArchivo = await this.api.sendFile(endPoint, this.selectedFile);

    // this.institutoForm.controls['pdfRuc'].value(this.nombreArchivo[0]);
  }

  async sendFilen(e, endPoint) {
    this.selectedFile = e.target.files;
    this.nombreArchivo =  await this.api.sendFile(endPoint, this.selectedFile);
  }


  // Funciones para crear archivos descargables
  crearPdf() {

  }

  crearXls() {

  }

  async verImagen( nombreFile: string, carpeta: string): Promise<any> {
    alert('jjjj');
    const datos = {
      urlFile: nombreFile,
      directorio: carpeta
    };
    let res: any;
    res = await this.api.verFileServer('ver-archivo', datos);
    return res;
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

  checkboxLabel(row?: Instituto): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }


  // Creación y validación de formulario para ingreso de datos
  crearInstitutoForm() {
    this.institutoForm = this.fb.group({
      id: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      codigoIes: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      razonSocial: ['', [Validators.required, Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      ruc: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
      pdfRuc: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9ñÑ_-]*(.pdf)$')]],
      resolucion: ['', [Validators.required, Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      pdfResolucion: ['', [Validators.required, Validators.pattern('^[A-ZA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&.]*(.pdf)$')]],
      categoria: ['', [Validators.required, Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      logotipo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]*(.jpg|.svg|.png)$')]],
      estado: true,
      createdAt: [''],
      updatedAt: ['']
    });
  }

}

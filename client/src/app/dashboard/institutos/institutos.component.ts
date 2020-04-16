import { AutorizadoService } from './../../servicios/autorizado.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalService } from '../../servicios/global.service';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Instituto } from 'src/app/modelos/instituto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

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
  nombreArchivo: string[];
  casa: number;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private autorizado: AutorizadoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.url = this.global.urlApi;
    this.nuevo = false;
    this.institutos = [];
    this.leerInstitutos();
    this.crearInstitutoForm();
    this.selection = new SelectionModel<Instituto>(true, []);
    this.nombreArchivo = [];


  }


  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  leerInstitutos() {
    this.http.get<DataRx>(`${this.global.urlApi}leer-institutos`, this.autorizado.headersOptions())
    .subscribe( async res => {
      if (res.transaccion) {
        // tslint:disable-next-line: triple-equals
        if (res.data.length.toString() == res.msg) {
          this.institutos = res.data;
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
    });
  }


  // Filtro de busqueda en la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Visualiza PDF en una pestaña
  verFile(url: string, directorio: string) {
    window.open(`${this.global.urlApi}ver-archivo/${url}/${directorio}`, 'blank');
  }


  // Funciones de gestión de registros
  editar(id: number) {
    console.log(this.institutos);
    this.instituto = this.institutos.find(element => element.id === id);
    this.institutoForm.setValue(this.instituto);
    console.log('jjj');
    console.log(this.institutoForm.value);
  }

  eliminar(id: number) {
    alert('hola');
  }

  crearRegistro() {
    this.nuevo = true;
    const campo = 'createdAt';
    this.institutoForm.reset();
    this.institutoForm.controls[campo].setValue(new Date(Date.now()));
    console.log(this.institutoForm.value);

  }

  guardarRegistro() {
    this.nuevo = false;
  }


  pdfRucSeleccionado(e) {
    this.selectedFile = e.target.files;
    const formData = new FormData();
    console.log(this.selectedFile);
    formData.append('upload[]', this.selectedFile[0], this.selectedFile[0].name);
    console.log(formData);
    this.http.post<DataRx>(`${this.global.urlApi}pdf-ruc`, formData)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        // tslint:disable-next-line: triple-equals
        if (res.data.length.toString() == res.msg) {
          this.nombreArchivo = res.data;
          // this.institutoForm.controls['pdfRuc'].value(this.nombreArchivo[0]);

        }
      }
    });
  }
  // Funciones para crear archivos descargables
  crearPdf() {

  }

  crearXls() {

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

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiUrlService } from './../../servicios/api-url.service';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Instituto } from 'src/app/modelos/instituto';
import { HttpClient } from '@angular/common/http';
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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private apiUrl: ApiUrlService,
    private fb: FormBuilder
  ) {
      this.url = apiUrl.url;
      this.leerInstitutos();
      this.crearInstitutoForm();
      this.selection = new SelectionModel<Instituto>(true, []);
   }

  ngOnInit(): void {
    this.nuevo = false;
    this.nombreArchivo = [];

  }


  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  leerInstitutos() {
    this.http.get<DataRx>(`${this.apiUrl.url}leer-institutos`)
    .subscribe(res => {
      if (res.transaccion) {
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
    window.open(`${this.apiUrl.url}ver-archivo/${url}/${directorio}`, 'blank');
  }


  // Funciones de gestión de registros
  editar(id: number) {
    console.log(id);
    this.instituto = this.institutos.find(element => element.id = id);
    console.log(this.instituto)
  }

  eliminar(id: number) {

  }

  crearRegistro() {
    this.nuevo = true;
  }

  guardarRegistro() {
    this.nuevo = false;
  }


  pdfRucSeleccionado(e) {
    this.selectedFile = e.target.files;
    let formData = new FormData;
    console.log(this.selectedFile);
    formData.append('upload[]', this.selectedFile[0], this.selectedFile[0].name);
    console.log(formData);
    this.http.post<DataRx>(`${this.apiUrl.url}pdf-ruc`, formData)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        if (res.data.length.toString() == res.msg){
          this.nombreArchivo = res.data;
          //this.institutoForm.controls['pdfRuc'].value(this.nombreArchivo[0]);

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
    });
  }

}

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../servicios/api.service';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Instituto } from 'src/app/modelos/instituto';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  modificar: boolean;
  agregar: boolean;
  selectedFile: File[];
  nombreArchivo: string[];
  resolucionArchivo: string;
  rucArchivo: string;
  logotipoImg: string;
  miniaturaPdfRuc: boolean;
  miniaturaPdfResolucion: boolean;
  miniaturaLogotipo: boolean;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
  ) {
      this.url = api.url;
      this.leerInstitutos();
      this.crearInstitutoForm();
      this.selection = new SelectionModel<Instituto>(true, []);
   }
   categorias = [
    {id: 1, value: 'Público'},
    {id: 2, value: 'Privado'}
  ];

  ngOnInit(): void {
    this.nuevo = false;
    this.modificar = false;
    this.agregar = false;
    this.miniaturaPdfRuc = false;
    this.miniaturaPdfResolucion = false;
    this.miniaturaLogotipo = false;
    this.nombreArchivo = [];
  }

  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  leerInstitutos() {
    this.http.get<DataRx>(`${this.api.url}leer-institutos`)
    .subscribe(res => {
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg) {
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
  cancelado() {
    this.nuevo = false;
    this.miniaturaPdfRuc = true;
    this.miniaturaPdfResolucion = true;
    this.miniaturaLogotipo = true;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  // Filtro de busqueda en la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Visualiza PDF en una pestaña
  verFile(url: string, directorio: string) {
    window.open(`${this.api.url}ver-archivo/${url}/${directorio}`, 'blank');
  }

  // Funciones de gestión de registros
  editar(id: number) {
    this.miniaturaPdfRuc = true;
    this.miniaturaPdfResolucion = true;
    this.miniaturaLogotipo = true;
    this.agregar = true;
    this.modificar = false;
    this.cancelado();
    this.nuevo = true;
    console.log(id);
    this.instituto = this.institutos.find(element => element.id === id);
    this.institutoForm.setValue(this.instituto);
    this.rucArchivo = this.instituto.pdfRuc;
    this.resolucionArchivo = this.instituto.pdfResolucion;
    this.logotipoImg = this.instituto.logotipo;
    console.log(this.institutoForm.value);
  }

  guardarEditar() {

    this.instituto = this.institutoForm.value;
    this.instituto.pdfRuc = this.rucArchivo;
    this.instituto.pdfResolucion = this.resolucionArchivo;
    this.instituto.logotipo = this.logotipoImg;

    this.http.put<DataRx>(`${this.api.url}modificar-institutos`, this.instituto)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg) {
           console.log('modificado');
        }
      }
    });
    this.openSnackBar(this.instituto.razonSocial, '¡Ha sido Modificado con exito!');
    this.leerInstitutos();
    this.nuevo = false;
  }

  eliminar(id: number) {
    this.instituto = this.institutos.find(element => element.id === id);
    this.http.put<DataRx>(`${this.api.url}eliminar-institutos`, this.instituto)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg) {
           console.log('eliminado');
        }
      }
    });
    this.leerInstitutos();
    this.openSnackBar(this.instituto.razonSocial, '¡Ha sido eliminado con exito!');
  }


  crearRegistro() {
    this.miniaturaPdfRuc = false;
    this.miniaturaPdfResolucion = false;
    this.miniaturaLogotipo = false;
    this.nuevo = true;
    this.agregar = false;
    this.modificar = true;
    this.institutoForm.reset();
  }

  guardarRegistro() {
    this.nuevo = false;
    this.instituto = this.institutoForm.value;
    console.log(this.instituto);

    this.http.post<DataRx>(`${this.api.url}crear-institutos`, this.instituto)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        if (res.data.length.toString() === res.msg) {
           console.log('añadido');
          // para actualizar la tabla con el  nuevo registro
        }
      }
    });
    this.openSnackBar(this.instituto.razonSocial, '¡Ha sido agregado con exito!');
    this.leerInstitutos();
  }

  archivoSeleccionado(e, op: number) {
    this.selectedFile = e.target.files;
    // tslint:disable-next-line:new-parens
    const formData = new FormData;
    console.log(this.selectedFile);
    formData.append('upload[]', this.selectedFile[0], this.selectedFile[0].name);
    console.log(formData);
    let direccion = '';
    if (op === 1) {
      direccion = 'pdf-ruc';
    }
    if (op === 2) {
      direccion = 'pdf-resolucion';
    }
    if (op === 3) {
      direccion = 'imagen-logotipo';
    }
    this.http.post<DataRx>(`${this.api.url}${direccion}`, formData)
      .subscribe(res => {
        console.log(res);
        if (res.transaccion) {
          if (res.data.length.toString() === res.msg) {
            this.nombreArchivo = res.data;
            if (op === 1) {
              this.rucArchivo = this.nombreArchivo[0];
              // tslint:disable-next-line:no-string-literal
              this.institutoForm.controls['pdfRuc'].setValue(this.rucArchivo);
              this.miniaturaPdfRuc = true;
            }
            if (op === 2) {
              this.resolucionArchivo = this.nombreArchivo[0];
              // tslint:disable-next-line:no-string-literal
              this.institutoForm.controls['pdfResolucion'].setValue(this.resolucionArchivo);
              this.miniaturaPdfResolucion = true;
            }
            if (op === 3) {
              this.logotipoImg = this.nombreArchivo[0];
              // tslint:disable-next-line:no-string-literal
              this.institutoForm.controls['logotipo'].setValue(this.logotipoImg);
              this.miniaturaLogotipo = true;
            }
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

  get emails() {
    return this.institutoForm.get('emails') as FormArray;
  }
  agregarEmail() {
    const emailFormGroup = this.fb.group({
        email: ''
    });
    this.emails.push(emailFormGroup);
  }
  removerEmail(indice: number) {
    this.emails.removeAt(indice);
   }
  // Creación y validación de formulario para ingreso de datos
  crearInstitutoForm() {
    this.institutoForm = this.fb.group({
      id: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      codigoIes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('^[0-9]*$')]],
      // tslint:disable-next-line:max-line-length
      razonSocial: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      ruc: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
      pdfRuc: [''],
      // tslint:disable-next-line:max-line-length
      resolucion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
      pdfResolucion: [''],
      categoria: ['', [Validators.required]],
      logotipo: [''],
      createdAt: [''],
      updatedAt: [''],
      emails: this.fb.array([])
    });
  }
}

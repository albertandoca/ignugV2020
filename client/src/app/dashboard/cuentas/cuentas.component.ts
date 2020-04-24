import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';
import { ApiService } from './../../servicios/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cuenta } from 'src/app/modelos/cuenta';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ServerService } from 'src/app/servicios/server.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  cuentaForm: FormGroup;
  cuenta: Cuenta;
  cuentas: Cuenta[];
  url: string;
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  nuevo: boolean;
  selectedFile: File[];
  nombreArchivo: string;
  modificar: boolean;
  agregar: boolean;
  fotoImg: string;
  miniaturaFoto: boolean;
  isLinear = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    // tslint:disable-next-line:variable-name
    private _fb: FormBuilder,
    private api: ApiService,
    private server: ServerService,
    private toastr: ToastrService,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
  ) {
    this.url = this.server.getUrl();
   }

  ngOnInit(): void {
    this.nuevo = false;
    this.modificar = false;
    this.agregar = false;
    this.nuevo = false;
    this.cuentas = [];
    this.leerCuentas();
    this.selection = new SelectionModel<Cuenta>(true, []);
    this.nombreArchivo = '';
  }

   // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
   async leerCuentas() {
    this.cuentas = await this.api.sendApi('leer-cuentas');
    if (this.cuentas) {
      this.displayedColumns = [
        'select',
        'idTipoIdentificacion',
        'identificacion',
        'foto',
        'primerNombre',
        'segundoNombre',
        'apellidoPaterno',
        'apellidoMaterno',
        'emailPersonal',
        'emailInstitucional',
        'fechaDeNacimiento',
        'direccion',
        'telefonos',
        'operadora',
        'createdAt',
        'updatedAt',
        'evento'
      ];
      this.dataSource = new MatTableDataSource(this.cuentas);
      this.dataSource.paginator = this.paginator;
   }
  }

  cancelado() {
    this.nuevo = false;
    this.miniaturaFoto = true;
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

  // Visualiza foto
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

  // crear registro
  crearRegistro() {
    this.miniaturaFoto = false;
    this.nuevo = true;
    this.agregar = false;
    this.modificar = true;
    this.cuentaForm.reset();
  }

  editar(id: number) {
    this.miniaturaFoto = true;
    this.agregar = true;
    this.modificar = false;
    this.cancelado();
    this.nuevo = true;
    console.log(id);
    this.cuenta = this.cuentas.find(element => element.id === id);
    this.cuentaForm.setValue(this.cuenta);
    this.fotoImg = this.cuenta.foto;
    console.log(this.cuentaForm.value);
  }

  async sendFile(e, endPoint) {
    this.selectedFile = e.target.files;
    this.nombreArchivo = await this.api.sendFile(endPoint, this.selectedFile);
    if (e === 1) {
      this.fotoImg = this.nombreArchivo[0];
      // tslint:disable-next-line:no-string-literal
      this.cuentaForm.controls['foto'].setValue(this.fotoImg);
      this.miniaturaFoto = true;
  }
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

  checkboxLabel(row?: Cuenta): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

    // Creación y validación de formulario cuentas
    crearCuentaForm() {
      this.cuentaForm = this._fb.group({
        id: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
        idTipoIdentificacion: ['', [Validators.required, Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
        identificacion:  ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
        foto: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]*(.jpg|.svg|.png)$')]],
        // tslint:disable-next-line:max-line-length
        primerNombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[A-Z -_ÁÉÍÓÚÑÜ/#&]*$')]],
        // tslint:disable-next-line:max-line-length
        segundoNombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[A-Z -_ÁÉÍÓÚÑÜ/#&]*$')]],
        // tslint:disable-next-line:max-line-length
        apellidoPaterno: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[A-Z -_ÁÉÍÓÚÑÜ/#&]*$')]],
        // tslint:disable-next-line:max-line-length
        apellidoMaterno: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[A-Z -_ÁÉÍÓÚÑÜ/#&]*$')]],
        emailPersonal: ['', [Validators.required, Validators.pattern('^[a-z]*[0-9.]*([a-z])*(@yavirac.edu.ec)$')]],
        emailInstitucional: ['', [Validators.required, Validators.pattern('^[a-z]*[0-9.]*([a-z])*(@yavirac.edu.ec)$')]],
        fechaDeNacimiento: ['0', [Validators.required, Validators.pattern('^[0-9]*(23/08/1999)$')]],
        direccion: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -_áéíóúñüÁÉÍÓÚÑÜ/#&]*$')]],
        telefonos: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
        operadora: ['', [Validators.required, Validators.pattern('^[a-zA-Z -_áéíóúñüÁÉÍÓÚÑÜ/#&]*$')]],
        estado: ['true'],
        createdAt: [''],
        updatedAt: ['']
      });
    }
}


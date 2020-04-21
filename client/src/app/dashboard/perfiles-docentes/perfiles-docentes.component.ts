import { PerfilesDocentes } from 'src/app/modelos/perfiles-docentes';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './../../servicios/api.service';
import { async } from '@angular/core/testing';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfiles-docentes',
  templateUrl: './perfiles-docentes.component.html',
  styleUrls: ['./perfiles-docentes.component.scss']
})
export class PerfilesDocentesComponent implements OnInit {
  perfilDocenteForm: FormGroup;
  perfilDocente: PerfilesDocentes;
  perfilesDocentes: PerfilesDocentes[];
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  url: string;
  nuevo: boolean;
  modificar: boolean;
  agregar: boolean;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private api: ApiService ,
    private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
  ) {
      this.url = api.url;
      this.leerPerfilDocente();
      this.crearPerfilDocenteForm();
      this.selection = new SelectionModel<PerfilesDocentes>(true, []);
   }
  get detalles() {
    return this.perfilDocenteForm.get('descripciones') as FormArray;
  }

  ngOnInit(): void {
    this.nuevo = false;
    this.modificar = false;
    this.agregar = false;
  }

  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  leerPerfilDocente() {
    this.http.get<DataRx>(`${this.api.url}leer-tipo-instalaciones`)
    .subscribe(res => {
      if (res.transaccion) {
        // tslint:disable-next-line:triple-equals
        if (res.data.length.toString() == res.msg) {
          this.perfilesDocentes = res.data;
          this.displayedColumns = [
            'select',
            'idDocente',
            'detalle',
            'createdAt',
            'updatedAt',
            'evento'
          ];
          this.dataSource = new MatTableDataSource(this.perfilesDocentes);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }
  cancelado() {
    this.nuevo = false;
    this.detalles.controls.splice(0, this.detalles.length);
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
  // Funciones de gestión de registros
  editar(id: number) {
    this.agregar = true;
    this.modificar = false;
    this.cancelado();
    this.nuevo = true;
    console.log(id);
    this.perfilDocente = this.perfilesDocentes.find(element => element.id === id);
    this.perfilDocenteForm.setValue(this.perfilDocente);
    console.log(this.perfilDocenteForm.value);
  }

  guardarEditar(i: number) {
    const datos = this.perfilDocenteForm.value;
    this.perfilDocente  = {
      id: 0,
      idDocente: 0,
      detalle: datos.detalless[i].detalle,
      estado: true,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    };

    this.http.put<DataRx>(`${this.api.url}modificar-tipo-instalaciones`, this.perfilDocente)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        // tslint:disable-next-line:triple-equals
        if (res.data.length.toString() == res.msg) {
           // tslint:disable-next-line:quotemark
           console.log("modificado");
        }
      }
    });
    // tslint:disable-next-line:quotemark
    this.openSnackBar(this.perfilDocente.detalle, '¡Ha sido Modificado con exito!');
    // this.leerPerfilDocente()
    // this.nuevo=false;
  }

  eliminar(id: number) {
    this.perfilDocente = this.perfilesDocentes.find(element => element.id === id);
    this.http.put<DataRx>(`${this.api.url}eliminar-tipo-instalaciones`, this.perfilDocente)
    .subscribe(res => {
      console.log(res);
      if (res.transaccion) {
        // tslint:disable-next-line:triple-equals
        if (res.data.length.toString() == res.msg) {
           // tslint:disable-next-line:quotemark
           console.log("eliminado");
        }
      }
    });
    this.leerPerfilDocente();
    // tslint:disable-next-line:quotemark
    this.openSnackBar(this.perfilDocente.detalle, '¡Ha sido eliminado con exito!');
  }

  // formulario dinamico
  agregarDescripcion() {
    const detalleFormGroup  = this.fb.group({
      // tslint:disable-next-line:max-line-length
      detalle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Z0-9 -_ÁÉÍÓÚÑÜ/#&]*$')]],
    });
    this.detalles.push(detalleFormGroup);
  }
  removerDetalle(indice: number) {
    this.detalles.removeAt(indice);
  }


  crearRegistro() {
    this.nuevo = true;
    this.agregar = false;
    this.modificar = true;
    this.perfilDocenteForm.reset();
  }

  guardarRegistro(i: number) {
    this.nuevo = false;
    const datos = this.perfilDocenteForm.value;
    this.perfilDocente = {
      id: 0,
      idDocente: 0,
      detalle: datos.detalles[i].detalle,
      estado: true,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    };
    this.http.post<DataRx>(`${this.api.url}crear-tipo-instalaciones`, this.perfilDocente)
    .subscribe(res => {
      console.log(res);
      console.log('hola2');
      if (res.transaccion) {
        // tslint:disable-next-line:triple-equals
        if (res.data.length.toString() == res.msg) {
           // tslint:disable-next-line:quotemark
           console.log("añadido");
          // para actualizar la tabla con el  nuevo registro
        }
      }
    });
    // tslint:disable-next-line:quotemark
    this.openSnackBar(this.perfilDocente.detalle, '¡Ha sido agregado con exito!');
   // this.leerPerfilDocente();
  }
  // Funciones para el manejo del checkbox de la tabla
  // En this.selection.selected se encuentran los registros seleccionados por el checkbox
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected();
    this.selection.clear();
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PerfilesDocentes): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  crearPerfilDocenteForm() {
    this.perfilDocenteForm = this.fb.group({
      id: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      idDocente: ['0', [Validators.required, Validators.pattern('^[0-9]*$')]],
      detalles: this.fb.array([]),
      createdAt: [''],
      updatedAt: [''],
      estado: ['']
    });
  }
// tslint:disable-next-line:eofline
}

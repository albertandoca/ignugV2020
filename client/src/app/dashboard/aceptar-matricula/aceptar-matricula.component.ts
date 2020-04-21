import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { apiService } from 'src/app/servicios/api.service';
import { ServerService } from 'src/app/servicios/server.service';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from 'src/app/modelos/solicitud';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-aceptar-matricula',
  templateUrl: './aceptar-matricula.component.html',
  styleUrls: ['./aceptar-matricula.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AceptarMatriculaComponent implements OnInit {

  solicitud: Solicitud;
  solicitudes: Solicitud[];
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  url: string;
  nuevo: boolean;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private api: apiService,
    private server: ServerService,
    private toastr: ToastrService
  ) {
    this.url = this.server.getUrl();
   }

  ngOnInit(): void {
    this.nuevo = false;
    this.leerSolicitudes();
    this.selection = new SelectionModel<Solicitud>(true, []);
  }

  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  async leerSolicitudes() {
    this.solicitudes = await this.api.sendApi('leer-solicitudes');
    if (this.solicitudes) {
      this.displayedColumns = [
        'select',
        'foto',
        'identificacion',
        'primerNombre',
        'apellidoPaterno',
        'codigoSolicitud',
        'createdAt',
        'detalle',
        'evento'
      ];
      this.dataSource = new MatTableDataSource(this.solicitudes);
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

  checkboxLabel(row?: Solicitud): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    //return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  open
}

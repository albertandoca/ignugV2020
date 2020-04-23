import { Persona } from './../../modelos/persona';
import { ApiService } from './../../servicios/api.service';
import { Solicitud } from './../../modelos/solicitud';
import { InformacionComponent } from './informacion/informacion.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ServerService } from './../../servicios/server.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-aceptar-matricula',
  templateUrl: './aceptar-matricula.component.html',
  styleUrls: ['./aceptar-matricula.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),]
})
export class AceptarMatriculaComponent implements OnInit {

  solicitud: Solicitud;
  solicitudes: Solicitud[];
  displayedColumns: string[];
  dataSource: any;
  selection: any;
  url: string;
  nuevo: boolean;
  public idEstudiante :number;
  public idPeriodoLectivo: number;
  public idPersonaSeleccionada: number;
  public idCarrera: number;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private server: ServerService,
    private toastr: ToastrService
  ) {
    this.url= this.server.getUrl();
  }

  ngOnInit(): void {

    this.nuevo = false;
    this.leerSolcicitudes();
    this.selection = new SelectionModel<Solicitud>(true, []);

  }
  async leerSolcicitudes()
  {
    this.solicitudes = await this.api.sendApi('leer-solicitudes-matriculas');
    console.log(this.solicitudes)
    if(this.solicitudes){
      this.displayedColumns =[
        'foto',
        'identificacion',
        'primerNombre',
        'apellidoPaterno',
        'codigoSolicitud',
        'createdAt',
        'detalle',
        'malla',
        'evento'
      ];
      this.dataSource = new MatTableDataSource(this.solicitudes);
      this.dataSource.paginator = this.paginator;
    }
  }

isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toUpperCase();
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

  openDialog(id:number): void {
    for(const iterador of this.solicitudes){
      if(iterador.id==id){
        this.idEstudiante = iterador.idEstudiante
        this.idPeriodoLectivo = iterador.idPeriodoLectivo
        this.idPersonaSeleccionada = iterador.PersonasRole.idPersona
        this.idCarrera = iterador.idCarrera
      }
    }

    const dialogRef = this.dialog.open(InformacionComponent, {
      width: '750px',
      disableClose: false,
      maxHeight: '90vh',
      autoFocus: false,
      data: {
        idEstudiante: this.idEstudiante,
        idPeriodoLectivo: this.idPeriodoLectivo,
        idPersonaSeleccionada: this.idPersonaSeleccionada,
        idCarrera: this.idCarrera
      }
    });

    dialogRef.afterClosed().subscribe(res => {

    });
  }
}

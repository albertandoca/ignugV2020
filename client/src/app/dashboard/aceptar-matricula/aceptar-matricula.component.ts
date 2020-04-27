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
  persona: Persona;
  nuevo: boolean;
  public idEstudiante :number;
  public idPeriodoLectivo: number;
  public idPersonaSeleccionada: number;
  public idCarrera: number;
  public idSolicitud: number;
  public idPersona: number;

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
        'carrera',
        'evento'
      ];
      this.dataSource = new MatTableDataSource(this.solicitudes);
      this.dataSource.paginator = this.paginator;
    }

  }


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  openDialog(i:number): void {
    const dialogRef = this.dialog.open(InformacionComponent, {
      width: '750px',
      disableClose: false,
      maxHeight: '90vh',
      autoFocus: false,
      data: this.solicitudes[i]
    });

    dialogRef.afterClosed().subscribe(res => {
      this.leerSolcicitudes()
    });
  }
}

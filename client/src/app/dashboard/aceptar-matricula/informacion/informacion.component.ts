import { DocumentoMatricula } from './../../../modelos/documento-matricula';
import { Asignatura } from './../../../modelos/asignatura';
import { Persona } from './../../../modelos/persona';
import { CupoAsignatura } from './../../../modelos/cupo-asignatura';
import { ApiService } from './../../../servicios/api.service';
import { ServerService } from './../../../servicios/server.service';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class InformacionComponent implements OnInit {

  datos;
  expandedElement: any;
  asignaturasSolicitadas: CupoAsignatura[];
  asignaturaSolicitada: CupoAsignatura;
  documentoMatricula: DocumentoMatricula;
  persona: Persona;
  displayedColumns: string[];
  dataSource: any;
  url: string;
  panelOpenState = false;
  step = 0;

  constructor(
    private api: ApiService,
    private server: ServerService,
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //En datos esta el idEstudiante refiriendose a personaRol y periodoLectivo
      //idPersona Seleccionada
      //y tambien el idCarrera
    this.datos=data
    this.url = this.server.getUrl();
  }

  ngOnInit(): void {
    this.traerInformacion()
    this.traerAsignaturas()
    this.traerDocumentos()
  }

  async traerAsignaturas(){
    console.log(this.datos.idCarrera)
    this.asignaturasSolicitadas = await this.api.sendApi('obtener-asignaturas',this.datos);
    if(this.asignaturasSolicitadas){
      const auxiliarAsignaturasSolicitadas = [];
      for(const iterador of this.asignaturasSolicitadas){
        if(iterador.Asignatura.Malla.idCarrera==this.datos.idCarrera)
        {
          await auxiliarAsignaturasSolicitadas.push(iterador)
        }
      }
      this.displayedColumns =[
        'codigoAsignatura',
        'detalle',
        'creditos',
        'nivel'
      ];
      this.dataSource = new MatTableDataSource(auxiliarAsignaturasSolicitadas);
  }
}


  async traerInformacion(){
    this.persona = await this.api.sendApi('leer-uno', this.datos);
  }

  async traerDocumentos(){
    this.documentoMatricula = await this.api.sendApi('leer-documentos-matricula',this.datos);
  }
  // Visualiza PDF en una pestaña
  verFile(urlFile: string, directorio: string) {
    window.open(`${this.url}ver-archivo/${urlFile}/${directorio}`, 'blank');
  }

}


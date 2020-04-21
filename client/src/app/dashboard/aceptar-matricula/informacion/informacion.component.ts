import { PersonaLogin } from './../../../modelos/persona-login';
import { ServerService } from './../../../servicios/server.service';
import { AutorizadoService } from './../../../servicios/autorizado.service';
import { MatTableDataSource } from '@angular/material/table';
import { apiService } from './../../../servicios/api.service';
import { Asignatura } from './../../../modelos/asignatura';
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
  asignaturas: Asignatura[];
  personaLogeada: PersonaLogin;
  asignatura: Asignatura;
  displayedColumns: string[];
  dataSource: any;
  url: string;

  constructor(
    private autorizado: AutorizadoService,
    private api: apiService,
    private server: ServerService,
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.datos=data
    this.url = this.server.getUrl();
  }

  ngOnInit(): void {
    this.personaLogeada = this.autorizado.getPersonaLogin();
    console.log(this.datos)
    console.log(this.data.idPeriodoLectivo)
    this.traerAsignaturas()
    this.traerDocumentos()
    this.traerInformacion()
  }

  async traerAsignaturas(){
    console.log("HOOOLA")
    console.log(this.personaLogeada)
    this.asignaturas = await this.api.sendApi('obtener-asignaturas',this.datos);
    console.log(this.asignaturas)
    if(this.asignaturas){
      this.displayedColumns =[
        'codigoAsignatura',
        'detalle',
        'creditos',
        'nivel'
      ];
      this.dataSource = new MatTableDataSource(this.asignaturas);
    }
  }
  traerInformacion(){

  }
  traerDocumentos(){

  }

}


import { Carrera } from './../../../modelos/carrera';
import { Malla } from './../../../modelos/malla';
import { Asignatura } from './../../../modelos/asignatura';
import { Matricula } from './../../../modelos/matricula';
import { DocumentoMatricula } from './../../../modelos/documento-matricula';
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
  misColumnas: string[];
  dataSource: any;
  dataTexto: any;
  url: string;
  panelOpenState = false;
  step = 0;
  foto: string;
  pNombre: string;
  sNombre: string;
  pApellido: string;
  mApellido: string;
  identificacion: string;
  emailInstitucional: string;
  emailPersonal: string;
  carrera: string;
  nivel: string;
  pdfTituloGrado: string;
  pdfAsignacionCupo: string;
  pdfCedula: string;
  matriculas :Matricula[];
  idEstudiante: number;
  auxiliarAsignaturasSolicitadas = [];
  Carrera : Carrera;
  checked = false;
  indeterminate = false;

  constructor(
    private api: ApiService,
    private server: ServerService,
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //En datos esta el idEstudiante refiriendose a personaRol y periodoLectivo
      //idPersona Seleccionada
      //y tambien el idCarrera
    this.datos=data
    this.idEstudiante = this.datos.idEstudiante
    this.url = this.server.getUrl();
    this.foto='';
    this.pNombre='';
    this.sNombre='';
    this.mApellido='';
    this.identificacion='';
    this.pdfTituloGrado ='';
    this.pdfAsignacionCupo='';
    this.pdfCedula='';
    this.emailInstitucional='';
    this.emailPersonal='';
    this.nivel='';
    this.carrera='';
  }

  ngOnInit(): void {
    this.traerInformacion()
    this.traerAsignaturas()
    this.traerDocumentos()
  }

  async traerAsignaturas(){

    console.log(this.datos.idCarrera)
    this.asignaturasSolicitadas = await this.api.sendApi('obtener-asignaturas',this.datos);

    const resultado=[];
    const textoMatricula =[];
    if(this.asignaturasSolicitadas){
      for(const iterador of this.asignaturasSolicitadas){
        if(iterador.Asignatura.Malla.idCarrera==this.datos.idCarrera)
        {
          await this.auxiliarAsignaturasSolicitadas.push(iterador)
        }
      }

  }

  this.matriculas = await this.api.sendApi('encontrar-matricula',this.datos);

  for(let i=0; i<this.auxiliarAsignaturasSolicitadas.length;i++)
  {
    for(let j= 0; j<this.matriculas.length;j++)
    {
      if(this.auxiliarAsignaturasSolicitadas[i].idAsignatura==this.matriculas[j].idAsignatura && this.idEstudiante==this.matriculas[j].idEstudiante)
      {
        resultado[i]=1
      }
    }
  }

  for(let i=0; i<resultado.length;i++)
  {
    if(resultado[i]==1){
      textoMatricula.push("Segunda Matricula")
    }
    else
    {
      textoMatricula.push("Primera Matricula")
    }
  }
  this.displayedColumns =[
    'codigoAsignatura',
    'detalle',
    'creditos',
    'nivel',
    'numeroMatricula'
  ];
  this.dataSource = new MatTableDataSource(this.auxiliarAsignaturasSolicitadas);
  this.nivel =  this.auxiliarAsignaturasSolicitadas[0].Asignatura.PeriodosAcademico.nivel
}


  async traerInformacion(){
    this.persona = await this.api.sendApi('leer-uno', this.datos);
    this.pNombre = this.persona.primerNombre
    this.sNombre = this.persona.segundoNombre
    this.pApellido = this.persona.apellidoPaterno
    this.mApellido = this.persona.apellidoMaterno
    this.identificacion = this.persona.identificacion
    this.foto = this.persona.foto
    this.emailPersonal= this.persona.emailPersonal
    this.emailInstitucional= this.persona.emailInstitucional
  }

  async traerDocumentos(){
    this.documentoMatricula = await this.api.sendApi('leer-documentos-matricula',this.datos);
    this.Carrera = await this.api.sendApi('leer-carrera',this.datos);
    this.pdfCedula= this.documentoMatricula.pdfCedula
    this.pdfTituloGrado = this.documentoMatricula.pdfTituloGrado
    this.pdfAsignacionCupo = this.documentoMatricula.pdfAsignacionCupo
    this.carrera = this.Carrera.detalle
  }
  // Visualiza PDF en una pestaña
  verFile(urlFile: string, directorio: string) {
    window.open(`${this.url}ver-archivo/${urlFile}/${directorio}`, 'blank');

  }


}
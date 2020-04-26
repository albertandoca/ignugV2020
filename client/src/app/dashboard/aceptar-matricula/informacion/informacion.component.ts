import { ToastrService } from 'ngx-toastr';
import { Observacion } from './../../../modelos/observacion';
import { AutorizadoService } from './../../../servicios/autorizado.service';
import { PersonaLogin } from './../../../modelos/persona-login';
import { Carrera } from './../../../modelos/carrera';
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

  personaLogin: PersonaLogin;
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
  resultado= [];
  slider : boolean [];
  mostrar: boolean;
  mostrar1: boolean;
  mostrar2: boolean;
  ninguno : boolean;
  recomendacion : string;

  constructor(
    private autorizado: AutorizadoService,
    private api: ApiService,
    private server: ServerService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      //En datos esta el idEstudiante refiriendose a personaRol y periodoLectivo
      //idPersona Seleccionada
      //y tambien el idCarrera
      // tambien envio el idSolicitud
    this.datos=data
    this.ninguno = true;
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
    this.recomendacion='';
    this.slider = [false,false,false];

  }

  ngOnInit(): void {

    this.personaLogin = this.autorizado.getPersonaLogin();
    this.traerInformacion()
    this.traerAsignaturas()
    this.traerDocumentos()
  }

  async traerAsignaturas(){

    console.log(this.datos.idCarrera)
    this.asignaturasSolicitadas = await this.api.sendApi('obtener-asignaturas',this.datos);

    const textoMatricula =[];
    if(this.asignaturasSolicitadas){
      for(const iterador of this.asignaturasSolicitadas){
        if(iterador.Asignatura.Malla.idCarrera==this.datos.idCarrera)
        {
          await this.auxiliarAsignaturasSolicitadas.push(iterador)
        }
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


  this.matriculas = await this.api.sendApi('encontrar-matricula',this.datos);

  for(let k =0 ; k<this.auxiliarAsignaturasSolicitadas.length;k++)
  {
    this.resultado[k]=0
  }

   for(let i=0; i<this.auxiliarAsignaturasSolicitadas.length;i++)
  {
    for(let j= 0; j<this.matriculas.length;j++)
    {
      if(this.auxiliarAsignaturasSolicitadas[i].idAsignatura===this.matriculas[j].idAsignatura && this.idEstudiante===this.matriculas[j].idEstudiante)
      {
        this.resultado[i] = this.resultado[i] + 1
      }
    }
  }
  //console.log(this.resultado)
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
 async enviarInformacion()
  {
  if(this.slider[0]==false&&this.slider[1]==false&&this.slider[2]==false){
    let numeroMatriculaAux = " ";
    console.log("Entre")
    console.log(this.datos.idEstudiante)
    //Cuando todo esta correcto
    for(let i=0; i<this.resultado.length;i++){
      if(this.resultado[i]==0)
      {
        numeroMatriculaAux = "Primera"
      }
      if(this.resultado[i]==1)
      {
        numeroMatriculaAux = "Segunda"
      }
      if(this.resultado[i]==2)
      {
        numeroMatriculaAux = "Tercera"
      }
      const matricula: Matricula = {
        idEstudiante: this.datos.idEstudiante,
        idAsignatura: this.auxiliarAsignaturasSolicitadas[i].idAsignatura,
        codigo: "2020_3_DF_US_1",
        tipoMatricula:  "Ordinaria",
        numeroMatricula : numeroMatriculaAux,
        pdfMatricula:  "asdasdasdas.pdf",
        creadoPor: this.personaLogin.id,
        modificadoPor: this.personaLogin.id,
        estado: true
      };
      //Este crea un registro en matriculas por cada asignatura funciona
      await this.api.sendApi('guardar-matricula',matricula);
    }
    //Este cambia la solicitud de aplicado a matriculado funciona (error transaccion)
      await this.api.sendApiPut('update.solicitud.matricula',this.datos)

      //Este cambia el estado de los cupos de  Aplicado a Matriculado en la tabla cupos asignaturas  (no funciona pero funcionaba)
       //await this.api.sendApiPut('matricular-cupo', this.auxiliarAsignaturasSolicitadas);
  }
  else
  {
    this.toastr.info('no envio informacio un pdf esta erroneo')
    //Primero cambiar la solicitud de Aplicado->Erroneo funciona (error transaccion)
    await this.api.sendApiPut('update.solicitud.matricula.erroneo',this.datos)
    //Segundo no guardar matricula
    //Tercero se queda en aplicado no hago nada
    //Agregar observacion en tabla de documentos
    const observacion: Observacion = {
      idCarrera: this.datos.idCarrera,
      idEstudiante: this.datos.idEstudiante,
      observacion: this.recomendacion
    };
    //Enviar la informacion erronea
    //await this.api.sendApiPut('update.documentos.matricula.erroneo',observacion)
  }
}
}

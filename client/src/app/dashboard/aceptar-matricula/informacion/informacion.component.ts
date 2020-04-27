import { EnvioComponent } from './envio/envio.component';
import { Solicitud } from './../../../modelos/solicitud';
import { ToastrService } from 'ngx-toastr';
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
import { MatDialog } from '@angular/material/dialog';


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
  datos: any;
  dato: any;
  cerrar : boolean;
  expandedElement: any;
  asignaturasSolicitadas: CupoAsignatura[];
  asignaturaSolicitada: CupoAsignatura;
  persona: Persona;
  documento: DocumentoMatricula;
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
  asignaturasSolicitadasMalla: CupoAsignatura[];

  constructor(
    private autorizado: AutorizadoService,
    private api: ApiService,
    private dialog: MatDialog,
    private server: ServerService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Solicitud){
      //En datos esta el idEstudiante refiriendose a personaRol y periodoLectivo
      //idPersona Seleccionada
      //y tambien el idCarrera
      // tambien envio el idSolicitud
    this.ninguno = true;
    this.idEstudiante = this.data.idEstudiante
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
    this.persona = {
      identificacion: '',
      primerNombre: '',
      segundoNombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      emailPersonal: '',
      emailInstitucional: '',
      foto: ''
    },
    this.documento ={
      pdfCedula: '',
      pdfTituloGrado: '',
      pdfAsignacionCupo: ''
    }

    this.personaLogin = this.autorizado.getPersonaLogin();
    this.traerAsignaturas()
    this.traerDocumentos()
    this.traerInformacion()

  }

  async traerAsignaturas(){
    this.datos = {
      idPersonaSeleccionada: this.data.PersonasRole.idPersona,
      idPeriodoLectivo: this.data.idPeriodoLectivo
    }
    console.log(this.datos.idCarrera)
    this.asignaturasSolicitadas = await this.api.sendApi('obtener-asignaturas',this.datos);
    this.asignaturasSolicitadasMalla = this.asignaturasSolicitadas.filter(asignatura => asignatura.Asignatura.Malla.idCarrera == this.data.idCarrera)
    this.auxiliarAsignaturasSolicitadas = this.asignaturasSolicitadasMalla
    this.displayedColumns =[
      'codigoAsignatura',
      'detalle',
      'creditos',
      'nivel',
      'numeroMatricula'
    ];
  this.dataSource = new MatTableDataSource(this.asignaturasSolicitadasMalla);
    let i = 0
  for (const asignatura of this.asignaturasSolicitadasMalla)  {
    this.datos = {
      idEstudiante: this.data.idEstudiante,
      idAsignatura: asignatura.idAsignatura
    }
    this.matriculas = await this.api.sendApi('encontrar-matricula',this.datos);
    this.resultado.push(this.matriculas.length + 1)
    if (this.matriculas.length === 0) {
      this.asignaturasSolicitadasMalla[i]. numeroMatricula = 'Primera';
    }
    if (this.matriculas.length === 1) {
      this.asignaturasSolicitadasMalla[i].numeroMatricula = 'Segunda';
    }
    if (this.matriculas.length === 2) {
      this.asignaturasSolicitadasMalla[i].numeroMatricula = 'Tercera';
    }
    i++
  }
}

  async traerInformacion(){
    this.carrera = this.data.Carrera.detalle
    this.datos ={
      idPersonaSeleccionada: this.data.PersonasRole.idPersona
    }
    this.persona = await this.api.sendApi('leer-uno', this.datos);
    this.nivel =  this.asignaturasSolicitadasMalla[0].Asignatura.PeriodosAcademico.nivel
  }

  async traerDocumentos(){
    this.datos = {
      idEstudiante: this.data.idEstudiante,
      idCarrera:   this.data.idCarrera
    }
    this.documento = await this.api.sendApi('leer-documentos-matricula',this.datos);
  }
  // Visualiza PDF en una pestaña
  verFile(urlFile: string, directorio: string) {
    window.open(`${this.url}ver-archivo/${urlFile}/${directorio}`, 'blank');

  }

 async enviarInformacion()
  {
    /*let opcion;
    const dialogRef = this.dialog.open(EnvioComponent, {
      width: '350px',
      disableClose: false,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe( res => {
        if(res==1)
        {
          opcion=res
        }
        if(res==2)
        {
          opcion=res
        }
    });

  if(opcion==1)
  {*/
    if(this.slider[0]==false&&this.slider[1]==false&&this.slider[2]==false){
     for (const asignatura of this.asignaturasSolicitadasMalla){
        const matricula: Matricula = {
          idEstudiante: this.data.idEstudiante,
          idAsignatura: asignatura.idAsignatura,
          codigo: "2020_3_DF_US_1",
          tipoMatricula:  "Ordinaria",
          numeroMatricula : asignatura.numeroMatricula,
          pdfMatricula:  "asdasdasdas.pdf",
          creadoPor: this.personaLogin.id,
          modificadoPor: this.personaLogin.id,
          estado: true
        };
        await this.api.sendApi('guardar-matricula',matricula);
      }

      this.datos ={
        estado: 'Matriculado',
        id: this.data.id
      }

      await this.api.sendApi('update.solicitud.matricula',this.datos);

       for(const asig of this.auxiliarAsignaturasSolicitadas)
      {
        await this.api.sendApi('matricular-cupo', asig);
      }
      this.toastr.info('Se matriculo correctamente al alumno')
    }
    else
    {
      this.datos = {
        estado: 'Erroneo',
        id: this.data.id
      }
      await this.api.sendApi('update.solicitud.matricula.erroneo',this.datos);
      this.dato = {
        idCarrera: this.data.idCarrera,
        idEstudiante: this.data.idEstudiante,
        observacion: this.recomendacion
      }
      await this.api.sendApi('update.documentos.matricula.erroneo',this.dato)
      this.toastr.info('Se enviaron correctamente las recomendaciones para arreglar los PDF')
    }
    this.toastr.info('Se envio la información con exito')
  /*}
  if(opcion==2)
  {
    this.toastr.info('Se cancelo el envio')
  }
  else{
    this.toastr.info('Aun no tengo informacion')
  }*/
}

}

import { ServerService } from './../../servicios/server.service';
import { Instituto } from './../../modelos/instituto';
import { Asignatura } from './../../modelos/asignatura';
import { DocenteAsignatura } from './../../modelos/docente-asignatura';
import { PeriodoLectivo } from './../../modelos/periodo-lectivo';
import { PersonaLogin } from './../../modelos/persona-login';
import { AutorizadoService } from './../../servicios/autorizado.service';
import { ApiService } from './../../servicios/api.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropListGroup } from '@angular/cdk/drag-drop';
import 'chartjs-plugin-labels';
import { Persona } from 'src/app/modelos/persona';



@Component({
  selector: 'app-distributivo-docente',
  templateUrl: './distributivo-docente.component.html',
  styleUrls: ['./distributivo-docente.component.scss']
})
export class DistributivoDocenteComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true
  };
  public pieChartLabels: Label[] = ['Asignado', 'Por asignar'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [
    {
      labels: {
        render: 'percentage',
        fontColor: ['green', 'white'],
        precision: 2
      }
    }
  ];

  charts: Array<any>;
  totalAsignaturas: Array<any>;
  totalDocentesAsignaturas: Array<any>;
  porAsignar: Array<any>;
  personaLogin: PersonaLogin;
  vistaChart: number;
  periodoLectivo: PeriodoLectivo;
  nivelRol: string;
  ids: Array<number>;
  dataList: Array<any>;
  asignaturas: Array<Asignatura>;
  centrarParalelos: string;
  institutoSeleccionado: number;
  institutos: Array<Instituto>;
  url: string;
  ultimoIds: Array<number>;
  textoAyuda: string;
  tituloFiltro: string;
  contenedorAsignatura: Array<Array<any>>;
  docentes: Array<any>;
  docentesOrg: Array<Persona>;
  docentesAsignaturas: Array<DocenteAsignatura>;
  docenteAsignatura: DocenteAsignatura;
  idCarrera: number;
  iconoChart: Array<boolean>;
  colorDocente: string;
  verAsignatura: boolean;

  constructor(
    private apiService: ApiService,
    private autorizado: AutorizadoService,
    private serverService: ServerService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.contenedorAsignatura = [];
    this.docentesOrg = [];
    this.docentes = [];
    this.iconoChart = [];
    this.verAsignatura = false;
    this.url = this.serverService.getUrl();
    this.vistaChart = 0;  // valor de incio dado rolUsuario
    this.charts = [];
    this.institutoSeleccionado = 999999;
    this.nivelRol = 'Instituto';
    this.ids = [1, 2, 3, 4, 5];
    this.periodoLectivoActivo();
    this.leerInstitutos(this.ids);
    this.colorDocente = 'red';
  }


  async periodoLectivoActivo() {
    const res = await this.apiService.sendApi('periodo-lectivo-activo');
    this.periodoLectivo = res[0] || null;
    this.dataChart(this.ids, true);
  }

  async leerInstitutos(ids: Array<number>) {
    this.institutos = await this.apiService.sendApi('leer-institutos', ids);
  }


  rolUsuario() {
    // obtener el menor permiso detallado en el menu
    const rolPrincipal = 0;
    for (const rol of this.personaLogin.PersonasRoles) {
      if (rolPrincipal > rol.Role.id) {

      }
    }
    this.personaLogin = this.autorizado.getPersonaLogin();

  }

  async dataChart(ids: number[], bandera: boolean, idPA?: number) {
    this.ultimoIds = ids;
    this.verAsignatura = false;
    this.charts = [];
    const datos = {
      idPeriodoLectivo: this.periodoLectivo.id,
      grupo: null,
      idsInstitutos: null,
      idsCarreras: null,
      idMalla: null,
      idPeriodoAcademico: null
    };

    if (this.vistaChart === 0 && this.nivelRol === 'Instituto') {       // Carreras
      console.log('uno');
      datos.grupo = 2;
      datos.idsInstitutos = ids;
    } else if (this.vistaChart === 0 && this.nivelRol === 'Carrera') {
      datos.grupo = 2;
      datos.idsCarreras = ids;
      this.tituloFiltro = 'CARRERAS';
    }
    if (this.vistaChart === 1) {  // Mallas
      datos.grupo = 1;
      datos.idsCarreras = ids;
      this.idCarrera = ids[0];
      this.tituloFiltro = 'CARRERA MALLA';
    }
    if (this.vistaChart === 2) { // periodo académicos
      datos.grupo = 0;
      datos.idMalla = ids[0];
      this.tituloFiltro = 'CARRERAS MALLA PA';
    }
    if (this.vistaChart === 3) {  // paralelos Jornadas
      datos.grupo = 0;
      datos.idMalla = ids[0];
      datos.idPeriodoAcademico = idPA;
    }
    console.log(datos);
    if (this.vistaChart <= 2) {
      this.totalAsignaturas = await this.apiService.sendApi('contar-asignaturas', datos);
      this.totalDocentesAsignaturas = await this.apiService.sendApi('contar-docentes-asignaturas', datos);
    }
    if (this.vistaChart === 3) {
      this.totalAsignaturas = await this.apiService.sendApi('leer-periodos-academicos-paralelos', datos);
      this.totalDocentesAsignaturas = await this.apiService.sendApi('contar-docentes-asignaturas-paralelos', datos);
      this.asignaturas = await this.apiService.sendApi('leer-asignaturas-periodo-academico', datos);
      this.centrarParalelos = this.totalAsignaturas.length > 5 ? 'start start' : 'center';
      for (const total of this.totalAsignaturas) {
        let banderaAux = true;
        for (const totalDocente of this.totalDocentesAsignaturas) {
          if (total.idJornada === totalDocente.idJornada && total.idParalelo === totalDocente.id) {
            banderaAux = false;
            this.charts.push({
              data: [totalDocente.count, this.asignaturas.length - totalDocente.count],
              label: total.detalle,
              idPeriodoAcademico: datos.idPeriodoAcademico,
              idMalla: datos.idMalla,
              idJornada: total.idJornada,
              idParalelo: total.idParalelo
            });
          }
        }
        if (banderaAux) {
          this.charts.push({
            data: [0, this.asignaturas.length],
            label: total.detalle,
            idPeriodoAcademico: datos.idPeriodoAcademico,
            idMalla: datos.idMalla,
            idJornada: total.idJornada,
            idParalelo: total.idParalelo
          });
        }
        this.iconoChart.push(true);
      }
    }

    if (this.vistaChart <= 1) {
      for (const total of this.totalAsignaturas) {
        let banderaAux = true;
        for (const totalDocente of this.totalDocentesAsignaturas) {
          if (total.id === totalDocente.id) {
            banderaAux = false;
            this.charts.push({
              data: [totalDocente.count, total.count - totalDocente.count],
              label: totalDocente.detalle,
              id: [total.id]
            });
          }
        }
        if (banderaAux) {
          this.charts.push({
            data: [0, total.count],
            label: total.detalle,
            id: [total.id]
          });
        }
      }
    } else if (this.vistaChart === 2) {
      for (const total of this.totalAsignaturas) {
        let banderaAux = true;
        for (const totalDocente of this.totalDocentesAsignaturas) {
          if (total.idPeriodoAcademico === totalDocente.idPeriodoAcademico) {
            banderaAux = false;
            this.charts.push({
              data: [totalDocente.count, total.count - totalDocente.count],
              label: totalDocente.nivel,
              idPeriodoAcademico: totalDocente.idPeriodoAcademico,
              id: [totalDocente.id]
            });
          }
        }
        if (banderaAux) {
          this.charts.push({
            data: [0, total.count],
            label: total.nivel,
            idPerirodoAcademico: total.idPeriodoAcademico,
            id: [total.id]
          });
        }
      }
    }
    this.vistaChart++;
    console.log(this.vistaChart);
    console.log(this.charts);
  }

  async asignarDocentesParalelos(idM, idPA, idP, idJ, iChart) {
    if (this.iconoChart[iChart]) {
      this.verAsignatura = true;
      this.contenedorAsignatura = [];
      const datos = {
        idMalla: idM,
        idPeriodoAcademico: idPA,
        idJornada: idJ,
        idParalelo: idP,
        idPeriodoLectivo: this.periodoLectivo.id
      };

      this.docentesOrg = await this.apiService.sendApi('leer-docentes-carreras', this.idCarrera);
      this.docentes = this.docentesOrg;
      await this.contarHorasDocente();
      this.docentesAsignaturas = await this.apiService.sendApi('leer-docentes-asignaturas-paralelos', datos);

      let contador = 0;
      for (const asignatura of this.asignaturas) {
        let bandera = true;
        this.contenedorAsignatura[contador] = [];
        for (const docente of this.docentesAsignaturas) {
          if (this.asignaturas[contador].id === docente.idAsignatura) {
            this.contenedorAsignatura[contador].push(docente.Persona);
            this.contenedorAsignatura[contador][0].horas = await this.horasDocente(docente.Persona.id);
            bandera = false;
          }
        }
        if (bandera) {
          await this.contenedorAsignatura[contador].push();
        }
        contador++;
      }

      for (const contenedor of this.contenedorAsignatura) {
        if (contenedor[0]) {
          this.docentes = this.docentes.filter(docente => {
            if ( docente.id === contenedor[0].id) {
              return false;
            } else {
              return true;
            }
          });
        }
      }
      for (let i = 0; i < this.iconoChart.length; i++) {
        if (i === iChart) {
          this.iconoChart[i] = false;
        } else {
          this.iconoChart[i] = true;
        }
      }
    }
  }

  async horasDocente(id: number): Promise<number>{
    const horas = await this.docentes.find(docente => docente.id === id);
    return horas.horas;
  }

  async contarHorasDocente() {
    const datos = {
      idPeriodoLectivo: this.periodoLectivo.id,
      idCarrera: this.idCarrera
    };
    const horasDocentes = await this.apiService.sendApi('contar-horas-docentes', datos);
    for (const docente of this.docentes) {
      const numeroHoras = await horasDocentes.find(horas => horas.idDocente === docente.id);
      docente.horas = await numeroHoras ? numeroHoras.total : 0;
    }
  }

  dataChartInstituto() {
    this.vistaChart = 0;
    this.dataChart([this.institutoSeleccionado], true);
  }

  backDataChart() {
    this.vistaChart -= 2;
    this.tituloFiltro = '';
    this.dataChart(this.ultimoIds, true);
  }

  verDocentes() {
    this.vistaChart = 5;
  }

  txtAyuda() {
    this.textoAyuda = 'Debemos colocar texto ayuda por cada pantalla';
  }

  guardarDocenteAsignatura() {

  }


  drop(event: CdkDragDrop<number[]>, i: number) {
    if (event.container.data.length > 0) {
      return false;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.contenedorAsignatura[i][0]);
    console.log(event);
    if (event.previousContainer.id === 'docentes') {
      this.contenedorAsignatura[i][0].horas =  parseInt(this.contenedorAsignatura[i][0].horas) + this.asignaturas[i].creditos;
    } else {
      const id = parseInt(event.previousContainer.id);
      this.contenedorAsignatura[i][0].horas =  parseInt(this.contenedorAsignatura[i][0].horas) +
                                               this.asignaturas[i].creditos - this.asignaturas[id].creditos;

    }

  }

  dropDocente(event: CdkDragDrop<number[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    if (event.previousContainer.id !== 'docente') {
      const idOld = parseInt(event.previousContainer.id);
      const idNew = event.currentIndex;
      console.log(idOld);
      console.log(idNew);
      this.docentes[idNew].horas =  parseInt(this.docentes[idNew].horas) - this.asignaturas[idOld].creditos;
    }
  }

  applyFilter(event: Event) {
    console.log(event.target);
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    if (filterValue === '') {
      this.docentes = this.docentesOrg;
    } else {
      this.docentes = this.docentesOrg.filter(docente => docente.apellidoPaterno.includes(filterValue));

      // mejorar el filtro
    }
  }


}

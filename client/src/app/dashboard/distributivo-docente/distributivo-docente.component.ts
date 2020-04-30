import { ToastrService } from 'ngx-toastr';
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
  ultimoIds: Array<any>;
  textoAyuda: string;
  tituloFiltro: string;
  contenedorAsignatura: Array<Array<any>>;
  docentes: Array<any>;
  docentesOrg: Array<Persona>;
  docentesAsignaturas: Array<DocenteAsignatura>;
  guardarDocentesAsignaturas: Array<DocenteAsignatura>;
  idCarrera: number;
  idMalla: number;
  idPeriodoAcademico: number;
  iconoChart: Array<boolean>;
  iconoGuardaDocenteAsignatura: Array<boolean>;
  colorDocente: string;
  verAsignatura: boolean;
  idJornada: number;
  idParalelo: number;
  iChart: number;
  ordHora: boolean;
  ordNombre: boolean;

  constructor(
    private apiService: ApiService,
    private autorizado: AutorizadoService,
    private toastr: ToastrService,
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
    this.ultimoIds = [[], [], [], []];
    this.ordHora = true;
    this.ordNombre = true;
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
    this.dataChart(this.ids);
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

  async dataChart(ids: number[], idPA?: number) {
    console.log(this.ultimoIds);
    console.log(this.vistaChart);
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
      this.ultimoIds[0] = ids;
      datos.grupo = 2;
      datos.idsInstitutos = ids;
    } else if (this.vistaChart === 0 && this.nivelRol === 'Carrera') {
      this.ultimoIds[0] = ids;
      datos.grupo = 2;
      datos.idsCarreras = ids;
      this.tituloFiltro = 'CARRERAS';
    }
    if (this.vistaChart === 1) {  // Mallas
      this.ultimoIds[1] = ids;
      datos.grupo = 1;
      datos.idsCarreras = ids;
      this.idCarrera = ids[0];
      this.tituloFiltro = 'CARRERA MALLA';
    }
    if (this.vistaChart === 2) { // periodo académicos
      this.ultimoIds[2] = ids;
      datos.grupo = 0;
      datos.idMalla = ids[0];
      this.tituloFiltro = 'CARRERAS MALLA PA';
      console.log('llego 2');
    }
    if (this.vistaChart === 3) {  // paralelos Jornadas
      this.ultimoIds[3] = ids;
      datos.grupo = 0;
      datos.idMalla = ids[0];
      datos.idPeriodoAcademico = idPA;
    }
    if (this.vistaChart < 3) {
      this.totalAsignaturas = await this.apiService.sendApi('contar-asignaturas', datos);
      console.log(this.totalAsignaturas);
      this.totalDocentesAsignaturas = await this.apiService.sendApi('contar-docentes-asignaturas', datos);
      console.log(this.totalDocentesAsignaturas);
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
  }

  async asignarDocentesParalelos(idM, idPA, idP, idJ, iChart) {
    this.iconoGuardaDocenteAsignatura = [];
    this.guardarDocentesAsignaturas = [];
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
      this.iChart = iChart;
      this.idMalla = idM;
      this.idPeriodoAcademico = idPA;
      this.idJornada = idJ;
      this.idParalelo = idP;
      this.docentesOrg = await this.apiService.sendApi('leer-docentes-carreras', this.idCarrera);
      this.docentes = this.docentesOrg;
      await this.contarHorasDocente();
      this.docentesAsignaturas = await this.apiService.sendApi('leer-docentes-asignaturas-paralelos', datos);

      let contador = 0;
      for (const asignatura of this.asignaturas) {
        this.iconoGuardaDocenteAsignatura.push(true);
        this.guardarDocentesAsignaturas.push();
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

  async horasDocente(id: number): Promise<number> {
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
    this.dataChart([this.institutoSeleccionado]);
  }

  backDataChart() {
    if (this.vistaChart === 4) {
      this.vistaChart = 2;
      this.dataChart(this.ultimoIds[2]);
    } else if (this.vistaChart === 3) {
      this.vistaChart = 1;
      this.dataChart(this.ultimoIds[1]);
    } else if (this.vistaChart === 2) {
      this.vistaChart = 0;
      this.dataChart(this.ultimoIds[0]);
    }
  }

  verDocentes() {
    this.vistaChart = 5;
  }

  txtAyuda() {
    this.textoAyuda = 'Colocar instrucciones en funcion de vistaChart para se vidualizadas en el contenedor';
  }

  async guardarDocenteAsignatura(i: number) {
    const guardar = this.apiService.sendApi('gestionar-docente-asignatura', this.guardarDocentesAsignaturas[i]);
    if (guardar) {
      this.toastr.success('Registro guardado', 'Guardar OK');
      this.iconoGuardaDocenteAsignatura[i] = true;
      //this.asignarDocentesParalelos(this.idMalla, this.idPeriodoAcademico, this.idParalelo, this.idJornada, this.iChart);
      this.guardarDocentesAsignaturas[i] = null;
    } else {
      this.toastr.error('Registro guardado', 'Guardar OK')
    }
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
    let id = null;

    if (event.previousContainer.id === 'docentes') {
      id = i;
      this.contenedorAsignatura[i][0].horas =  parseInt(this.contenedorAsignatura[i][0].horas) + this.asignaturas[i].creditos;
      this.iconoGuardaDocenteAsignatura[i] = false;
    } else {
      id = parseInt(event.previousContainer.id);
      this.contenedorAsignatura[i][0].horas =  parseInt(this.contenedorAsignatura[i][0].horas) +
                                               this.asignaturas[i].creditos - this.asignaturas[id].creditos;
      if (this.iconoGuardaDocenteAsignatura[id]) {
        this.iconoGuardaDocenteAsignatura[i] = false;
        this.iconoGuardaDocenteAsignatura[id] = false;
        for (const docente of this.docentesAsignaturas) {
          if (docente.idAsignatura === this.asignaturas[id].id &&
            docente.idJornada === this.idJornada &&
            docente.idParalelo === this.idParalelo) {
              this.guardarDocentesAsignaturas[id] = docente;
              this.guardarDocentesAsignaturas[id].estado = false;
              delete this.guardarDocentesAsignaturas[id].Persona;
              delete this.guardarDocentesAsignaturas[id].Asignatura;
            }
          break;
        }
      } else {
        this.iconoGuardaDocenteAsignatura[i] = false;
        this.iconoGuardaDocenteAsignatura[id] = true;
      }
    }
    let bandera = true;
    for (const docente of this.docentesAsignaturas) {
      if (docente.idAsignatura === this.asignaturas[i].id &&
        docente.idJornada === this.idJornada &&
        docente.idParalelo === this.idParalelo) {
          this.guardarDocentesAsignaturas[i] = docente;
          delete this.guardarDocentesAsignaturas[i].Persona;
          delete this.guardarDocentesAsignaturas[i].Asignatura;
          bandera = false;
        }
      break;
    }
    if (bandera) {
      this.guardarDocentesAsignaturas[i] = {
        id: null,
        idDocente: this.contenedorAsignatura[i][0].id,
        idAsignatura: this.asignaturas[i].id,
        idPeriodoLectivo: this.periodoLectivo.id,
        idJornada: this.idJornada,
        idParalelo: this.idParalelo,
        estado: true
      };
    }

  }

  dropDocente(event: CdkDragDrop<number[]>) {

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
      this.docentes[idNew].horas =  parseInt(this.docentes[idNew].horas) - this.asignaturas[idOld].creditos;

      if (this.iconoGuardaDocenteAsignatura[idOld]) {
        for (const docente of this.docentesAsignaturas) {
          if (docente.idAsignatura === this.asignaturas[idOld].id &&
            docente.idJornada === this.idJornada &&
            docente.idParalelo === this.idParalelo) {
              this.guardarDocentesAsignaturas[idOld] = docente;
              this.guardarDocentesAsignaturas[idOld].estado = false;
              delete this.guardarDocentesAsignaturas[idOld].Persona;
              delete this.guardarDocentesAsignaturas[idOld].Asignatura;
            } else {
              this.guardarDocentesAsignaturas[idOld] = null;
            }
          break;
        }
        if (this.guardarDocentesAsignaturas[idOld]) {
          this.guardarDocenteAsignatura(idOld);
        }
      } else {
        this.iconoGuardaDocenteAsignatura[idOld] = true;
      }
    }

  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    const filtro = filterValue.trim().toLowerCase();
    if (filterValue === '') {
      this.docentes = this.docentesOrg;
    } else {
      this.docentes = this.docentesOrg.filter(docente => {
        const apellidoPaterno = docente.apellidoPaterno.trim().toLowerCase();
        const apellidoMaterno = docente.apellidoMaterno.trim().toLowerCase();
        const primerNombre = docente.primerNombre.trim().toLowerCase();
        const segundoNombre = docente.segundoNombre.trim().toLowerCase();

        if (apellidoPaterno.includes(filtro) || apellidoMaterno.includes(filtro) ||
        primerNombre.includes(filtro) || segundoNombre.includes(filtro)) {
          return true;
        }
      });
    }
  }

  ordenarNombre() {
    if (this.ordNombre) {
      this.docentes.sort((a, b) => {
        if (a.apellidoPaterno < b.apellidoPaterno) {
          return -1;
        } else if (a.apellidoPaterno > b.apellidoPaterno) {
          return 1;
        } else {
          if (a.apellidoMaterno < b.apellidoMaterno) {
            return -1;
          } else if (a.apellidoMaterno > b.apellidoMaterno) {
            return 1;
          } else {
            if (a.primerNombre < b.primerNombre) {
              return -1;
            } else if (a.primerNombre > b.primerNombre) {
              return 1;
            } else {
              if (a.segundoNombre < b.segundoNOmbre) {
                return -1;
              } else if (a.segundoNombre > b.segundoNombre) {
                return 1;
              } else {
                return 0;
              }
            }
          }
        }
      });
    } else {
      this.docentes.sort((a, b) => {
        if (b.apellidoPaterno < a.apellidoPaterno) {
          return -1;
        } else if (b.apellidoPaterno > a.apellidoPaterno) {
          return 1;
        } else {
          if (b.apellidoMaterno < a.apellidoMaterno) {
            return -1;
          } else if (b.apellidoMaterno > a.apellidoMaterno) {
            return 1;
          } else {
            if (b.primerNombre < a.primerNombre) {
              return -1;
            } else if (b.primerNombre > a.primerNombre) {
              return 1;
            } else {
              if (b.segundoNombre < a.segundoNombre) {
                return -1;
              } else if (b.segundoNOmbre > a.segundoNombre) {
                return 1;
              } else {
                return 0;
              }
            }
          }
        }
      });
    }
    this.ordNombre = !this.ordNombre;
  }

  ordenarHora() {
    this.ordHora ? this.docentes.sort((a, b) => a.horas - b.horas) : this.docentes.sort((a, b) => b.horas - a.horas);
    this.ordHora = !this.ordHora;
  }
}

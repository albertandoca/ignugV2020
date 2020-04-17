import { CampoFormacion } from './campo-formacion';
import { PeriodoAcademico } from './periodo-academico';
import { Malla } from './malla';
export interface Asignatura {
  id: number;
  codigoAsignatura: string;
  detalle: string;
  creditos?: number;
  horasDocente?: number;
  horasPracticas?: number;
  horasAutonomas?: number;
  estado?: true;
  idMalla?: number;
  idPeriodoAcademico?: number;
  idCampoFormacion: number;
  idUnidadCurricular?: number;
  Malla?: Malla;
  PeriodosAcademico?: PeriodoAcademico;
  CamposFormacione?: CampoFormacion;
  createdAt?: Date;
  updatedAt?: Date;
}

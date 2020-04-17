import { CampoFormacion } from './campo-formacion';
import { PeriodoAcademico } from './periodo-academico';
import { Malla } from './malla';
export interface Asignatura {
  id: number;
  codigoAsignatura: string,
  detalle: string;
  creditos?: number;
  horasDocente?: number;
  horasPracticas?: number;
  horasAutonomas?: number;
  estado?: boolean;
  idMalla?: number;
  idPeriodoAcademico?: number;
  idUnidadCurricular?: number;
  idCampoFormacion?: number;
  Malla?: Malla;
  PeriodosAcademico?: PeriodoAcademico;
  CamposFormacion?:CampoFormacion;
  createdAt?: Date;
  updatedAt?: Date;
}

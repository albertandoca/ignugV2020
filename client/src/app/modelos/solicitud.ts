import { Carrera } from './carrera';
import { PeriodoLectivo } from './periodo-lectivo';
import { PersonaRol } from './persona-rol';
export interface Solicitud {
  id:number;
  pdfSolicitud: string;
  codigoSolicitud: string;
  idEstudiante: number;
  idCarrera:number;
  idPeriodoLectivo: number;
  estado: string;
  createdAt?: Date;
  updatedAt?: Date;
  PersonasRole: PersonaRol;
  PeriodosLectivo: PeriodoLectivo;
  Carrera: Carrera;
}

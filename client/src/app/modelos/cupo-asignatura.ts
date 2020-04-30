import { PeriodoLectivo } from './periodo-lectivo';
import { Asignatura } from './asignatura';
import { Persona } from './persona';
export interface CupoAsignatura {
  id: number;
  idEstudiante: number;
  idAsignatura: number;
  idPeriodoLectivo: number;
  creadoPor: number;
  modificadoPor: number;
  estado: string;
  Persona?: Persona;
  Asignatura: Asignatura;
  PeriodosLectivo: PeriodoLectivo;
  createdAt: Date;
  updatedAt: Date;
  numeroMatricula?: string;
}

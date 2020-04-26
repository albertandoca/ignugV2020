import { Asignatura } from './asignatura';
import { PersonaRol } from './persona-rol';

export interface Matricula {
  idEstudiante: number;
  idAsignatura: number;
  codigo: string;
  tipoMatricula: string;
  numeroMatricula: string;
  pdfMatricula: string;
  creadoPor?: number;
  modificadoPor?: number;
  estado: boolean;
  PersonaRol?: PersonaRol;
  Asignatura?: Asignatura
  createdAt?: Date;
  updatedAt?: Date;
}

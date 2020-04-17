import { Modalidad } from './modalidad';
import { Carrera } from './carrera';
export interface Malla {
  id: number;
  idCarrera?: number;
  idModalidad?: number,
  detalle: string;
  fecha?: Date;
  titulo?: string;
  numeroPeriodosAcademicos?: number;
  pdfResolucion?: string;
  estado?: boolean;
  createdAt?:  Date;
  updatedAt?:  Date;
  Carrera?: Carrera;
  Modalidad?: Modalidad;
}

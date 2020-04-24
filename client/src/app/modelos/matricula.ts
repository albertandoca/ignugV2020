import { PersonaRol } from './persona-rol';
import { Asignatura } from './asignatura';

export interface Matricula {
    idEstudiante: number;
    idAsignatura: number;
    codigo: string;
    tipoMatricula: string;
    numeroMatricula: string;
    pdfMatricula: string;
    creadoPor?: number;
    modificadoPor?: number;
    estado: string;
    PersonaRol?: PersonaRol;
    Asignatura?: Asignatura
    createdAt?: Date;
    updatedAt?: Date;
}

import { Carrera } from './carrera';
import { PersonaRol } from './persona-rol';
export interface DocumentoMatricula {
    pdfTituloGrado: string;
    pdfAsignacionCupo: string;
    pdfCedula: string;
    idEstudiante: number;
    idCarrera: number;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date;
    PersonaRol: PersonaRol;
    Carrera: Carrera;
}

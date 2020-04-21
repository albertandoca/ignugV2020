import { PersonaRol } from './persona-rol';
import { PeriodoLectivo } from './periodo-lectivo';

export interface Solicitud {
    pdfSolicitud: string;
    codigoSolicitud: string;
    idEstudiante: number;
    idPeriodoLectivo: number;
    estado: string;
    createdAt: Date,
    updatedAt: Date,
    PersonasRole: PersonaRol;
    PeriodosLectivo: PeriodoLectivo
}

import { Persona } from './persona';
import { PeriodoAcademico} from './periodo-academico';
export interface MaxHoraDocente  {
        id: number;
        idDocente: number;
        hora: number;
        idPerdiodoAcademico: number;
        PeriodoAcademico?: PeriodoAcademico;
        Persona?: Persona;
        estado: boolean;
        createdAt?: Date;
        updatedAt?: Date;
}


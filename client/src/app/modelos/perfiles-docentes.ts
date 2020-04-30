import { Persona } from './persona';

export interface PerfilesDocentes  {
        id: number;
        idDocente: number;
        areaAcademica: string;
        detalle: string;
        estado: boolean;
        Persona?: Persona;
        createdAt?: Date;
        updatedAt?: Date;
}


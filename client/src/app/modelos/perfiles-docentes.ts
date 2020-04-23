import { Persona } from './persona';
export interface PerfilesDocentes  {
        id: number;
        idDocente: number;
        areaAcademica: string;
        detalle: string;
        Persona?: Persona;
        estado: boolean;
        createdAt?: Date;
        updatedAt?: Date;
}


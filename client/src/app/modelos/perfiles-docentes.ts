import { Persona } from './persona';

export interface PerfilesDocentes  {
        id: number;
        idDocente: number;
        detalle: string;
        estado: boolean;
        Persona?: Persona;
        createdAt?: Date;
        updatedAt?: Date;
}


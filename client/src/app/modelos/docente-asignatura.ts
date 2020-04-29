import { PeriodoLectivo } from './periodo-lectivo';
import { Asignatura } from './asignatura';
import { Persona } from './persona';
import { Paralelo } from './paralelo';
import { Jornada } from './jornada';

export interface DocenteAsignatura  {
        id: number;
        idDocente: number;
        idAsignatura: number;
        idPeriodoLectivo: number;
        idJornada: number;
        idParalelo: number;
        estado?: string;
        Persona?: Persona;
        Asignatura?: Asignatura;
        PeriodosLectivo: PeriodoLectivo;
        Jornada: Jornada;
        Paralelo: Paralelo;
        createdAt?: Date;
        updatedAt?: Date;
}

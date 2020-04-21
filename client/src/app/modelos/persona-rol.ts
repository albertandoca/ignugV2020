import { Carrera } from './carrera';
import { Rol } from './rol';
import { Persona } from './persona';
export interface PersonaRol {
  id: number;
  idPersona?: number;
  idRol?: number;
  idInstituto?: number;
  urlDesignacion: string;
  observaciones: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date;
  Persona: Persona;
  Role: Rol;
  Carrera: Carrera;
}

import { PersonaRol } from './persona-rol';
import { TipoIdentificacion } from './tipo-identificacion';
export interface PersonaLogin {
  id: number;
  idTipoIdentificacion?: number;
  identificacion: string;
  primerNombre: string;
  segundoNombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  emailPersonal: string;
  emailInstitucional: string;
  TiposIdentificacione: TipoIdentificacion;
  foto: string;
  PersonasRoles: PersonaRol[];
}

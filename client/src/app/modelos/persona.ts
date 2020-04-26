import { TipoIdentificacion } from './tipo-identificacion';
export interface Persona {
  id?: number;
  idTipoIdentificacion?: number;
  identificacion: string;
  primerNombre: string;
  segundoNombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  emailPersonal: string;
  emailInstitucional: string;
  foto: string;
  psw?: string;
  semilla?: string;
  enLinea?: Date;
  estado?: string;
  createdAt?: Date;
  updatedAt?: Date;
  TiposIdentificacione?: TipoIdentificacion;
}

export interface Cuenta {
  id: number;
  idTipoIdentificacion: number;
  identificacion: string;
  foto: string;
  primerNombre: string;
  segundoNombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  emailPersonal: string;
  emailInstitucional: string;
  fechaDeNacimiento: Date;
  direccion: string;
  telefonos: string;
  operadora: string;
  estado?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

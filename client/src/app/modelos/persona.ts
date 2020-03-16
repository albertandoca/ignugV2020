export interface Persona {
    idTipoIdentificacion?: number;
    identificacion: string;
    primerNombre: string;
    segundoNombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    emailPersonal: string;
    emailInstitucional: string;
    psw?: string;
    semilla?: string;
    enLinea?: Date;
    estado?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

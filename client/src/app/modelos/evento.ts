export interface Evento {
  organizador: string;
  titulo: string;
  fecha: Date;
  hora: number;
  minuto: number;
  lugar: string;
  urlImagenEvento: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date;
}

import { Instituto } from './instituto';
export interface Carrera {
  id: number;
  idInstituto?: number;
  detalle: string;
  estado?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  Instituto?: Instituto;
}

export interface PeriodoLectivo {
  id: number;
  detalle: string;
  anio: string;
  periodo: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  estado?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Instituto {
  id: number;
  codigoIES?: string;
  razonSocial: string;
  ruc?: string;
  urlResolucion?: string;
  categoria?: string;
  urlLogotipo?: string;
  estado?: boolean
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Instituto {
  id: number;
  codigoIes?: string;
  razonSocial: string;
  ruc?: string;
  pdfRuc: string;
  resolucion?: string;
  pdfResolucion?: string;
  categoria?: string;
  logotipo?: string;
  estado?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  urlApi: string;
  titulo: string;
  verMenu: boolean;
  iconoMenu: string;

  constructor() {
    this.urlApi = 'http://localhost:3000/server/';
    this.estadoMenu(true, 'menu_open');
    this.cambiarTitulo('Menú principal');
  }

  cambiarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  estadoMenu(estado, icono) {
    this.verMenu = estado;
    this.iconoMenu = icono;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuPrincipalService {

  titulo: string;
  verMenu: boolean;
  iconoMenu: string;

  constructor() {
    this.estadoMenu(true, 'menu_open');
    this.cambiarTitulo('Menú principal');
  }

  cambiarTitulo(nuevoTitulo): void {
    this.titulo = nuevoTitulo;
  }

  estadoMenu(estado, icono): void {
    this.verMenu = estado;
    this.iconoMenu = icono;
  }
}

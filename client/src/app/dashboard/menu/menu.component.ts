import { MenuPrincipalService } from './../../servicios/menu-principal.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private MenuService: MenuPrincipalService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  personas() {
    this.MenuService.estadoMenu(false, 'menu');
    this.MenuService.cambiarTitulo('Personas');
    this.router.navigate(['/dashboard/personas']);
  }

  institutos() {
    this.MenuService.estadoMenu(false, 'menu');
    this.MenuService.cambiarTitulo('Gestión de institutos');
    this.router.navigate(['/dashboard/institutos']);
  }

  solicitudMatricula() {
    this.MenuService.estadoMenu(false, 'menu');
    this.MenuService.cambiarTitulo('Solicitud Matricula');
    this.router.navigate(['/dashboard/solicitud-matricula']);
  }

}

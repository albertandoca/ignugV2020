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
    private menuService: MenuPrincipalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuService.cambiarTitulo('Menu principal');
    this.menuService.estadoMenu(true, 'menu_open');
  }

  irComponente(titulo: string, url: string ) {
    this.menuService.estadoMenu(false, 'menu');
    this.menuService.cambiarTitulo(titulo);
    this.router.navigate([`dashboard/${url}`]);
  }

  aceptarMatricula() {
    this.menuService.estadoMenu(false, 'menu');
    this.menuService.cambiarTitulo('Aceptar Matricula');
    this.router.navigate(['/dashboard/aceptar-matricula']);
  }

}

import { Router } from '@angular/router';
import { GlobalService } from './../../servicios/global.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private global: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  personas() {
    this.global.estadoMenu(false, 'menu');
    this.global.cambiarTitulo('Personas');
    this.router.navigate(['/dashboard/personas']);
  }

  institutos() {
    this.global.estadoMenu(false, 'menu');
    this.global.cambiarTitulo('Gestión de institutos');
    this.router.navigate(['/dashboard/institutos']);
  }

}

import { GlobalService } from '../servicios/global.service';
import { AutorizadoService } from './../servicios/autorizado.service';
import { PersonaLogin } from './../modelos/persona-login';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  personaLogin: PersonaLogin;
  url: string;
  tituloModulo: string;
  iconoAgenda: string;
  verAgenda: boolean;
  colorMensaje: string;
  colorNotificacion: string;

  constructor(
    private autorizado: AutorizadoService,
    public global: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.personaLogin = this.autorizado.personaLogin;
      console.log(this.personaLogin);
      this.url = this.global.urlApi;
      this.verAgenda = true;
      this.iconoAgenda = 'more_vert';
      this.mensaje();
      this.notificacion();
      this.router.navigate(['dashboard/menu']);
  }

  menuPrincipal() {
    this.global.cambiarTitulo('Menu principal');
    this.global.estadoMenu(true, 'menu_open');
    this.router.navigate(['dashboard/menu']);
  }

  agenda() {
    this.verAgenda = !this.verAgenda;
    this.iconoAgenda = this.verAgenda ? 'more_vert' : 'drag_indicator';
  }

  reglamentos() {
    window.open(`http://yavirac.edu.ec/web/reglamentos/`, 'blank');
  }

  mensaje() {
    this.colorMensaje = 'primary';
    //
  }

  notificacion() {
    this.colorNotificacion = 'primary';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

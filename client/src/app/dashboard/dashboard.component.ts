import { apiService } from './../servicios/api.service';
import { MenuPrincipalService } from '../servicios/menu-principal.service';
import { AutorizadoService } from './../servicios/autorizado.service';
import { PersonaLogin } from './../modelos/persona-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../servicios/server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  personaLogin: PersonaLogin;
  iconoAgenda: string;
  verAgenda: boolean;
  colorMensaje: string;
  colorNotificacion: string;
  url: string;
  fotoPersona: any;

  constructor(
    private autorizado: AutorizadoService,
    public menuService: MenuPrincipalService,
    private router: Router,
    private server: ServerService,
    private api: apiService
  ) { }

  ngOnInit(): void {
    this.url = this.server.getUrl();
    this.personaLogin = this.autorizado.getPersonaLogin();
    this.verAgenda = true;
    this.iconoAgenda = 'more_vert';
    this.mensaje();
    this.notificacion();
    this.router.navigate(['dashboard/menu']);
  }

  controlMenuPrincipal() {
    this.menuService.cambiarTitulo('Menu principal');
    this.menuService.estadoMenu(true, 'menu_open');
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

  async verImagen( nombreFile: string, carpeta: string): Promise<any> {
    alert('iiiii');
    const datos = {
      urlFile: nombreFile,
      directorio: carpeta
    };
    let res: any;
    res = await this.api.verFileServer('ver-archivo', datos);
    console.log(res);
    return res;
  }
}

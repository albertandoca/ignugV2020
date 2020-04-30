import { MatTableDataSource } from '@angular/material/table';
import { Evento } from './../modelos/evento';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { LogService } from './../servicios/log.service';
import { ApiService } from './../servicios/api.service';
import { MenuPrincipalService } from '../servicios/menu-principal.service';
import { AutorizadoService } from './../servicios/autorizado.service';
import { PersonaLogin } from './../modelos/persona-login';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../servicios/server.service';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  eventos: Evento[];
  url: string;
  displayedColumns: string[];
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  personaLogin: PersonaLogin;
  iconoAgenda: string;
  verAgenda: boolean;
  colorMensaje: string;
  colorNotificacion: string;
  fotoPersona: any;

  constructor(
    private autorizado: AutorizadoService,
    public menuService: MenuPrincipalService,
    private router: Router,
    private server: ServerService,
    private api: ApiService,
    private logService: LogService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.leerEventos();
    this.url = this.server.getUrl();
    this.personaLogin = this.autorizado.getPersonaLogin();
    this.verAgenda = false;
    this.iconoAgenda = 'more_vert';
    this.mensaje();
    this.notificacion();

  }

  controlMenuPrincipal() {
    this.menuService.cambiarTitulo('Menu principal');
    this.menuService.estadoMenu(true, 'menu_open');
    this.router.navigate(['dashboard/menu']);
  }

  agenda() {
    this.verAgenda=!this.verAgenda
    if(this.verAgenda==true)
    {
      this.sidenav.open()
    }
    else{
      this.sidenav.close();
    }
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
    return res;
  }

  logOut() {
    localStorage.removeItem('loginKey');
    localStorage.removeItem('titulo');
    this.logService.logOut().subscribe(res => {
      if (res.data[0] > 0) {
        this.router.navigate(['/login']);
      } else {
        this.toastr.warning('No hay comunicación con el servidor, intente nuevamente', 'Logout fallo');
      }
    }, err => {
      this.toastr.warning('No hay comunicación con el servidor, intente nuevamente', 'Logout fallo');
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'F5' || event.code === 'F5') {
      event.stopPropagation();
      this.router.navigate([this.router.url]);
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    localStorage.setItem('titulo', this.menuService.titulo);
    return;
  }
  async leerEventos()
  {

    this.eventos = await this.api.sendApi('leer-eventos');

    this.displayedColumns = [
      'unico',
    ];

    this.dataSource = new MatTableDataSource(this.eventos);
  }
  applyFilters(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  close(reason: string) {
    this.verAgenda=!this.verAgenda
    this.sidenav.close();
    this.iconoAgenda = this.verAgenda ? 'more_vert' : 'drag_indicator';
  }
}

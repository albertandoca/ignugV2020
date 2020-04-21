import { MenuPrincipalService } from './menu-principal.service';
import { Router } from '@angular/router';
import { PersonaLogin } from './../modelos/persona-login';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoService {
  private personaLogin: PersonaLogin;
  private iat: number;
  private exp: number;
  private token: string;

  constructor(
    private router: Router,
    private menuService: MenuPrincipalService
  ) {
    const data = JSON.parse(localStorage.getItem('loginKey')) || null;
    if (data) {
      this.tokenData(data.tok);
    }

    // this.destruirToken();
  }

  tokenData(token): boolean {
    const decoded = jwt_decode(token);
    this.personaLogin = decoded.data || null;
    this.iat = decoded.iat;
    this.exp = decoded.exp;
    this.token = token;
    const data =  {
      persona: this.personaLogin,
      tok: this.token
    };
    if (this.exp * 1000 < Date.now() || !this.exp ) {
      localStorage.removeItem('loginKey');
      this.router.navigate(['/login']);
      return false;
    } else {
      localStorage.setItem('loginKey', JSON.stringify(data));
      if (this.router.url !== '/dashboard/menu') {
        this.menuService.estadoMenu(false, 'menu');
        if (this.menuService.titulo === 'Menú principal') {
          const titulo = localStorage.getItem('titulo');
          this.menuService.cambiarTitulo(titulo);
        }
      }
      return true;
    }

  }

  destruirToken(): void {
    this.personaLogin = null;
    this.iat = null;
    this.token = null;
    localStorage.clear();
  }

  getToken(): string {
    return this.token;
  }

  getPersonaLogin(): PersonaLogin {
    return this.personaLogin;
  }

}

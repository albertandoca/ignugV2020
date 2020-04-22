<<<<<<< HEAD
=======
import { MenuPrincipalService } from './menu-principal.service';
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa
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
<<<<<<< HEAD
    private router: Router
=======
    private router: Router,
    private menuService: MenuPrincipalService
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa
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
<<<<<<< HEAD
    console.log(this.iat, '   ', this.exp , '  ', Date.now());
    if (this.exp * 1000 < Date.now() || !this.exp ) {
      console.log('menr');
      localStorage.removeItem('loginKey');
      //this.router.navigate(['/login']);
      return false;
    } else {
      localStorage.setItem('loginKey', JSON.stringify(data));
=======
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
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa
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

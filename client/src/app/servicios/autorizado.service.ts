import { PersonaLogin } from './../modelos/persona-login';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoService {
  private personaLogin: PersonaLogin;
  private iat: number;
  private token: string;

  constructor() {
    this.destruirToken();
  }

  tokenData(token): boolean {
    const decoded = jwt_decode(token);
    this.personaLogin = decoded.data || null;
    this.iat = decoded.iat;
    this.token = token;
    console.log(this.personaLogin);
    // localStorage.setItem('loginKey', JSON.stringify(this.personaLogin));
    return this.personaLogin ? true : false;
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

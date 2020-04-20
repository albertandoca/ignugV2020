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
    const data = JSON.parse(localStorage.getItem('loginKey')) || null;
    if (data) {
      this.personaLogin = data.persona;
      this.token = data.tok;
    }

    // this.destruirToken();
  }

  tokenData(token): boolean {
    const decoded = jwt_decode(token);
    this.personaLogin = decoded.data || null;
    this.iat = decoded.iat;
    this.token = token;
    console.log(this.personaLogin);
    const data =  {
      persona: this.personaLogin,
      tok: this.token
    };
    localStorage.setItem('loginKey', JSON.stringify(data));
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

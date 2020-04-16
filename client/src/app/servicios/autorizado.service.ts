import { PersonaLogin } from './../modelos/persona-login';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoService {
  personaLogin: PersonaLogin;
  iat: number;
  token: string;

  constructor() {
    this.destruirToken();
  }

  tokenData(token) {
    const decoded = jwt_decode(token);
    this.personaLogin = decoded.data || null;
    this.iat = decoded.iat;
    this.token = token;
    localStorage.setItem('loginKey', JSON.stringify(this.personaLogin));
    return this.personaLogin ? true : false;
  }

  destruirToken() {
    this.personaLogin = null;
    this.iat = null;
    this.token = null;
    localStorage.clear();
  }

  headersOptions() {
    return {
      headers: new HttpHeaders({
        authorization: this.token
      })
    };
  }

}

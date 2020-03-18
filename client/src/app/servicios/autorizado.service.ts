import { PersonaLogin } from './../modelos/persona-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoService {
  personaLogin: PersonaLogin;
  constructor() {}
}

import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { DataRx } from './../modelos/data-rx';
import { DataTx } from './../modelos/data-tx';
import { AutorizadoService } from './autorizado.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  private url: string;

  constructor(
    private http: HttpClient,
    private autorizado: AutorizadoService,
    private server: ServerService
  ) {
    this.url = this.server.getUrl();
  }

  logIn(datos: any): Observable<DataRx> {
    return this.http.post<DataRx>(`${this.url}login`, datos);
  }

  logOut(): Observable<DataRx> {
    const dataTx: DataTx = {
      idPersona: this.autorizado.getPersonaLogin().id,
      data: null
    };
    const optionsHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.autorizado.getToken()
      })
    };
    return this.http.post<DataRx>(`${this.url}logout`, dataTx, optionsHeaders);
  }
}

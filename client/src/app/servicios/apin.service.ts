import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutorizadoService } from './autorizado.service';
import { ServerService } from './server.service';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { DataTx } from '../modelos/data-tx';
import { DataRx } from '../modelos/data-rx';

@Injectable({
  providedIn: 'root'
})
export class apinService {
  url: string;
  selectedFle: File;
  dataRx: any;
  constructor(
    private http: HttpClient,
    private autorizado: AutorizadoService,
    private server: ServerService,
    private toastr: ToastrService
  ) {
    this.url = this.server.getUrl();
  }


  async sendFile(endPoint: string, datos: File[] = null): Promise<string> {
    const formData = new FormData();
    formData.append('upload[]', datos[0], datos[0].name);
    const optionsHeaders = {
      headers: new HttpHeaders({
        Authorization: this.autorizado.getToken()
      })
    };
    let nombreArchivo: string;
    await this.http.post<DataRx>(`${this.url}${endPoint}`, formData, optionsHeaders).toPromise<DataRx>()
            .then(res => {
              nombreArchivo = res.data[0];
            });
    console.log(nombreArchivo);
    return nombreArchivo;
  }
}



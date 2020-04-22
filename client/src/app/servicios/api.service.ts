import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutorizadoService } from './autorizado.service';
import { ServerService } from './server.service';
import { DataTx } from '../modelos/data-tx';
import { DataRx } from '../modelos/data-rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  selectedFle: File;
  dataRx: any;
  constructor(
    private http: HttpClient,
    private autorizado: AutorizadoService,
    private server: ServerService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.url = this.server.getUrl();
  }

  async sendApi(endPoint: string, datos: any = null): Promise<any> {
    console.log(datos)
    const dataTx: DataTx = {
      idPersona: this.autorizado.getPersonaLogin().id,
      data: datos
    };
    console.log(dataTx)
    const optionsHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.autorizado.getToken()
      })
    };
    let data = null;
    await this.http.post<DataRx>(`${this.url}${endPoint}`, dataTx, optionsHeaders).toPromise<DataRx>()
    .then(res => {
      if (res.token !== undefined) {
        this.autorizado.tokenData(res.token);
      }
      if (res.transaccion || res.data.length.toString() === res.msg.toString()) {
        data = res.data;
      } else {
        this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
      }
    }).catch(err => {
      if (!err.error.transaccion) {
        if (err.error.msg === 'Falló autenticación') {
          this.toastr.warning('Su sesión caduco, por favor ingrese al sistema nuevamente', err.msg);
          localStorage.removeItem('loginKey');
          this.router.navigate(['/login']);
        } else {
          this.toastr.warning(err.msg, 'Error en la conección');
          this.router.navigate(['/dashboard/menu']);
        }
      } else {
        this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
        this.router.navigate(['/dashboard/menu']);
      }
    });
    return data;
  }

  async sendFile(endPoint: string, datos: File[] = null): Promise<string> {
    const idPersona = this.autorizado.getPersonaLogin().id;
    const formData = new FormData();
    formData.append('idPersona', idPersona.toString());
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
              this.autorizado.tokenData(res.token);
            });
    return nombreArchivo;
  }

  async sendApiPut(endPoint: string, datos: any = null): Promise<boolean> {
    const dataTx: DataTx = {
      idPersona: this.autorizado.getPersonaLogin().id,
      data: datos
    };
    const optionsHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.autorizado.getToken()
      })
    };
    let data = null;
    await this.http.put<DataRx>(`${this.url}${endPoint}`, dataTx, optionsHeaders).toPromise<DataRx>()
    .then(res => {
      this.autorizado.tokenData(res.token);
      if (res.error.length > 0) {
        for (const err of res.error) {
          this.toastr.error(JSON.stringify(err), 'Error en la actualización');
        }
        this.toastr.error('Si el problema persiste comuniquese con el administrador del sistema', 'Registros Cupos fallidos');
        data = false;
      }
      if (res.data) {
        for (const d of res.data) {
          this.toastr.success(JSON.stringify(d), 'Registros Cupos OK');
        }
        data = true;
      }
    }).catch(err => {
      if (!err.error.transaccion) {
        this.toastr.error(err.error.msg, 'Cupos Asignaturas sin acceso');
        if (err.error.msg === 'Falló autenticación') {
          this.toastr.warning('Su sección caduco, por favor ingrese al sistema nuevamente', err.msg);
          this.router.navigate(['/login']);
        } else {
          this.toastr.warning(err.msg, 'Error en la conección');
        }
      } else {
        this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
        this.router.navigate(['/dashboard/menu']);
      }
      data = false;
    });
    return data;
  }


  async verFileServer(endPoint: string, datos: any = null): Promise<any> {
    const dataTx: DataTx = {
      idPersona: this.autorizado.getPersonaLogin().id,
      data: datos
    };
    const optionsHeaders = {
      headers: new HttpHeaders({
        Authorization: this.autorizado.getToken()
      })
    };
    let data = null;
    await this.http.post<any>(`${this.url}${endPoint}`, dataTx, optionsHeaders).toPromise<any>()
    .then(res => {
      data = res;
    }).catch(err => {
      this.toastr.warning('No existe el archivo o se encuntra dañado', 'Error de archivo');
    });
    return data;
  }
}


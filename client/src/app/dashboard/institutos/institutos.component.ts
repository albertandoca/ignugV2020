import { MatTableDataSource } from '@angular/material/table';
import { ApiUrlService } from './../../servicios/api-url.service';
import { DataRx } from './../../modelos/data-rx';
import { Component, OnInit } from '@angular/core';
import { Instituto } from 'src/app/modelos/instituto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-institutos',
  templateUrl: './institutos.component.html',
  styleUrls: ['./institutos.component.scss']
})
export class InstitutosComponent implements OnInit {

  institutos: Instituto[];
  displayedColumns: string[];
  dataSource: any;

  constructor(
    private http: HttpClient,
    private apiUrl: ApiUrlService
  ) { }

  ngOnInit(): void {
    this.leerInstitutos();
  }

  leerInstitutos() {
    this.http.get<DataRx>(`${this.apiUrl.url}leer-institutos`)
    .subscribe(res => {
      if (res.transaccion) {
        if (res.data.length.toString() == res.msg) {
          this.institutos = res.data;
          console.log(this.institutos);
          // obtener nombre de colomnas directo del objeto
          this.displayedColumns = [
            'id',
            'codigoIES',
            'razonSocial',
            'ruc',
            'urlResolucion',
            'categoria',
            'urlLogotipo',
            'createdAt',
            'updatedAt'
          ];
          this.dataSource = new MatTableDataSource(this.institutos);
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

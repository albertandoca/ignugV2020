import { ServerService } from './../../servicios/server.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Evento } from 'src/app/modelos/evento';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from './../../servicios/api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  eventos: Evento[];
  url: string;
  displayedColumns: string[];
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(
    private api: ApiService,
    private server: ServerService,
    )
    {
      this.url = this.server.getUrl();
    }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  ngOnInit(): void {
    this.leerEventos();

  }

  async leerEventos()
  {

    this.eventos = await this.api.sendApi('leer-eventos');

    this.displayedColumns = [
      'unico',
    ];

    this.dataSource = new MatTableDataSource(this.eventos);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

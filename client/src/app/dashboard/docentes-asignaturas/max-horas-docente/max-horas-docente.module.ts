import { ServerService } from './../../../servicios/server.service';
import { ApiService } from './../../../servicios/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaxHorasDocenteRoutingModule } from './max-horas-docente-routing.module';
import { MaxHorasDocenteComponent } from './max-horas-docente.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [MaxHorasDocenteComponent],
  imports: [
    CommonModule,
    MaxHorasDocenteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MaterialFileInputModule
  ]
})
export class MaxHorasDocenteModule { }

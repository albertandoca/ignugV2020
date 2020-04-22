<<<<<<< HEAD
import { ApiService } from './../../servicios/api.service';
=======
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import { SolicitudMatriculaComponent } from './solicitud-matricula.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudMatriculaRoutingModule } from './solicitud-matricula-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';



@NgModule({
  declarations: [
    SolicitudMatriculaComponent
  ],
  imports: [
    CommonModule,
    SolicitudMatriculaRoutingModule,
    FormsModule,
    MaterialModule,
    MaterialFileInputModule,
    FlexLayoutModule
  ]
})
export class SolicitudMatriculaModule { }

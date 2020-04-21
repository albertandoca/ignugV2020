import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';
import { AceptarMatriculaComponent } from './aceptar-matricula.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AceptarMatriculaRoutingModule } from './aceptar-matricula-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    AceptarMatriculaComponent
  ],
  imports: [
    CommonModule,
    AceptarMatriculaRoutingModule,
    FormsModule,
    MaterialModule,
    MaterialFileInputModule,
    FlexLayoutModule
  ]
})
export class AceptarMatriculaModule { }

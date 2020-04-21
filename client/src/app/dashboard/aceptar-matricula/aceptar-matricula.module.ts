import { AceptarMatriculaComponent } from './aceptar-matricula.component';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AceptarMatriculaRoutingModule } from './aceptar-matricula-routing.module';


@NgModule({
  declarations: [AceptarMatriculaComponent],
  imports: [
    CommonModule,
    AceptarMatriculaRoutingModule,
    MaterialModule
  ]
})
export class AceptarMatriculaModule { }

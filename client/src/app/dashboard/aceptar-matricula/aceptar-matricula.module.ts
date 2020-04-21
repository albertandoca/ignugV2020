import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AceptarMatriculaRoutingModule } from './aceptar-matricula-routing.module';
import { InformacionComponent } from './informacion/informacion.component';


@NgModule({
  declarations: [InformacionComponent],
  imports: [
    CommonModule,
    AceptarMatriculaRoutingModule,
    MaterialModule
  ]
})
export class AceptarMatriculaModule { }

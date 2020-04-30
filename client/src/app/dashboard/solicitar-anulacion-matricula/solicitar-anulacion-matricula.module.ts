import { SolicitarAnulacionMatriculaComponent } from './solicitar-anulacion-matricula.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarAnulacionMatriculaRoutingModule } from './solicitar-anulacion-matricula-routing.module';


@NgModule({
  declarations: [SolicitarAnulacionMatriculaComponent],
  imports: [
    CommonModule,
    SolicitarAnulacionMatriculaRoutingModule
  ]
})
export class SolicitarAnulacionMatriculaModule { }

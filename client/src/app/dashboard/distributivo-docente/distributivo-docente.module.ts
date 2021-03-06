import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributivoDocenteRoutingModule } from './distributivo-docente-routing.module';
import { DistributivoDocenteComponent } from './distributivo-docente.component';


@NgModule({
  declarations: [DistributivoDocenteComponent],
  imports: [
    CommonModule,
    DistributivoDocenteRoutingModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    FlexLayoutModule,
    ScrollingModule
  ]
})
export class DistributivoDocenteModule { }

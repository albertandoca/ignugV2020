import { InformacionComponent } from './aceptar-matricula/informacion/informacion.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AvisoLegalComponent } from './solicitud-matricula/aviso-legal/aviso-legal.component';


@NgModule({
  declarations: [DashboardComponent, AvisoLegalComponent, InformacionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    AvisoLegalComponent
  ]
})
export class DashboardModule { }

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { EventosComponent } from './eventos.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MaterialModule
  ]
})
export class EventosModule { }

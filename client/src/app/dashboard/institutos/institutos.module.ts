import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutosRoutingModule } from './institutos-routing.module';
import { InstitutosComponent } from './institutos.component';


@NgModule({
  declarations: [InstitutosComponent],
  imports: [
    CommonModule,
    InstitutosRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class InstitutosModule { }

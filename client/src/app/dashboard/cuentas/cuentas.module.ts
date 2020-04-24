import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasComponent } from './cuentas.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [CuentasComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MaterialFileInputModule
  ]
})
export class CuentasModule { }

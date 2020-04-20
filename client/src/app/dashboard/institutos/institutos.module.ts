import { ServerService } from './../../servicios/server.service';
import { apiService } from './../../servicios/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutosRoutingModule } from './institutos-routing.module';
import { InstitutosComponent } from './institutos.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [InstitutosComponent],
  imports: [
    CommonModule,
    InstitutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MaterialFileInputModule
  ]
})
export class InstitutosModule { }

import { ApiService } from './../../servicios/api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import { PerfilesDocentesComponent } from './perfiles-docentes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesDocentesRoutingModule } from './perfiles-docentes-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [ PerfilesDocentesComponent],
  imports: [
    CommonModule,
    PerfilesDocentesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MaterialFileInputModule,
    FlexLayoutModule
  ]
})
export class PerfilesDocentesModule { }

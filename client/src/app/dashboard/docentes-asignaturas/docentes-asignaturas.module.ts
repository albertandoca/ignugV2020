import { ApiService } from './../../servicios/api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DocentesAsignaturasComponent } from './docentes-asignaturas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesAsignaturasRoutingModule } from './docentes-asignaturas-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [DocentesAsignaturasComponent],
  imports: [
    CommonModule,
    DocentesAsignaturasRoutingModule,
    FormsModule,
    MaterialModule,
    MaterialFileInputModule,
    FlexLayoutModule
  ]
})
export class DocentesAsignaturasModule {}

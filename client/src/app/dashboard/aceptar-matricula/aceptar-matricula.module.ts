import { AceptarMatriculaComponent } from './aceptar-matricula.component';
import { MaterialModule } from './../../material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AceptarMatriculaRoutingModule } from './aceptar-matricula-routing.module';



@NgModule({
  declarations: [AceptarMatriculaComponent],
  imports: [
    CommonModule,
    AceptarMatriculaRoutingModule,
    MaterialModule,
    PdfViewerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AceptarMatriculaModule { }

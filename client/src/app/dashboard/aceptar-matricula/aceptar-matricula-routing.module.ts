import { AceptarMatriculaComponent } from './aceptar-matricula.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: AceptarMatriculaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AceptarMatriculaRoutingModule { }

import { DocentesAsignaturasComponent } from './docentes-asignaturas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: DocentesAsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesAsignaturasRoutingModule { }

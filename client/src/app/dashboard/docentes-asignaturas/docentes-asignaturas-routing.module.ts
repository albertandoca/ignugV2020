import { DocentesAsignaturasComponent } from './docentes-asignaturas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: DocentesAsignaturasComponent},
  {path: 'max-horas-docentes', loadChildren: () => import('./max-horas-docente/max-horas-docente.module')
      .then(m => m.MaxHorasDocenteModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesAsignaturasRoutingModule { }

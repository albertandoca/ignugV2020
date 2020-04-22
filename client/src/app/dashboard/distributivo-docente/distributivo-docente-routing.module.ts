<<<<<<< HEAD:client/src/app/dashboard/perfiles-docentes/perfiles-docentes-routing.module.ts
import { PerfilesDocentesComponent } from './perfiles-docentes.component';
=======
import { DistributivoDocenteComponent } from './distributivo-docente.component';
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa:client/src/app/dashboard/distributivo-docente/distributivo-docente-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
<<<<<<< HEAD:client/src/app/dashboard/perfiles-docentes/perfiles-docentes-routing.module.ts
  {path: '', component: PerfilesDocentesComponent}
=======
  {path: '', component: DistributivoDocenteComponent}
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa:client/src/app/dashboard/distributivo-docente/distributivo-docente-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD:client/src/app/dashboard/perfiles-docentes/perfiles-docentes-routing.module.ts
export class PerfilesDocentesRoutingModule { }
=======
export class DistributivoDocenteRoutingModule { }
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa:client/src/app/dashboard/distributivo-docente/distributivo-docente-routing.module.ts

import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [LoginGuard],
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent, /*loadChildren: () => import('./menu/menu.module111').then(m => m.MenuModule)*/},
      {path: 'personas', loadChildren: () => import('./personas/personas.module').then(m => m.PersonasModule)},
      {path: 'institutos', loadChildren: () => import('./institutos/institutos.module').then(m => m.InstitutosModule)},
      {path: 'solicitud-matricula', loadChildren: () => import('./solicitud-matricula/solicitud-matricula.module')
      .then(m => m.SolicitudMatriculaModule)},
<<<<<<< HEAD
      {path: 'docentes-asignaturas', loadChildren: () => import('./docentes-asignaturas/docentes-asignaturas.module')
      .then(m => m.DocentesAsignaturasModule)},
      {path: 'perfiles-docentes', loadChildren: () => import('./perfiles-docentes/perfiles-docentes.module')
      .then(m => m.PerfilesDocentesModule)},
=======
      {path: 'distributivo-docente', loadChildren: () => import('./distributivo-docente/distributivo-docente.module')
      .then(m => m.DistributivoDocenteModule)}
>>>>>>> d282a7f13557adaf4eae91b445ad01b6f92e0daa
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

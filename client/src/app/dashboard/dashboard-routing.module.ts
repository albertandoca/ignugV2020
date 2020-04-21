import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [LoginGuard],
    children: [
      {path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
      {path: 'personas', loadChildren: () => import('./personas/personas.module').then(m => m.PersonasModule)},
      {path: 'institutos', loadChildren: () => import('./institutos/institutos.module').then(m => m.InstitutosModule)},
      {path: 'solicitud-matricula', loadChildren: () => import('./solicitud-matricula/solicitud-matricula.module')
      .then(m => m.SolicitudMatriculaModule)},
      {path: 'docentes-asignaturas', loadChildren: () => import('./docentes-asignaturas/docentes-asignaturas.module')
      .then(m => m.DocentesAsignaturasModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

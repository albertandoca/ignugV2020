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
      {path: 'aceptar-matricula', loadChildren: () =>import('./aceptar-matricula/aceptar-matricula.module').then(m=>m.AceptarMatriculaModule)},
      {path: 'distributivo-docente', loadChildren: () => import('./distributivo-docente/distributivo-docente.module')
      .then(m => m.DistributivoDocenteModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

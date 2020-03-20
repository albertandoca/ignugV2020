import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'personas', loadChildren: () => import('./personas/personas.module').then(m => m.PersonasModule)},
  {path: 'institutos', loadChildren: () => import('./institutos/institutos.module').then(m => m.InstitutosModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

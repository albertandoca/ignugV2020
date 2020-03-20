import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { CarlosComponent } from './carlos/carlos.component';
import { NgModule, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},


  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'},


  /* Ejemplos:
  { path: '', redirectTo: '/carlos', pathMatch: 'full'},
  { path: 'carlos', component: CarlosComponent},
  { path: 'prueba', loadChildren: () => import('./prueba/prueba.module').then(m => m.PruebaModule)} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

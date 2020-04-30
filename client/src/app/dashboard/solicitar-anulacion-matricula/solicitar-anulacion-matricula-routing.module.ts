import { SolicitarAnulacionMatriculaComponent } from './solicitar-anulacion-matricula.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: SolicitarAnulacionMatriculaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarAnulacionMatriculaRoutingModule { }

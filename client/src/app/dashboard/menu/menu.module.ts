import { MaterialModule } from './../../material.module';
import { AutorizadoService } from './../../servicios/autorizado.service';
import { MenuPrincipalService } from './../../servicios/menu-principal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule
  ]
})
export class MenuModule { }

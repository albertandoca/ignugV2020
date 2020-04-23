import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InformacionComponent } from './dashboard/aceptar-matricula/informacion/informacion.component';
import { MenuPrincipalService } from './servicios/menu-principal.service';
import { ApiService } from './servicios/api.service';
import { LogService } from './servicios/log.service';
import { ServerService } from './servicios/server.service';
import { AutorizadoService } from './servicios/autorizado.service';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { OlvidoPswComponent } from './login/olvido-psw/olvido-psw.component';
import { ToastrModule } from 'ngx-toastr';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    OlvidoPswComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ToastrModule.forRoot(),
    ChartsModule,
    MaterialFileInputModule,
    PdfViewerModule
  ],
  exports: [
  ],
  providers: [
    AutorizadoService,
    ServerService,
    LogService,
    ApiService,
    MenuPrincipalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    OlvidoPswComponent,
    InformacionComponent
  ]
})
export class AppModule { }

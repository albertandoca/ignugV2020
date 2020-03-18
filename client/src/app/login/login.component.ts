import { OlvidoPswComponent } from './olvido-psw/olvido-psw.component';

import { AutorizadoService } from './../servicios/autorizado.service';
import { PersonaLogin } from './../modelos/persona-login';
import { DataRx } from './../modelos/data-rx';
import { ApiUrlService } from './../servicios/api-url.service';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  personaLogin: PersonaLogin[];
  identificacion: string;
  emailInstitucional: string;


  constructor(
    private fb: FormBuilder,
    private html: HttpClient,
    private apiUrl: ApiUrlService,
    private autorizado: AutorizadoService,
    public dialog: MatDialog
  ) {
    this.crearLoginForm();
  }

  ngOnInit(): void {
  }

  crearLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z]*[0-9.]*([a-z])*(@yavirac.edu.ec)$')]],
      psw: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]]
    });
  }

  ingresar() {
    if (!this.loginForm.invalid) {
      const login = this.loginForm.value;
      // const mail = this.loginForm.get('email').value;
      // const pass = this.loginForm.get('psw').value;
      this.loginForm.reset();
      this.html.get<DataRx>(`${this.apiUrl.url}ingresar/${login.email}/${login.psw}`)
      .subscribe(res => {
        if (res.transaccion) {
          if (res.data.length.toString() == res.msg) {
            this.personaLogin = res.data;
            this.autorizado.personaLogin = this.personaLogin[0];
            console.log('jjj ' + JSON.stringify(this.autorizado.personaLogin));
          } else {
            alert('Ingreso no autorizado');
          }
        } else {
          console.log(res.msg);
        }
      });
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(OlvidoPswComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: true,
      data: {
        identificacion: this.identificacion,
        emailInstitucional: this.emailInstitucional
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}




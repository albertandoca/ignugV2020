import { Router } from '@angular/router';
import { OlvidoPswComponent } from './olvido-psw/olvido-psw.component';

import { AutorizadoService } from './../servicios/autorizado.service';
import { PersonaLogin } from './../modelos/persona-login';
import { DataRx } from './../modelos/data-rx';
import { GlobalService } from '../servicios/global.service';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  personaLogin: PersonaLogin;
  identificacion: string;
  emailInstitucional: string;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private global: GlobalService,
    private autorizado: AutorizadoService,
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.crearLoginForm();
  }

  ngOnInit(): void {
    localStorage.clear();
    this.identificacion = '1213141516';
  }

  crearLoginForm() {
    this.loginForm = this.fb.group({
      emailInstitucional: ['', [Validators.required, Validators.pattern('^[a-z]*[0-9.]*([a-z])*(@yavirac.edu.ec)$')]],
      psw: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]]
    });
  }

  logIn() {
    if (!this.loginForm.invalid) {
      const login = this.loginForm.value;
      // const mail = this.loginForm.get('email').value;
      // const pass = this.loginForm.get('psw').value;
      this.loginForm.reset();
      this.http.post<DataRx>(`${this.global.urlApi}login`, login)
        .subscribe(res => {
          if (res.transaccion) {
            if (res.data.length.toString() === res.msg.toString()) {
              const token = res.data[0];
              // console.log(res);
              if (this.autorizado.tokenData(token)) {
                this.router.navigate(['/dashboard']);
               } else {
                console.log('Datos incorrectos');
                this.router.navigate(['/login']);
               }
            } else {
              alert('Ingreso no autorizado');
            }
          }
        }, err => {
          console.log(err.error)
          this.toastr.error(err.error.msg, '!Acceso denegado¡')
        });
    } else {
      alert('sin datos');
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




import { LoginKey } from './../modelos/login-key';
import { LogService } from './../servicios/log.service';
import { Router } from '@angular/router';
import { OlvidoPswComponent } from './olvido-psw/olvido-psw.component';

import { AutorizadoService } from './../servicios/autorizado.service';
import { PersonaLogin } from './../modelos/persona-login';
import { DataRx } from './../modelos/data-rx';
import { Component, OnInit, HostListener} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  dataRx: DataRx;


  constructor(
    private fb: FormBuilder,
    private logService: LogService,
    private autorizado: AutorizadoService,
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.crearLoginForm();
  }

  ngOnInit(): void {
    // localStorage.clear();
    // this.identificacion = '1213141516';
    const loginKey: LoginKey = JSON.parse(localStorage.getItem('loginKey') || null);
    if (loginKey) {
      this.autorizado.tokenData(loginKey.tok);
      this.router.navigate(['/dashboard']);
    }
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
      this.logService.logIn(login)
      .subscribe(res => {
        if (res.transaccion || res.data.length.toString() === res.msg.toString()) {
          const token = res.data[0];
          if (this.autorizado.tokenData(token)) {
            this.router.navigate(['/dashboard']);
            } else {
              this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
              this.router.navigate(['/login']);
            }
        } else {
          this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
        }
      }, err => {
        this.toastr.error(err.error.msg, 'Acceso denegado');
      });
    } else {
      this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OlvidoPswComponent, {
      width: '400px',
      disableClose: true,
      autoFocus: true,
      data: {
        identificacion: 'son mis datos',
        emailInstitucional: this.emailInstitucional
      }
    });

    dialogRef.afterClosed().subscribe(res => {

      console.log(res);
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'Enter' || event.code === 'Enter') {
      event.preventDefault();
      this.logIn();
    }
  }

}




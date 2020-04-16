import { AutorizadoService } from './../servicios/autorizado.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private autorizado: AutorizadoService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loginKey = localStorage.getItem('loginKey') || null;
      if (loginKey) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
  }

}

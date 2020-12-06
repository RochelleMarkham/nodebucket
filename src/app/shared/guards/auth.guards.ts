/*======================================
; Title: auth.guard.ts
; Author: Professor Krasso
; Date: 12/3/20
; Modified By: Rochelle Markham
; Description: nodebucket-app
======================================*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  //sets up the cookie service
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    const sessionUser = this.cookieService.get('session_user');

    if(sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/signin']);
      return false;
    }
  }
}

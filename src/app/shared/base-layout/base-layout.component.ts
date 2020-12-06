/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date: 12/4/20
; Modified by: Rochelle Markham
; Description: nodebucket app
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {

  //sets date for footer
  year: number = Date.now();
  isLoggedIn: string;

  //adds cookie service
  constructor(private cookieService: CookieService, private router: Router) {
    this.isLoggedIn = this.cookieService.get('session_user');
  }

  ngOnInit() { }

  //navigates to sign in and deletes cookies when user signs out
  signout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}

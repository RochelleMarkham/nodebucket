/*======================================
; Title: sign-in.component.ts
; Author: Professor Krasso
; Date: 12/2/20
; Modified By: Rochelle Markham
; Description: nodebucket-app
======================================*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor( private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) { }

  //Validates that employee Id is numerical
  ngOnInit() {
    this.form = this.fb.group({
      empId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

  //executes when submit button is pressed on sign in page
  login() {
    //gets number entered into the form & logs it
    const empId = this.form.controls['empId'].value;
    console.log(empId);

    //adds cookie to the sign in process
    this.http.get('/api/employees/' + empId).subscribe(res => {
      if(res){
        this.cookieService.set('session_user', empId, 1);
        this.router.navigate(['/']);
      } else {
        //shows error message for 5 seconds if ID entered is invalid
        this.snackBar.open('The employee ID you entered is invalid, please try again', 'ERROR', {
          duration: 5000,
          verticalPosition: 'top'
        });
      }
    });
  }
}

/*======================================
; Title: app.routing.ts
; Author: Professor Krasso
; Date: 12/2/20
; Modified By: Rochelle Markham
; Description: nodebucket-app
======================================*/

import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guards';
import { SigninComponent } from './pages/signin/signin.component';

//sets the App Routing to variable AppRoutes
export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        //users must be logged in to access the application
        canActivate: [AuthGuard]
      }
    ],
  },
  {
    //directs users to the sign in page for authentication
    path: 'session',
    component: AuthLayoutComponent,
    children:[
      {
        path: 'signin',
       component: SigninComponent
      }
    ]
  }
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';


const route:Routes = [
      {
        path:'login',component:LoginComponent
      },
      {
        path:'signup',component:SignupComponent
      }
];

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
})
export class AuthenticationModule { }

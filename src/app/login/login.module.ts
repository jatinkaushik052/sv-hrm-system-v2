import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableCopyDirective } from '../directives/disable-copy.directive';


@NgModule({
  declarations: [
    LoginComponent,
    SignINComponent,
    SignUpComponent,
    ForgotPasswordComponent,  
    DisableCopyDirective
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,

  ]
})
export class LoginModule { }

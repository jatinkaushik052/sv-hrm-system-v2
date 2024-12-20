import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../../alert/alert/alert.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    EditUserComponent,
    AddUserComponent,
    AlertComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }

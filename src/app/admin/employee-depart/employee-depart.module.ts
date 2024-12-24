import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDepartRoutingModule } from './employee-depart-routing.module';
import { AddEmpDepartComponent } from './add-emp-depart/add-emp-depart.component';
import { ViewEmpDepartComponent } from './view-emp-depart/view-emp-depart.component';
import { EmployeeDepartComponent } from './employee-depart.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmpDepartComponent,
    ViewEmpDepartComponent,
    EmployeeDepartComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeDepartRoutingModule,
    RouterOutlet,
    RouterLink,
    FormsModule
   
  ]
})
export class EmployeeDepartModule { }

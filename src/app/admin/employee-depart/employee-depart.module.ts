import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDepartRoutingModule } from './employee-depart-routing.module';
import { AddEmpDepartComponent } from './add-emp-depart/add-emp-depart.component';
import { ViewEmpDepartComponent } from './view-emp-depart/view-emp-depart.component';
import { EmployeeDepartComponent } from './employee-depart.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


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
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
    // BrowserAnimationsModule
  ]
})
export class EmployeeDepartModule { }

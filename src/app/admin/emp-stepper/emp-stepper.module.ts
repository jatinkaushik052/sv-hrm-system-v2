import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpStepperRoutingModule } from './emp-stepper-routing.module';
import { EmpStepperComponent } from './emp-stepper.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    EmpStepperComponent,
    ViewEmpComponent
  ],
  imports: [
    CommonModule,
    EmpStepperRoutingModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class EmpStepperModule { }

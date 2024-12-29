import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule, } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoverEffectDirective } from '../directives/hover-effect.directive';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ProjectsComponent } from './projects/projects.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HoverEffectDirective,
    LeaveManagementComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule

  ],
})
export class AdminModule { }

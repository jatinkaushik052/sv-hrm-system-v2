import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule, } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoverEffectDirective } from '../directives/hover-effect.directive';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ProjectsComponent } from './projects/projects.component';




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
  ],
})
export class AdminModule { }

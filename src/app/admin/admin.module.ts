import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoverEffectDirective } from '../directives/hover-effect.directive';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HoverEffectDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    
  ]
})
export class AdminModule { }

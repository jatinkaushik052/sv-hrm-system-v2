import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { EmpStepperComponent } from './emp-stepper/emp-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path:'leave-management',
        component: LeaveManagementComponent
      },
      {
        path:'empStepper',
        loadChildren:()=> import('./emp-stepper/emp-stepper.module').then(m=> m.EmpStepperModule)
      },
      {
        path:'emp-department',
        loadChildren:() => import('./employee-depart/employee-depart.module').then(m=> m.EmployeeDepartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

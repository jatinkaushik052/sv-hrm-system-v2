import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeStepperComponent } from '../employee-stepper/employee-stepper.component';

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
        component: EmployeeStepperComponent
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

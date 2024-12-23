import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpDepartComponent } from './add-emp-depart/add-emp-depart.component';
import { ViewEmpDepartComponent } from './view-emp-depart/view-emp-depart.component';
import { EmployeeDepartComponent } from './employee-depart.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeeDepartComponent,
    children:[
      {
        path:'add-emp-depart',
        component: AddEmpDepartComponent
      },
      {
        path:'add-emp-depart/:id',
        component: AddEmpDepartComponent
      },
      {
        path:'view-emp-depart',
        component: ViewEmpDepartComponent
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDepartRoutingModule { }

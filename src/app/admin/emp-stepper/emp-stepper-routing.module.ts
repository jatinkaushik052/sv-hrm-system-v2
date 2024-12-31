import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EmpStepperComponent } from './emp-stepper.component';

const routes: Routes = [{
  path: '',
  component: EmpStepperComponent
},
{
  path:'admin/empStepper/:id',
  component: EmpStepperComponent
},
{
  path:'view-emp-list',
  component: ViewEmpComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpStepperRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'add-user',
        component: AddUserComponent
      },
      {
        path:'add-user/:id',
        component: AddUserComponent
      },
      // {
      //   path:'edit-user',
      //   component: EditUserComponent
      // },
      {
        path:'user-list',
        component: UserListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

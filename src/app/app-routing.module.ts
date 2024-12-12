import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:'login',
    loadChildren: ()=> import('./login/login.module').then(m=> m.LoginModule)
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(m=> m.AdminModule),canActivate :[authGuard]
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

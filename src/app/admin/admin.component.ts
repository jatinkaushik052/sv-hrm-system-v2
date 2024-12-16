import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  isSidebar: boolean= false;

  constructor(private router: Router){}
// sidebar 
onSidebarClick(){
  this.isSidebar =! this.isSidebar;
  console.log(this.isSidebar)
}

  onLogout() {
   
    localStorage.removeItem('login');

    this.router.navigate(['login']); 
  }
}

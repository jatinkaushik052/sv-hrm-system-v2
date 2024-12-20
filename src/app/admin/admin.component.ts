import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../services/login-status.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  isSidebar: boolean = true;

  constructor(private router: Router, private loginStatus: LoginStatusService) { }

  ngOnInit(): void {
   
   // Initial check, in case the user is not logged in and directly tries to access this page
    if (!this.loginStatus.isLoggedIn()) {
      this.router.navigate(['admin']);  // Redirect to login if not logged in
    }
  }

  // Listen for the browser's back button or history state changes
  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    this.logoutAndRedirect();
  }

  // Logout function to clear the user data and redirect to the login page
  logoutAndRedirect() {
    this.loginStatus.logout();  // This should remove the authentication token or session
    this.router.navigate(['login']);  // Redirect to the login page
  }
  
  // sidebar 
  onSidebarClick() {
    this.isSidebar = !this.isSidebar;
    console.log(this.isSidebar)
  }

  onLogout() {

    localStorage.removeItem('login');

    this.router.navigate(['login']);
  }
}

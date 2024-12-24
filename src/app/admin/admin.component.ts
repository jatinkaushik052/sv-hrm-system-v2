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

  // isSidebar: boolean = true;
  is_Accordion: boolean= false;
  sidebarOpen: boolean= false;

  constructor(private router: Router, private loginStatus: LoginStatusService) { }

  ngOnInit(): void {
    // Check if the user is logged in when trying to access the admin page
    if (!this.loginStatus.isLoggedIn()) {
      this.router.navigate(['login']);  // Redirect to login page if not logged in
    } else {
      // Push a new state to prevent navigating back to the login page
      window.history.pushState(null, '', window.location.href);
    }
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    this.logoutAndRedirect();
  }

  // Logout function to clear the user data and redirect to the login page
  logoutAndRedirect() {
    this.loginStatus.logout();  // This should remove the authentication token or session
    this.router.navigate(['login']);  // Redirect to the login page
  }
  
  // sidebar toggle function
  // onSidebarClick() {
  //   this.isSidebar = !this.isSidebar;
  // }
  onAccordion(){
    this.is_Accordion =!this.is_Accordion;
  }
  onLogout() {
    localStorage.removeItem('login');
    this.router.navigate(['login']);
  }
}

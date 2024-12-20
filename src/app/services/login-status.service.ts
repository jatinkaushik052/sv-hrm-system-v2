import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor() { }
  // Check if the user is logged in by looking for a token in sessionStorage
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('login');  // Checks if a login token exists
  }

  // Log the user out by removing the token from sessionStorage
  logout(): void {
    sessionStorage.removeItem('login');  // Clear the authentication token
  }
}

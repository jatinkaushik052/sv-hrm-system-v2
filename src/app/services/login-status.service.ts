import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  constructor() { }

  // Checks if the user is logged in by checking the token in localStorage
  isLoggedIn(): boolean {
    return localStorage.getItem('login') !== null; // Check if login token exists
  }

  // Logs the user in by storing the token in localStorage
  login(token: string) {
    localStorage.setItem('login', token); // Store the login token
  }

  // Logs the user out by removing the token from localStorage
  logout() {
    localStorage.removeItem('login');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockbtnService {

  constructor() { }
  // Block the back button
  preventBack() {
    // Push the current state to history to block the user from going back
    history.pushState(null, '', location.href);

    // Listen for the back button and force the browser forward
    window.onpopstate = () => {
      history.go(1); // Prevent back navigation
    };
  }

}

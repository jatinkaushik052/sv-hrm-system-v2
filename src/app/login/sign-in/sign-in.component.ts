import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginStatusService } from '../../services/login-status.service';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignINComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')])
  });

  isLoading: boolean = false;
  isPasswordVisible: boolean = false;
  isEye: boolean = false;

  constructor(private http: UserService, private router: Router, private loginStatus: LoginStatusService) {

  }

  ngOnInit(): void {
    // If the user is already logged in, redirect them to the admin page
    if (this.loginStatus.isLoggedIn()) {
      this.router.navigate(['admin']);
    }}

    onLogin() {

      const loginData = this.loginForm.value;
      console.log(loginData)
      // debugger;
      const payload = {
        mobileno: (this.loginForm.value?.mobileNo),
        password: this.loginForm.value?.password,
      }
      this.isLoading = true;
      this.http.login(payload).subscribe({
        next: (res: any) => {
          if (res && res.token) {
            // Save the token in localStorage
            localStorage.setItem('login', res.token);
            // Navigate to admin page
            this.router.navigate(['admin']);
          } else {
            alert("Incorrect data");
            console.log(res.message);
          }
        },
        error: (err: any) => {
          alert("Incorrect data");
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });

    }



    onChangeVal(event: Event): void {
      const inputValue = event.target as HTMLInputElement;
      let value = inputValue.value;

      // remove all the unless entery instead of number
      value = value.replace(/[^0-9]/g, '');

      // num start from 6 to 9 and the length is 10
      if(value.length > 10) {
      value = value.slice(6, 9);
    }

    // If the first digit is 0-5, remove it
    if (value.length > 0 && parseInt(value[0], 10) < 6) {
      value = value.slice(1); // Remove the first digit if it's between 0-5
    }

    // Update the input value
    inputValue.value = value;

    // Update the form control value
    this.loginForm.get('mobileNo')?.setValue(value);
  }
  onEye() {
    this.isEye = !this.isEye;
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}

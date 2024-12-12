import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignINComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    mobileNo: new FormControl(),
    password: new FormControl()
  });

  isLoading: boolean= false;

  constructor(private http: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  onLogin() {
    const loginData = this.loginForm.value;
    console.log(loginData)
    debugger;
    const payload = {
      mobileno: this.loginForm.value?.mobileNo,
      password: this.loginForm.value?.password,
    }
    this.isLoading=true
    
    this.http.login(payload).subscribe({
      next: (res: any) => {
        if(res){
          // alert("Login successfully")
          localStorage.setItem('login', JSON.stringify(res));
          this.router.navigate(['/admin']);
        }
        else{
          alert("Incorrect data")
          console.log(res.message);
        }

      },
      error: (err: any) => {
        alert("Incorrect data")

      },
      complete: () => {

      }
    })

  }
}

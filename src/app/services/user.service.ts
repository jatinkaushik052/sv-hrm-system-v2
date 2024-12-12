import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dev-backend-2024.epravaha.com/api/login/svadmin'

  constructor(private http: HttpClient,) { }


  login(payload: Login): any {
    return this.http.post(this.apiUrl, payload);
  }



  // getUsers(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/posts")
  // }

}

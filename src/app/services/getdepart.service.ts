import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdepartService {

  constructor(private http: HttpClient) { }

  getAllEpm(){
    this.http.get('');
  }
}

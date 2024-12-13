import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  userList: any []=[];

ngOnInit(): void {
  this.getData();
}

getData(){
  const getUserList= localStorage.getItem('userValue');
  if(getUserList != null){
    this.userList= JSON.parse(getUserList);
  }
}
}

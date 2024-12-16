import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  userList: any []=[];

  constructor(private router: Router){}
ngOnInit(): void {
  this.getData();
}

getData(){
  const getUserList= localStorage.getItem('userList');
  if(getUserList != null){
    this.userList= JSON.parse(getUserList);
  }
}
onEdit(id: number){
  
  this.router.navigate(['admin/user/add-user', id])
}

onDelete(id: number) {
  this.userList = this.userList.filter((item: any) => item.id !== id);

  localStorage.setItem('userList', JSON.stringify(this.userList));
}
}

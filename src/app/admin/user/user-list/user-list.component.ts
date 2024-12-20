import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,

  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  userList: any[] = [];
  is_delete_pop: boolean= false;
  isView: boolean= false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const getUserList = localStorage.getItem('userList');
    if (getUserList != null) {
      this.userList = JSON.parse(getUserList);
    }
  }
  onEdit(id: number) {

    this.router.navigate(['admin/user/add-user', id])
  }

  deleted_id: any;
  onDelete(id: number) {
    this.open_modal();
    this.deleted_id=id;
  }
  deleteData(){
    this.is_delete_pop=false

    const index= this.userList.findIndex((m:any)=> m.id == this.deleted_id)
    this.userList.splice(index,1)
   localStorage.setItem('userList',JSON.stringify(this.userList))
  }
  open_modal(){
    this.is_delete_pop=true;
  }
  close_modal(){
    this.is_delete_pop=false;
  }

  close_view_popup(){
    this.isView=false;
  }
  currentIdValue: any=null
  // viewBtn
  onView(id : number){
    this.isView=true;
    this.currentIdValue = this.userList.find((item: any) => item.id === id); // Find user by ID
    console.log(this.currentIdValue)
  }
}

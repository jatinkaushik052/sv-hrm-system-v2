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
  filteredData: any[] = []
  searchItem: string = '';


  ngOnInit(): void {
    this.getData();
  }
 filterData() {
    if (this.searchItem.trim() === '') {
      // when no value enter in searchbox.......
      this.filteredData = [...this.userList];
    }
    else {
      this.filteredData = this.userList.filter((item) => {
        if(item.name.toLowerCase().includes(this.searchItem.toLowerCase()) ||
        item.username.toLowerCase().includes(this.searchItem.toLowerCase())){
          return item
        }
      })
    }
  }
  getData() {
    const getUserList = localStorage.getItem('userList');
    if (getUserList != null) {
      this.userList = JSON.parse(getUserList).reverse();
      this.filteredData= [...this.userList];

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

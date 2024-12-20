import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-management',
  standalone: false,
  
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss'
})
export class LeaveManagementComponent implements OnInit {
  employee_leave_list: any []=[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.get_employee_leave_data();
  }
  get_employee_leave_data(){
    debugger
    this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeaves').subscribe((res:any)=>{
      this.employee_leave_list=res.data;
    console.log(this.employee_leave_list)

    })
  }

}

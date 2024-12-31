import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-emp',
  standalone: false,

  templateUrl: './view-emp.component.html',
  styleUrl: './view-emp.component.scss'
})
export class ViewEmpComponent implements OnInit {
  employee_list: any[] = [];

  constructor(private router: Router) { }
  ngOnInit(): void {
    debugger
    this.getData();
  }
  getData() {
    debugger;
    const getEmpList = localStorage.getItem('addEmployee');
    if (getEmpList != null) {
      this.employee_list = JSON.parse(getEmpList).reverse();
    }
  }
  onEdit(data: any) {
    debugger
    this.router.navigate(['/admin/empStepper', data],{
      queryParams:{
        firstname: data.firstname,
        lastname: data.lastname,
        department: data.department,
        email: data.email,
        mobile: data.mobile,
        username: data.username,
        streetAddress: data.streetAddress,
        aptNumber: data.aptNumber,
        state: data.state,
        zipcode: data.zipcode,

      }
    })
  }
  onDelete(id: any) {
    let conf = confirm("are you sure......")
    if (conf) {
      const index = this.employee_list.findIndex((m: any) => m.id == id)
      this.employee_list.splice(index, 1)
      localStorage.setItem('addEmployee', JSON.stringify(this.employee_list))
      console.log("Deleted")
    }
  }
}


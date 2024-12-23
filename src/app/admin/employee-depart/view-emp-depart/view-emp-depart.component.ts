import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpdepartmentService } from '../../../services/empdepartment.service';

@Component({
  selector: 'app-view-emp-depart',
  standalone: false,

  templateUrl: './view-emp-depart.component.html',
  styleUrl: './view-emp-depart.component.scss'
})
export class ViewEmpDepartComponent implements OnInit {

  emp_depart_list: any[] = [];
  isView: boolean = false
  currentIdValue: any=null
  is_delete_pop: boolean= false
  emp_details: any[]=[]


  ngOnInit(): void {
    this.getAllDepart();
  }


  constructor(private empService: EmpdepartmentService, private router: Router,private http: HttpClient) { }

  getAllDepart() {
    
    this.empService.getEmpDepartment().subscribe((res: any) => {
      this.emp_depart_list = res.data;
    })
  }

  onView(departmentId: any) {
    this.isView = true;
    this.currentIdValue = this.emp_depart_list.find((item: any) => item.departmentId == departmentId);
  }
  onEdit(data: any) { 
    debugger
    this.router.navigate(['/admin/emp-department/add-emp-depart'],{
      queryParams: {
        departmentId: data.departmentId,
        departmentName: data.departmentName,
        departmentLogo: data.departmentLogo 
      }
    })
    debugger
  }

  deleted_id: any;
  onDelete(id: number) {
    this.open_modal();
    this.deleted_id=id;
    
  }
  deleteData(){
    this.is_delete_pop=false
    if(this.deleted_id){
      this.empService.deleteEmp(this.deleted_id).subscribe((res: any)=>{
        if(res.result){
          this.getAllDepart();
        }
        else{
          alert(res.message)
        }
      })
    }
  }

  close_popup(){
    this.isView=false;
  }
  open_modal(){
    this.is_delete_pop=true;
  }
  close_modal(){
    this.is_delete_pop=false;
  }
}

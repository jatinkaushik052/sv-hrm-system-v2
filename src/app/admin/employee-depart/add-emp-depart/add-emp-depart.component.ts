import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpdepartmentService } from '../../../services/empdepartment.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-emp-depart',
  standalone: false,
  templateUrl: './add-emp-depart.component.html',
  styleUrl: './add-emp-depart.component.scss'
})
export class AddEmpDepartComponent implements OnInit {


  department_form: FormGroup = new FormGroup({
    departmentId: new FormControl(0),
    departmentName: new FormControl(''),
    departmentLogo: new FormControl('')
  });
  currentId: number=0;
  employeeData: any;

  constructor(private activeRoute: ActivatedRoute, private empService: EmpdepartmentService, private http: HttpClient) {
    
  }

  ngOnInit(): void {
     this.activeRoute.queryParams.subscribe((params: any) => {
      const departmentId = params['departmentId'];
      const departmentName = params['departmentName'];
      const departmentLogo = params['departmentLogo'];

      if (departmentId && departmentName && departmentLogo) {
        this.currentId = departmentId;
        this.department_form.patchValue({
          departmentId: departmentId,
          departmentName: departmentName,
          departmentLogo: departmentLogo
        });
      }
      else{
        this.currentId =0;
      }
    });
  }
  onUpdate() {
    const payload = {
      departmentId: this.department_form.value.departmentId,
      departmentName: this.department_form.value.departmentName,
      departmentLogo: this.department_form.value.departmentLogo
    };

    this.empService.updateEmpDepart(payload).subscribe((res: any) => {
      if (res.result) {
        alert('Data updated successfully');
      } else {
        alert(res.message);
      }
    });
  }
  onAdd() {
    const payload = {
      departmentId: this.department_form.value.departmentId,
      departmentName: this.department_form.value.departmentName,
      departmentLogo: this.department_form.value.departmentLogo
    };
    this.empService.addEmpDepartment(payload).subscribe({
      next: (res: any) => {
        alert('Added successfully');
      },
      error: (err: any) => {
        alert('Error adding: ' + err.message);
      }
    });
  }
}

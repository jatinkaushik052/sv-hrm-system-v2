import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdepartmentService {

  constructor(private http: HttpClient) { }

  addEmpDepartment(obj: any) {
    return this.http.post('https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment', obj)
  }
  getEmpDepartment(){
    return this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment');
  }
  getEmpDeprtById(id: number){
    return this.http.get('')
  }
  updateEmpDepart(obj: any){
    return this.http.post('https://projectapi.gerasim.in/api/EmployeeManagement/UpdateDepartment',obj);
  }
  deleteEmp(empId: any){
    return this.http.delete('https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId='+ empId)
  }
}

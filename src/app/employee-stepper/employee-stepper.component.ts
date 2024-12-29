import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-stepper',
  standalone: false,
  
  templateUrl: './employee-stepper.component.html',
  styleUrl: './employee-stepper.component.scss'
})
export class EmployeeStepperComponent {
  isLinear = false;
  employee_data_list: any[]=[];

  private _formBuilder = inject(FormBuilder);
  
  firstFormGroup = this._formBuilder.group({
    id: new FormControl(0),
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    department: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    Usesname: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    streetAddress: ['', Validators.required],
    aptNumber: ['', Validators.required],
    state: ['', Validators.required],
    zipcode: ['', Validators.required],
  });
  onSubmit(){
    const localData= localStorage.getItem('addEmployee');
    alert("success")
    const payload={
      firstname: this.firstFormGroup.value?.firstname,
      lastname: this.firstFormGroup.value?.lastname,
      department: this.firstFormGroup.value?.department,
      email: this.firstFormGroup.value?.email,
      username: this.firstFormGroup.value?.Usesname,
      streetAddress: this.secondFormGroup.value?.streetAddress,
      aptNumber: this.secondFormGroup.value?.aptNumber,
      state: this.secondFormGroup.value?.state,
      zipcode: this.secondFormGroup.value?.zipcode
    }
    if(localData == null){
      this.employee_data_list.push(payload)
      localStorage.setItem('addEmployee', JSON.stringify(this.employee_data_list))
    }
    else{
      const parseData = JSON.parse(localData);
      this.employee_data_list.push(payload);
      parseData.push(payload);
      localStorage.setItem('addEmployee', JSON.stringify(parseData));
    }
  }
}

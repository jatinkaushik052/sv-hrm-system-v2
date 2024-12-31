import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-stepper',
  standalone: false,
  templateUrl: './emp-stepper.component.html',
  styleUrls: ['./emp-stepper.component.scss']
})
export class EmpStepperComponent implements OnInit {
  isLinear = false;
  employee_data_list: any[] = [];
  currentId: any

  private _formBuilder = inject(FormBuilder);

  userDetails: FormGroup = this._formBuilder.group({
    id: [0],
    section1: this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      username: ['', Validators.required],
    }),
    section2: this._formBuilder.group({
      streetAddress: ['', Validators.required],
      aptNumber: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    })
  });
  constructor(private activeRoute: ActivatedRoute) {

  }
  empDatabyId:any;
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params: any) => {
      const id = params['id']
      const firstname = params['firstname'];
      const lastname = params['lastname'];
      const department = params['department'];
      const email = params['email'];
      const mobile = params['mobile'];
      const username = params['username'];
      const streetAddress = params['streetAddress'];
      const aptNumber = params['aptNumber'];
      const state = params['state'];
      const zipcode = params['zipcode'];

      if (firstname && lastname && department && email && mobile && username && streetAddress && aptNumber && state && zipcode) {
        this.currentId = id;
        this.userDetails.patchValue({
          section1: {
            firstname: firstname,
            lastname: lastname,
            department: department,
            email: email,
            mobile: mobile,
            username: username
          },
          section2: {
            streetAddress: streetAddress,
            aptNumber: aptNumber,
            state: state,
            zipcode: zipcode
          }
        });
        this.getEempData();

      }
      else {
        this.currentId = 0;
      }
    });
  }
getEempData(){
  const StoreData= localStorage.getItem('addEmployee');
  this.empDatabyId = StoreData ? JSON.parse(StoreData) : [];
}
  onUpdate() {
    debugger
    const currentData= this.empDatabyId.find((m: any)=> m.id === Number(this.currentId))
    debugger
    if(currentData !== undefined){
      currentData.firstname = this.userDetails.get('section1')?.value.firstname,
      currentData.lastname = this.userDetails.get('section1')?.value.lastname,
      currentData.department = this.userDetails.get('section1')?.value.department,
      currentData.email = this.userDetails.get('section1')?.value.email,
      currentData.mobile = this.userDetails.get('section1')?.value.mobile,
      currentData.username = this.userDetails.get('section1')?.value.username
      currentData.streetAddress = this.userDetails.get('section2')?.value.streetAddress
      currentData.aptNumber = this.userDetails.get('section2')?.value.aptNumber
      currentData.state = this.userDetails.get('section2')?.value.state
      currentData.zipcode = this.userDetails.get('section2')?.value.zipcode
    }
    debugger
    localStorage.setItem('addEmployee', JSON.stringify(this.employee_data_list))
    console.log("update data", this.employee_data_list)
   
  }


  onSubmit() {
    const payload = {
      id: this.userDetails.value?.id,
      firstname: this.userDetails.value?.section1?.firstname,
      lastname: this.userDetails.value?.section1?.lastname,
      department: this.userDetails.value?.section1?.department,
      email: this.userDetails.value?.section1?.email,
      mobile: this.userDetails.value?.section1?.mobile,
      username: this.userDetails.value?.section1?.username,
      streetAddress: this.userDetails.value?.section2?.streetAddress,
      aptNumber: this.userDetails.value?.section2?.aptNumber,
      state: this.userDetails.value?.section2?.state,
      zipcode: this.userDetails.value?.section2?.zipcode
    };

    const localData = localStorage.getItem('addEmployee');
    if (localData == null) {
      payload.id = 1;
      this.employee_data_list.push(payload);
      localStorage.setItem('addEmployee', JSON.stringify(this.employee_data_list));
    } else {
      const parseData = JSON.parse(localData);
      parseData.push(payload);
      payload.id = parseData.length + 1;
      localStorage.setItem('addEmployee', JSON.stringify(parseData));
    }
    alert('successfully added')
    this.userDetails.reset();
  }
}

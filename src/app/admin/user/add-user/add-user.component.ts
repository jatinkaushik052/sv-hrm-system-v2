import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  isAdd: boolean = false
  isUpdate: boolean = false

  userForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    salary: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email])
  })

  is_add_modal: boolean = false;

  userData: any[] = [];
  currentId = 0;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((res: any) => {
      if (res.id) {
        this.currentId = res.id;
      }
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const gettingData = localStorage.getItem('userList');
    if (gettingData !== null) {
      this.userData = JSON.parse(gettingData);

      if (this.currentId !== 0) {
        const currentRecord = this.userData.find((m: any) => m.id === Number(this.currentId));
        if (currentRecord !== undefined) {
          this.userForm.patchValue({
            id: currentRecord.id,  // Make sure the ID is also set for the form
            name: currentRecord.name,
            username: currentRecord.username,
            salary: currentRecord.salary,
            email: currentRecord.email
          });
        }
      }
    }
  }

  onAdd() {
    this.isAdd = true
    this.add_openModal(); 
    const payload = {
      id: 0,  // Default value, will be updated after checking localStorage
      name: this.userForm.value?.name,
      username: this.userForm.value?.username,
      salary: this.userForm.value?.salary,
      email: this.userForm.value?.email,
    }

    const localData = localStorage.getItem('userList');
    if (localData == null) {
      payload.id = 1; // First entry, start with id 1
      this.userData.push(payload);
      localStorage.setItem('userList', JSON.stringify(this.userData));
    } else {
      const parseData = JSON.parse(localData);
      payload.id = parseData.length + 1;  // Increment ID based on the length
      this.userData.push(payload);
      parseData.push(payload);
      localStorage.setItem('userList', JSON.stringify(parseData));
    }
    this.userForm.reset();
  }

  onUpdate() {
    this.isUpdate = true
    this.add_openModal();
    const currentData = this.userData.find((m: any) => m.id === Number(this.currentId));
    debugger;
    if (currentData !== undefined) {
      currentData.name = this.userForm.get('name')?.value;
      currentData.username = this.userForm.get('username')?.value;
      currentData.salary = this.userForm.get('salary')?.value;
      currentData.email = this.userForm.get('email')?.value;

      localStorage.setItem('userList', JSON.stringify(this.userData));

      // Log updated data for debugging
      console.log('Updated User Data: ', this.userData);
    }

  }

  // modal
  add_openModal() {
    this.is_add_modal = true;
  }
  add_closeModal() {
    this.is_add_modal = false
  }

  closePopupHere(event: any) {
    this.isAdd = event
    this.isUpdate = event
  }
}

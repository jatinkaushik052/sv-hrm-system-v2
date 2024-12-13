import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: false,

  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  userForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(),
    username: new FormControl(),
    salary: new FormControl(),
    email: new FormControl()
  })

  userData: any[] = [];
  onAdd() {
    alert("add successfully")
    const payload = {
      id:0,
      name: this.userForm.value?.name,
      username: this.userForm.value?.username,
      salary: this.userForm.value?.salary,
      email: this.userForm.value?.email,
    }
    const localData = localStorage.getItem('userValue')
    if (localData == null) {
      payload.id=1;
      this.userData.push(payload)
      localStorage.setItem('userValue', JSON.stringify(this.userData))
    }
    else{
      const parseData= JSON.parse(localData);
      payload.id= parseData.length+1;
      this.userData.push(payload)
      parseData.push(payload)
      localStorage.setItem('userValue', JSON.stringify(parseData))

    }
    
  }
}

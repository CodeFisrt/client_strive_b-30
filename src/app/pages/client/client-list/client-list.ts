import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  imports: [ReactiveFormsModule],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css'
})
export class ClientList {


  clientForm: FormGroup = new FormGroup({});

  formBuilder = inject(FormBuilder);

  initializeForm() {
    this.clientForm = new FormGroup({
       clientId: new FormControl(0),
       contactPersonName: new FormControl('',[Validators.required, Validators.minLength(5)]),
       companyName: new FormControl(''),
       address: new FormControl(''),
       city: new FormControl(''),
       pincode: new FormControl(''),
       state: new FormControl(''),
       EmployeeStrength: new FormControl(''),
       gstNo: new FormControl(''),
       contactNo: new FormControl(''),
       regNo: new FormControl('')
    })

     this.clientForm =  this.formBuilder.group({
        clientId:['0',Validators.required, Validators.minLength(5)],
        companyName:['']
     })
  }
  
}

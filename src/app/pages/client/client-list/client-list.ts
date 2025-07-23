import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alert } from '../../../shared/reusableComponents/alert/alert';
import { ProgressBar } from "../../../shared/reusableComponents/progress-bar/progress-bar";
import { Tabs } from "../../../shared/reusableComponents/tabs/tabs";
import { MyButton } from "../../../shared/reusableComponents/my-button/my-button";
import { DyanmicButton } from "../../../shared/reusableComponents/dyanmic-button/dyanmic-button";

@Component({
  selector: 'app-client-list',
  imports: [ReactiveFormsModule, Alert, ProgressBar, Tabs, MyButton, DyanmicButton],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css'
})
export class ClientList {


  clientForm: FormGroup = new FormGroup({});

  formBuilder = inject(FormBuilder);

  @ViewChild("newModal") modalInstance!:  ElementRef;

  @ViewChild("searchText") searchText!: ElementRef;

  @ViewChild(Alert) alertCompoInstance! :Alert;

  projectTabs: string[]= ['Project Details', 'Technology','Team Members','Client', 'Payment']

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

  opneModal() {
    // const modal = document.getElementById("myModal");
    // if(modal != null) {
    //   modal.style.display = 'block'
    // }
    //document.getElementById("myModal").style.display = 'block'
    debugger;
    if(this.modalInstance) {
      this.modalInstance.nativeElement.style.display = 'block'
    }

    const alertComp =  this.alertCompoInstance.alertTitle;
    
  }

  onSearch(){
    debugger;
    const serachValeu = this.searchText.nativeElement.value;
  }
  
}

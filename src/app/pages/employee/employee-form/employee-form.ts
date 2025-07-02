import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../core/models/class/employee.model';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../core/services/employee';
import { ApiResponseModel } from '../../../core/models/interface/api.mode';
import { Master } from '../../../core/services/master';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule,AsyncPipe,JsonPipe, NgIf],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit, OnDestroy {

  employeeObj: EmployeeModel = new EmployeeModel();
  employeeService = inject(Employee);
  masterService = inject(Master);

  //roleList: any[]=[];

  subscriptionArray: Subscription[] = [];

  roleList$ :Observable<any>= new Observable<any>();
  designationList$  :Observable<any>= new Observable<any>();


  ngOnInit(): void {
    this.roleList$ = this.masterService.getRoles();
    this.designationList$ =  this.masterService.getDesignations();
    //this.getAllRoles();
  }

  // getAllRoles() {
  //   const roles =  this.masterService.getRoles().subscribe({
  //     next:(res:any)=>{
  //       this.roleList = res.data;
  //     }
  //   });

  //   this.subscriptionArray.push(roles)
  // }

  onSave() {
    debugger;
    this.subscriptionArray.push(this.employeeService.createNewEmployee(this.employeeObj).subscribe({
      next:(response:ApiResponseModel)=>{
         debugger;
        if(response.result) {
          alert("Employee Created Success")
        } else {
          alert(response.message)
        }
      },
      error:()=>{
         debugger;
        alert("API Error")
      }
    })
  )
  }

  ngOnDestroy(): void {
    this.subscriptionArray.forEach(element => {
      element.unsubscribe();
    });
  }

}

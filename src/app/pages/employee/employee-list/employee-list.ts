import { Component, inject, OnInit, signal } from '@angular/core';
import { Employee } from '../../../core/services/employee';
import { IEmployeeList } from '../../../core/models/interface/employee.mode';
import { RouterLink } from '@angular/router';
import { ShortNamePipe } from '../../../shared/pipes/short-name-pipe';
import { Alert } from '../../../shared/reusableComponents/alert/alert';
import { ProgressBar } from "../../../shared/reusableComponents/progress-bar/progress-bar";
import { Tabs } from "../../../shared/reusableComponents/tabs/tabs";
import { DyanmicButton } from "../../../shared/reusableComponents/dyanmic-button/dyanmic-button";

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, ShortNamePipe, Alert, ProgressBar, Tabs, DyanmicButton],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employeeService = inject(Employee);
  employeeList: IEmployeeList[] =  [];
  isLoader = signal<boolean>(true);

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next:(result:any)=>{
        this.employeeList =  result.data;
        this.isLoader.set(false)
      },
      error:()=>{
        
      }
    })
  }

}

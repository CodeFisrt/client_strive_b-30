import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../../core/services/employee';
import { IEmployeeList } from '../../../core/models/interface/employee.mode';
import { RouterLink } from '@angular/router';
import { ShortNamePipe } from '../../../shared/pipes/short-name-pipe';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,ShortNamePipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employeeService = inject(Employee);
  employeeList: IEmployeeList[] =  [];

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next:(result:any)=>{
        this.employeeList =  result.data;
      },
      error:()=>{
        
      }
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-employees',
  imports: [],
  templateUrl: './project-employees.html',
  styleUrl: './project-employees.css'
})
export class ProjectEmployees implements OnInit {

  @Input() projectId: number = 0;

  projectEmp: any = {
  "projectEmpId": 0,
  "employeeId": 0,
  "projectId": 0,
  "addedDate": "2025-07-10T16:09:46.753Z"
}

constructor() {
 
}

ngOnInit(): void {
   this.projectEmp.projectId = this.projectId;
}

}

import { Component } from '@angular/core';
import { Tabs } from '../../shared/reusableComponents/tabs/tabs';
import { ProjectForm } from '../project-form/project-form';
import { ProjectEmployees } from '../project/project-employees/project-employees';
import { ProjectChange } from '../project/project-change/project-change';
import { ProjectMeetings } from '../project/project-meetings/project-meetings';
import { ProjectPayment } from '../project/project-payment/project-payment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [Tabs,ProjectForm,ProjectEmployees, ProjectChange,ProjectMeetings,ProjectPayment],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {

   projectTabs: string[]= ['Project Details', 'Employees','Meeting','Change', 'Payment'];
    currentTabName: string = 'Project Details';
  currentProjectId: number = 0;
    constructor(private acttiavteRouet: ActivatedRoute) {
      this.acttiavteRouet.params.subscribe((res:any)=>{
        this.currentProjectId = res.projectid
      })
    }

   onTabSelect(tabName: string) {
    this.currentTabName = tabName;
   }

}

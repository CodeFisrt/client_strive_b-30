import { Component } from '@angular/core';
import { Tabs } from "../../shared/reusableComponents/tabs/tabs";

@Component({
  selector: 'app-client-project',
  imports: [Tabs],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject {

  tabsArray: string []= ['Project Basic','Employees','Meeting','Change Log'];


  currentTab: string = 'Project Basic';

  tabChanges(selectedTabName: string) {
    debugger;
    this.currentTab = selectedTabName;
  }

}

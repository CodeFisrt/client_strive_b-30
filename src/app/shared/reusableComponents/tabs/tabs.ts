import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs  implements OnInit{

  @Input() tabList: string[] = [];
  activeTab: string = '';
  //coursName: string = 'Angular'

  @Output() onTabChange = new EventEmitter<string>();


  constructor(){
    //console.log('constructor tabList' +this.tabList)
    //console.log('constructor coursName' +this.coursName)
  }

  ngOnInit(): void {
    // console.log('ngOnInit tabList' +this.tabList)
     //console.log('ngOnInit coursName' +this.coursName)
     this.activeTab =  this.tabList[0]
  }

  onTabSelect(tab: string) {
     debugger;
    this.activeTab = tab;
    this.onTabChange.emit(tab);
  }
}

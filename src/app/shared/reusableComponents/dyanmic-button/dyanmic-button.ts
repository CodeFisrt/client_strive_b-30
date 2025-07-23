import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dyanmic-button',
  imports: [NgClass],
  templateUrl: './dyanmic-button.html',
  styleUrl: './dyanmic-button.css'
})
export class DyanmicButton {


  @Input() className: string ='';
}

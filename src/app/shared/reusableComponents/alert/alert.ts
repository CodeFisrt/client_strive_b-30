import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {

  @Input() alertTitle: string = "My Title";
  @Input() alertMessage: string = "Test Message";
  @Input() className: string = '';

}

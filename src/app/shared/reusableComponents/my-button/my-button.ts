import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [NgClass],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {

  @Input() btnText: string = '';

 

  @Input() btnType: string = ''; //primary/ decondary/ danmger

  @Output() onBtnClicked = new EventEmitter<string>();


  btnClick() {
    this.onBtnClicked.emit();
  }
}

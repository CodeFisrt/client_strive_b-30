import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-payment',
  imports: [],
  templateUrl: './project-payment.html',
  styleUrl: './project-payment.css'
})
export class ProjectPayment {
 @Input() projectId: number = 0;
}

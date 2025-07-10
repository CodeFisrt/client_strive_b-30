import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-change',
  imports: [],
  templateUrl: './project-change.html',
  styleUrl: './project-change.css'
})
export class ProjectChange {
 @Input() projectId: number = 0;
}

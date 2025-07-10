import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-meetings',
  imports: [],
  templateUrl: './project-meetings.html',
  styleUrl: './project-meetings.css'
})
export class ProjectMeetings {
 @Input() projectId: number = 0;
}

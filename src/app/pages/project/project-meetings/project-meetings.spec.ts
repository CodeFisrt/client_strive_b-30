import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMeetings } from './project-meetings';

describe('ProjectMeetings', () => {
  let component: ProjectMeetings;
  let fixture: ComponentFixture<ProjectMeetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMeetings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMeetings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

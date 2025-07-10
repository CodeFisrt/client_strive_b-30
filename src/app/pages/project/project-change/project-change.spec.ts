import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChange } from './project-change';

describe('ProjectChange', () => {
  let component: ProjectChange;
  let fixture: ComponentFixture<ProjectChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

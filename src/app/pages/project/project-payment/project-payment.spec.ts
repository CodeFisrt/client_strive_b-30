import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPayment } from './project-payment';

describe('ProjectPayment', () => {
  let component: ProjectPayment;
  let fixture: ComponentFixture<ProjectPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

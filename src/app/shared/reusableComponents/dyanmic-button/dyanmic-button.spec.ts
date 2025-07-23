import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanmicButton } from './dyanmic-button';

describe('DyanmicButton', () => {
  let component: DyanmicButton;
  let fixture: ComponentFixture<DyanmicButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyanmicButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyanmicButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpStepperComponent } from './emp-stepper.component';

describe('EmpStepperComponent', () => {
  let component: EmpStepperComponent;
  let fixture: ComponentFixture<EmpStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

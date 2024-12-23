import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDepartComponent } from './employee-depart.component';

describe('EmployeeDepartComponent', () => {
  let component: EmployeeDepartComponent;
  let fixture: ComponentFixture<EmployeeDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDepartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

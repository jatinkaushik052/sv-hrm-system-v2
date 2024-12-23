import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDepartComponent } from './add-emp-depart.component';

describe('AddEmpDepartComponent', () => {
  let component: AddEmpDepartComponent;
  let fixture: ComponentFixture<AddEmpDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmpDepartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

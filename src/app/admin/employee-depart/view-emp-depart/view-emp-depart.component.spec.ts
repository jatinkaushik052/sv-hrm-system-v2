import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpDepartComponent } from './view-emp-depart.component';

describe('ViewEmpDepartComponent', () => {
  let component: ViewEmpDepartComponent;
  let fixture: ComponentFixture<ViewEmpDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEmpDepartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

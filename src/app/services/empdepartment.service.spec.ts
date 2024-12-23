import { TestBed } from '@angular/core/testing';

import { EmpdepartmentService } from './empdepartment.service';

describe('EmpdepartmentService', () => {
  let service: EmpdepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpdepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

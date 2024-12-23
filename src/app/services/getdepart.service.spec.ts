import { TestBed } from '@angular/core/testing';

import { GetdepartService } from './getdepart.service';

describe('GetdepartService', () => {
  let service: GetdepartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdepartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

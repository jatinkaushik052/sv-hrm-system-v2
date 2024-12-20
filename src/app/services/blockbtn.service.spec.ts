import { TestBed } from '@angular/core/testing';

import { BlockbtnService } from './blockbtn.service';

describe('BlockbtnService', () => {
  let service: BlockbtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockbtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ForlistService } from './forlist.service';

describe('ForlistService', () => {
  let service: ForlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

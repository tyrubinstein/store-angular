import { TestBed } from '@angular/core/testing';

import { FindClothService } from './find-cloth.service';

describe('FindClothService', () => {
  let service: FindClothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindClothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

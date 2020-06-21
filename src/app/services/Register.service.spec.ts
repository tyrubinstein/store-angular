import { TestBed } from '@angular/core/testing';

import { RegisterService } from './Register-service';
import { registerLocaleData } from '@angular/common';

describe('WebApiService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(registerLocaleData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

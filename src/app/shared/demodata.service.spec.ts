import { TestBed } from '@angular/core/testing';

import { DemodataService } from './demodata.service';

describe('UserService', () => {
  let service: DemodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

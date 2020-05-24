import { TestBed } from '@angular/core/testing';

import { PeriodicService } from './periodic.service';

describe('PeriodicService', () => {
  let service: PeriodicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

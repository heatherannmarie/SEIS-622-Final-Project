import { TestBed } from '@angular/core/testing';

import { StaffBioService } from './staff-bio.service';

describe('StaffBioService', () => {
  let service: StaffBioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffBioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DashDescriptionService } from './dash-description.service';

describe('DashDescriptionService', () => {
  let service: DashDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

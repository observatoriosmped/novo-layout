import { TestBed } from '@angular/core/testing';

import { GrafanaDashsService } from './grafana-dashs.service';

describe('GrafanaDashsService', () => {
  let service: GrafanaDashsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrafanaDashsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

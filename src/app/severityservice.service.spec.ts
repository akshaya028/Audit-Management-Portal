import { TestBed } from '@angular/core/testing';

import { SeverityserviceService } from './severityservice.service';

describe('SeverityserviceService', () => {
  let service: SeverityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeverityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

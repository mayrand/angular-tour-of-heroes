import { TestBed } from '@angular/core/testing';

import { InMemmoryDataService } from './in-memmory-data.service';

describe('InMemmoryDataService', () => {
  let service: InMemmoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemmoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

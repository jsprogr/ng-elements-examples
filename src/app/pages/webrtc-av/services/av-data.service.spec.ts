import { TestBed } from '@angular/core/testing';

import { AvDataService } from './av-data.service';

describe('AvDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvDataService = TestBed.get(AvDataService);
    expect(service).toBeTruthy();
  });
});

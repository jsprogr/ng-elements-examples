import { TestBed } from '@angular/core/testing';

import { MarketUpdaterService } from './market-updater.service';

describe('MarketUpdaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketUpdaterService = TestBed.get(MarketUpdaterService);
    expect(service).toBeTruthy();
  });
});

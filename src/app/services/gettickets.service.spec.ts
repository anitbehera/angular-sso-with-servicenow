import { TestBed } from '@angular/core/testing';

import { GetticketsService } from './gettickets.service';

describe('GetticketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetticketsService = TestBed.get(GetticketsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClimaSharedService } from './clima-shared.service';

describe('ClimaSharedService', () => {
  let service: ClimaSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApiOdmbService } from './api-odmb.service';

describe('ApiOdmbService', () => {
  let service: ApiOdmbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOdmbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

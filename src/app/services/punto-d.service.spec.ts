import { TestBed } from '@angular/core/testing';

import { PuntoDService } from './punto-d.service';

describe('PuntoDService', () => {
  let service: PuntoDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

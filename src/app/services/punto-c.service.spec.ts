import { TestBed } from '@angular/core/testing';

import { PuntoCService } from './punto-c.service';

describe('PuntoCService', () => {
  let service: PuntoCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

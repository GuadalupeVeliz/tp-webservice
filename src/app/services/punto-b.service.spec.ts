import { TestBed } from '@angular/core/testing';

import { PuntoBService } from './punto-b.service';

describe('PuntoBService', () => {
  let service: PuntoBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

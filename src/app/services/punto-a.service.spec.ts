import { TestBed } from '@angular/core/testing';

import { PuntoAService } from './punto-a.service';

describe('PuntoAService', () => {
  let service: PuntoAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

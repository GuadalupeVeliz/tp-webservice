import { TestBed } from '@angular/core/testing';

import { PuntoEService } from './punto-e.service';

describe('PuntoEService', () => {
  let service: PuntoEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

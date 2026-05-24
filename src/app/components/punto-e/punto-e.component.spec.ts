import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoEComponent } from './punto-e.component';

describe('PuntoEComponent', () => {
  let component: PuntoEComponent;
  let fixture: ComponentFixture<PuntoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntoEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

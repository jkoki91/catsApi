import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoTarjetaComponent } from './gato-tarjeta.component';

describe('GatoTarjetaComponent', () => {
  let component: GatoTarjetaComponent;
  let fixture: ComponentFixture<GatoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatoTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiberDetalleComponent } from './ciber-detalle.component';

describe('CiberDetalleComponent', () => {
  let component: CiberDetalleComponent;
  let fixture: ComponentFixture<CiberDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiberDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiberDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

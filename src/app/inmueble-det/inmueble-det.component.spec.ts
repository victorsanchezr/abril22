import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleDetComponent } from './inmueble-det.component';

describe('InmuebleDetComponent', () => {
  let component: InmuebleDetComponent;
  let fixture: ComponentFixture<InmuebleDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmuebleDetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmuebleDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

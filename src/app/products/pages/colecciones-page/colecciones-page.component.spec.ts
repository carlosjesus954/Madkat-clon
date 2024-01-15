import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionesPageComponent } from './colecciones-page.component';

describe('ColeccionesPageComponent', () => {
  let component: ColeccionesPageComponent;
  let fixture: ComponentFixture<ColeccionesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionesPageComponent]
    });
    fixture = TestBed.createComponent(ColeccionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoHomeComponent } from './catalogo-home.component';

describe('CatalogoHomeComponent', () => {
  let component: CatalogoHomeComponent;
  let fixture: ComponentFixture<CatalogoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoHomeComponent]
    });
    fixture = TestBed.createComponent(CatalogoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

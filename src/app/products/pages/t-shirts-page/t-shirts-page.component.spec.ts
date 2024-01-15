import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsPageComponent } from './t-shirts-page.component';

describe('TShirtsPageComponent', () => {
  let component: TShirtsPageComponent;
  let fixture: ComponentFixture<TShirtsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TShirtsPageComponent]
    });
    fixture = TestBed.createComponent(TShirtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

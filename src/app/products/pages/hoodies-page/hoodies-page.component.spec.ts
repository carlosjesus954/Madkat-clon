import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesPageComponent } from './hoodies-page.component';

describe('HoodiesPageComponent', () => {
  let component: HoodiesPageComponent;
  let fixture: ComponentFixture<HoodiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoodiesPageComponent]
    });
    fixture = TestBed.createComponent(HoodiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

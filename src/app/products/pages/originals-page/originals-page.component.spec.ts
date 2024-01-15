import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalsPageComponent } from './originals-page.component';

describe('OriginalsPageComponent', () => {
  let component: OriginalsPageComponent;
  let fixture: ComponentFixture<OriginalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriginalsPageComponent]
    });
    fixture = TestBed.createComponent(OriginalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

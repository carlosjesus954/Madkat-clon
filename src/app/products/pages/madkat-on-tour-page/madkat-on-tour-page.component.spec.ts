import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadkatOnTourPageComponent } from './madkat-on-tour-page.component';

describe('MadkatOnTourPageComponent', () => {
  let component: MadkatOnTourPageComponent;
  let fixture: ComponentFixture<MadkatOnTourPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadkatOnTourPageComponent]
    });
    fixture = TestBed.createComponent(MadkatOnTourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAuthenticationPageComponent } from './error-authentication-page.component';

describe('ErrorAuthenticationPageComponent', () => {
  let component: ErrorAuthenticationPageComponent;
  let fixture: ComponentFixture<ErrorAuthenticationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorAuthenticationPageComponent]
    });
    fixture = TestBed.createComponent(ErrorAuthenticationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

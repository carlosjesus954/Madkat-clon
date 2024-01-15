import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInPageComponent } from './new-in-page.component';

describe('NewInPageComponent', () => {
  let component: NewInPageComponent;
  let fixture: ComponentFixture<NewInPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewInPageComponent]
    });
    fixture = TestBed.createComponent(NewInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

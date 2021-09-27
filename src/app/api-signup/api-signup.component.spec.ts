import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSignupComponent } from './api-signup.component';

describe('ApiSignupComponent', () => {
  let component: ApiSignupComponent;
  let fixture: ComponentFixture<ApiSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

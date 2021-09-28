import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHomeComponent } from './api-home.component';

describe('ApiHomeComponent', () => {
  let component: ApiHomeComponent;
  let fixture: ComponentFixture<ApiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

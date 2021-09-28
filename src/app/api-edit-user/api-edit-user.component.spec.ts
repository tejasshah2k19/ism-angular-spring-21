import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEditUserComponent } from './api-edit-user.component';

describe('ApiEditUserComponent', () => {
  let component: ApiEditUserComponent;
  let fixture: ComponentFixture<ApiEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

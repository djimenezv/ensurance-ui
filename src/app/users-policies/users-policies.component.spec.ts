import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPoliciesComponent } from './users-policies.component';

describe('UsersPoliciesComponent', () => {
  let component: UsersPoliciesComponent;
  let fixture: ComponentFixture<UsersPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

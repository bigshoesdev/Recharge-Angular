import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportAuthTokenComponent } from './passport-auth-token.component';

describe('PassportAuthTokenComponent', () => {
  let component: PassportAuthTokenComponent;
  let fixture: ComponentFixture<PassportAuthTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportAuthTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportAuthTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

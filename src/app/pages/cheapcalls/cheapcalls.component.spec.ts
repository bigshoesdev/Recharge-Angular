import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheapcallsComponent } from './cheapcalls.component';

describe('CheapcallsComponent', () => {
  let component: CheapcallsComponent;
  let fixture: ComponentFixture<CheapcallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheapcallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheapcallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInstructionComponent } from './first-instruction.component';

describe('FirstInstructionComponent', () => {
  let component: FirstInstructionComponent;
  let fixture: ComponentFixture<FirstInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplate3Component } from './demo-template3.component';

describe('DemoTemplate3Component', () => {
  let component: DemoTemplate3Component;
  let fixture: ComponentFixture<DemoTemplate3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplate3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

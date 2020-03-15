import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplate1Component } from './demo-template1.component';

describe('DemoTemplate1Component', () => {
  let component: DemoTemplate1Component;
  let fixture: ComponentFixture<DemoTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplate2Component } from './demo-template2.component';

describe('DemoTemplate2Component', () => {
  let component: DemoTemplate2Component;
  let fixture: ComponentFixture<DemoTemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

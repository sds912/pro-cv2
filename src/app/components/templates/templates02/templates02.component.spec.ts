import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templates02Component } from './templates02.component';

describe('Templates02Component', () => {
  let component: Templates02Component;
  let fixture: ComponentFixture<Templates02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Templates02Component]
    });
    fixture = TestBed.createComponent(Templates02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

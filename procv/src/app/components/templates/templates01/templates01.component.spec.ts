import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templates01Component } from './templates01.component';

describe('Templates01Component', () => {
  let component: Templates01Component;
  let fixture: ComponentFixture<Templates01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Templates01Component]
    });
    fixture = TestBed.createComponent(Templates01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

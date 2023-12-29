import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templates03Component } from './templates03.component';

describe('Templates03Component', () => {
  let component: Templates03Component;
  let fixture: ComponentFixture<Templates03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Templates03Component]
    });
    fixture = TestBed.createComponent(Templates03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

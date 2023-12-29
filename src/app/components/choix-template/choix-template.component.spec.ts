import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTemplateComponent } from './choix-template.component';

describe('ChoixTemplateComponent', () => {
  let component: ChoixTemplateComponent;
  let fixture: ComponentFixture<ChoixTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixTemplateComponent]
    });
    fixture = TestBed.createComponent(ChoixTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

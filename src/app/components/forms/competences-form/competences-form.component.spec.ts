import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesFormComponent } from './competences-form.component';

describe('CompetencesFormComponent', () => {
  let component: CompetencesFormComponent;
  let fixture: ComponentFixture<CompetencesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetencesFormComponent]
    });
    fixture = TestBed.createComponent(CompetencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

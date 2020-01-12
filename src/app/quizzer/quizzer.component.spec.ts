import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzerComponent } from './quizzer.component';

describe('QuizzerComponent', () => {
  let component: QuizzerComponent;
  let fixture: ComponentFixture<QuizzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

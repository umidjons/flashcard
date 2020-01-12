import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  selector: 'fc-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() onAnswer = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedAnswer: Answer) {
    this.question.answers.forEach(answer => answer.selected = answer.text === selectedAnswer.text);
    this.onAnswer.emit(selectedAnswer.points);
  }

}

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question } from '../models/question';

@Component({
  selector: 'fc-quizzer',
  templateUrl: './quizzer.component.html',
  styleUrls: ['./quizzer.component.scss']
})
export class QuizzerComponent implements OnInit {

  questions: Question[];

  constructor(public quizService: QuizService) { }

  ngOnInit() {
    this.questions = this.quizService.load();
  }

}

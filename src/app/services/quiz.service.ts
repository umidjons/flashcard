import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  load(): Question[] {
    return Question.parseMulti([
      {
        id: '1',
        text: 'question 1',
        answers: [
          {text: 'answer 1', points: 0},
          {text: 'answer 2', points: 1},
          {text: 'answer 3', points: 0},
        ]
      },
      {
        id: '2',
        text: 'question 2',
        answers: [
          {text: 'answer 1', points: 1},
          {text: 'answer 2', points: 0},
          {text: 'answer 3', points: 0},
        ]
      },
      {
        id: '3',
        text: 'question 3',
        answers: [
          {text: 'answer 1', points: 0},
          {text: 'answer 2', points: 0},
          {text: 'answer 3', points: 1},
        ]
      },
    ]);
  }
}

import { Answer } from './answer';

export class Question {

  constructor(
    public id: string,
    public text: string,
    public answers: Answer[]
  ) {}

  static parse(item) {
    return new Question(
      item.id,
      item.text,
      item.answers.map(answer => new Answer(answer.text, answer.points))
    );
  }

  static parseMulti(items) {
    return items.map(Question.parse);
  }

}

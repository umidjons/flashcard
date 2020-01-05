import { Injectable } from '@angular/core';
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  load(): Word[] {
    return [
      new Word('first', 'first definition'),
      new Word('second', 'second definition'),
      new Word('third', 'third definition'),
      new Word('fourth', 'fourth definition'),
    ];
  }
}

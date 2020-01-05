import { Component, Input, OnInit } from '@angular/core';
import { Word } from '../models/word';

@Component({
  selector: 'fc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() word: Word;

  constructor() { }

  ngOnInit() {
  }

}

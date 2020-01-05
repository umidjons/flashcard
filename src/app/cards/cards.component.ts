import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Word } from '../models/word';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'fc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  words: Word[] = [];

  constructor(private carouselConfig: CarouselConfig,
              private cardsService: CardsService) {
    this.carouselConfig.showIndicators = false;
  }

  ngOnInit() {
    this.words = this.cardsService.load();
  }

}

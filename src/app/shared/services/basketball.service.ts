import { Injectable } from '@angular/core';
import { BasketOption } from '../../basket-option';

@Injectable({
  providedIn: 'root'
})
export class BasketballService {

  options: BasketOption[] = [];

  constructor() { 
    this.options = [
      {name: "Free Throws", puntuation: 1},
      {name: "Regular Points", puntuation: 2},
      {name: "3-Points", puntuation: 3},
    ]
  }

  getAllOptionsForBasketBallCounter(): BasketOption[] {
    return this.options;
  }

}

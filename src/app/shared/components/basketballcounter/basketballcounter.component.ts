import { Component, inject, signal } from '@angular/core';
import { BasketOption } from '../../../basket-option';
import { BasketballService } from '../../services/basketball.service';

@Component({
  selector: 'app-basketballcounter',
  standalone: true,
  imports: [],
  templateUrl: './basketballcounter.component.html',
  styleUrl: './basketballcounter.component.css'
})
export class BasketballcounterComponent {

  basketService: BasketballService = inject(BasketballService);
  optionList: BasketOption[] = [];

  guestCounter = signal<number>(0);
  homeCounter = signal<number>(0);

  constructor(){
    this.optionList = this.basketService.getAllOptionsForBasketBallCounter();
  }

  submitDecision(option: string, player: string): void {
    if(option === "1"){
      if(player === "Guest"){
        this.guestCounter.update(counter => counter + 1);
      } else {
        this.homeCounter.update(counter => counter + 1);
      }
    } else if(option === "2"){
      if(player === "Guest"){
        this.guestCounter.update(counter => counter + 2);
      } else {
        this.homeCounter.update(counter => counter + 2);
      }
    } else {
      if(player === "Guest"){
        this.guestCounter.update(counter => counter + 3);
      } else {
        this.homeCounter.update(counter => counter + 3);
      }
    }
  }

}

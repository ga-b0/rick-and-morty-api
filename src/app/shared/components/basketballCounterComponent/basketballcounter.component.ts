import { Component, inject, signal } from '@angular/core'
import { BasketOption } from '@interfaces/basket-option'
import { BasketballService } from '@services/basketball.service'
import { BasketPlayers } from '@enums/basketplayers'

@Component({
  selector: 'app-basketballcounter',
  standalone: true,
  imports: [],
  templateUrl: './basketballcounter.component.html',
  styleUrl: './basketballcounter.component.css',
})
export class BasketballcounterComponent {
  basketService: BasketballService = inject(BasketballService)
  optionList: BasketOption[] = []
  guestCounter = signal<number>(0)
  homeCounter = signal<number>(0)

  constructor() {
    this.optionList = this.basketService.getAllOptions()
  }

  submitDecision(option: string, player: string): void {
    if (player === BasketPlayers.Guest) {
      this.guestCounter.update((counter) => counter + Number(option))
      return
    }
    this.homeCounter.update((counter) => counter + Number(option))
  }

  resetGame(): void {
    this.guestCounter.set(0)
    this.homeCounter.set(0)
  }
}

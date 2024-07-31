import { Injectable } from '@angular/core'
import { BasketOption } from '@interfaces/basket-option'
import { basketOptions } from '@fakedata/basketData'

@Injectable({
  providedIn: 'root',
})
export class BasketballService {
  options: BasketOption[] = [...basketOptions]

  getAllOptionsForBasketBallCounter(): BasketOption[] {
    return this.options
  }
}

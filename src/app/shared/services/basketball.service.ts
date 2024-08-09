import { Injectable } from '@angular/core'
import { BasketOption } from '@interfaces/basket-option'
import { basketOptions } from '@fakedata/basket-data'

@Injectable({
  providedIn: 'root',
})
export class BasketballService {
  options: BasketOption[] = [...basketOptions]

  getAllOptions(): BasketOption[] {
    return this.options
  }
}

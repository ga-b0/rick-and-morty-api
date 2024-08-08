import { BasketOption } from '@interfaces/basket-option'

export const basketOptions: BasketOption[] = [
  { id: crypto.randomUUID(), name: 'Regular Points', score: 2 },
  { id: crypto.randomUUID(), name: 'Free Throws', score: 1 },
  { id: crypto.randomUUID(), name: '3-Points', score: 3 },
]

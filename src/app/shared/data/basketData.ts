import { BasketOption } from '@interfaces/basket-option'

export const basketOptions: BasketOption[] = [
  { id: crypto.randomUUID(), name: 'Regular Points', puntuation: 2 },
  { id: crypto.randomUUID(), name: 'Free Throws', puntuation: 1 },
  { id: crypto.randomUUID(), name: '3-Points', puntuation: 3 },
]

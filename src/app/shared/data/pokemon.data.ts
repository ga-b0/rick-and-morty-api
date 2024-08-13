import { Pokemonselector } from '@interfaces/pokemon/pokemonselector'

export const pokemonData: Pokemonselector[] = [
  {
    id: crypto.randomUUID(),
    imageUrl: '/bulbasaur.png',
    name: 'Bulbasaur',
    value: 1,
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/charmander.png',
    name: 'Charmander',
    value: 2,
  },
  {
    id: crypto.randomUUID(),
    imageUrl: '/squirtle.png',
    name: 'Squirtle',
    value: 3,
  },
]

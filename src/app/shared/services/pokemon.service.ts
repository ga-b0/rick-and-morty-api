import { Injectable } from '@angular/core'
import { Pokemonselector } from '../interfaces/pokemonselector'
import { pokemonData } from '../data/pokemonData'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonSelectors: Pokemonselector[] = [...pokemonData]

  getAllPokemons(): Pokemonselector[] {
    return this.pokemonSelectors
  }
}

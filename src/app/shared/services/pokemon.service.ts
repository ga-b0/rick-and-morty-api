import { Injectable } from '@angular/core'
import { Pokemonselector } from '@interfaces/pokemonselector'
import { pokemonData } from '@fakedata/pokemon-data'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonSelectors: Pokemonselector[] = [...pokemonData]

  getAllPokemons(): Pokemonselector[] {
    return this.pokemonSelectors
  }
}

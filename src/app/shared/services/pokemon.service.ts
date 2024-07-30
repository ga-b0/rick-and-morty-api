import { Injectable } from '@angular/core';
import { Pokemonselector } from '../interfaces/pokemonselector';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonSelectors: Pokemonselector[] = [];

  constructor() {
    this.pokemonSelectors = [
      {
        ruta: "/bulbasaur.png",
        name: "Bulbasaur",
        option: 1
      },
      {
        ruta: "/charmander.png",
        name: "Charmander",
        option: 2
      },
      {
        ruta: "/squirtle.png",
        name: "Squirtle",
        option: 3
      }
    ]
   }

   getAllPokemons(): Pokemonselector[] {
    return this.pokemonSelectors;
   }
}

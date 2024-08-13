import { Component, inject, signal, computed } from '@angular/core'
import { CommonModule, UpperCasePipe } from '@angular/common'
import { PokemonService } from '@services/home-services/pokemon.service'
import { Pokemonselector } from '@interfaces/pokemon/pokemonselector'

@Component({
  selector: 'app-pokemonselector',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './pokemonselector.component.html',
  styleUrl: './pokemonselector.component.css',
})
export class PokemonselectorComponent {
  pokemonService: PokemonService = inject(PokemonService)
  pokemons: Pokemonselector[] = []
  optionPlayerSelected = signal(0)
  textToShowPlayerSelected = computed(() => {
    if (this.optionPlayerSelected() !== 0) {
      for (const pokemon of this.pokemons) {
        if (pokemon.value === this.optionPlayerSelected()) {
          return pokemon.name
        }
      }
    }
    return ''
  })

  constructor() {
    this.pokemons = this.pokemonService.getAllPokemons()
  }

  selectedPlayer(option: number): void {
    if (this.optionPlayerSelected() === option) {
      this.optionPlayerSelected.set(0)
      return
    }
    this.optionPlayerSelected.set(option)
  }
}

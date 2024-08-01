import {
  Component,
  inject,
  signal,
  computed,
  ElementRef,
  ViewChild,
} from '@angular/core'
import { PokemonService } from '@services/pokemon.service'
import { Pokemonselector } from '@interfaces/pokemonselector'

@Component({
  selector: 'app-pokemonselector',
  standalone: true,
  imports: [],
  templateUrl: './pokemonselector.component.html',
  styleUrl: './pokemonselector.component.css',
})
export class PokemonselectorComponent {
  pokemonService: PokemonService = inject(PokemonService)
  pokemons: Pokemonselector[] = []
  playerSelected = signal(0)
  textPokemonPicked = ''
  textToShowPlayerSelected = computed(() => {
    if (this.playerSelected() !== 0) {
      for (const pokemon of this.pokemons) {
        if (pokemon.option === this.playerSelected()) {
          this.textPokemonPicked = `You're picked ${pokemon.name}`
        }
      }
    } else {
      this.textPokemonPicked = ''
    }
    if (this.textPokemonPicked !== '') {
      return this.textPokemonPicked
    } else {
      return ''
    }
  })

  @ViewChild('bulbasaur') pokemonBulbasaur!: ElementRef
  @ViewChild('charmander') pokemonCharmander!: ElementRef
  @ViewChild('squirtle') pokemonSquirtle!: ElementRef

  constructor() {
    this.pokemons = this.pokemonService.getAllPokemons()
  }

  selectedPlayer(option: number): void {
    this.playerSelected.set(option)
    if (option === 1) {
      if (this.pokemonBulbasaur.nativeElement.classList.contains('selected')) {
        this.playerSelected.set(0)
      }
      this.pokemonBulbasaur.nativeElement.classList.toggle('selected')
      this.pokemonCharmander.nativeElement.classList.remove('selected')
      this.pokemonSquirtle.nativeElement.classList.remove('selected')
    } else if (option === 2) {
      if (this.pokemonCharmander.nativeElement.classList.contains('selected')) {
        this.playerSelected.set(0)
      }
      this.pokemonCharmander.nativeElement.classList.toggle('selected')
      this.pokemonBulbasaur.nativeElement.classList.remove('selected')
      this.pokemonSquirtle.nativeElement.classList.remove('selected')
    } else if (option === 3) {
      if (this.pokemonSquirtle.nativeElement.classList.contains('selected')) {
        this.playerSelected.set(0)
      }
      this.pokemonSquirtle.nativeElement.classList.toggle('selected')
      this.pokemonCharmander.nativeElement.classList.remove('selected')
      this.pokemonBulbasaur.nativeElement.classList.remove('selected')
    }
  }
}

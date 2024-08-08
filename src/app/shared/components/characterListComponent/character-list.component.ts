import { Component, inject, signal } from '@angular/core'
import { CharacterService } from '@services/character.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  readonly API_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'
  characterService = inject(CharacterService)
  characterResponse = signal({})

  constructor() {
    this.characterService
      .getAllCharacters(this.API_CHARACTERS_URL)
      .subscribe((data) => {
        this.characterResponse.set(data)
      })
  }
}

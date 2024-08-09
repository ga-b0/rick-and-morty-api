import { Component, inject } from '@angular/core'
import { CharacterService } from '@services/character.service'
import { AsyncPipe } from '@angular/common'
import { CharacterList } from '@interfaces/character-list'

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
  characterResponse?: CharacterList

  constructor() {
    this.getAllCharacter(this.API_CHARACTERS_URL)
  }

  getAllCharacter(url: string): void {
    this.characterService
      .getAllCharacters(url)
      .subscribe((data: CharacterList) => {
        this.characterResponse = data
        this.getCharacterEpisodes()
      })
  }

  getCharacterEpisodes(): void {
    this.characterResponse!.results.forEach((character) => {
      this.characterService
        .getAllEpisodes(character.episode[0])
        .subscribe((data) => {
          character.episode[0] = data.name
        })
    })
  }

  prevPage(): void {
    if (this.characterResponse?.info.prev !== null) {
      this.getAllCharacter(this.characterResponse!.info.prev)
    }
  }

  nextPage(): void {
    if (this.characterResponse?.info.next !== null) {
      this.getAllCharacter(this.characterResponse!.info.next)
    }
  }
}

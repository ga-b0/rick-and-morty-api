import { Component, inject } from '@angular/core'
import { CharacterService } from '@services/character.service'
import { CharacterList } from '@interfaces/character-list'
import { EpisodeInfo } from '@interfaces/episode-info'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  readonly API_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'
  characterService = inject(CharacterService)
  charactersInfo?: CharacterList
  episodes?: EpisodeInfo[]
  startValue = 1
  endValue = this.charactersInfo?.info.pages

  constructor() {
    this.characterService
      .getAllCharacters(this.API_CHARACTERS_URL)
      .subscribe((data) => {
        this.charactersInfo = data
      })
  }

  prevPage(): void {
    if (this.charactersInfo?.info.prev !== null) {
      this.characterService
        .getAllCharacters(this.charactersInfo!.info.prev)
        .subscribe((data) => (this.charactersInfo = data))
    }
  }

  nextPage(): void {
    if (this.charactersInfo?.info.next !== null) {
      this.characterService
        .getAllCharacters(this.charactersInfo!.info.next)
        .subscribe((data) => (this.charactersInfo = data))
    }
  }

  displayPage(page: number): void {
    this.characterService
      .getAllCharacters(this.API_CHARACTERS_URL + `/?page=${page}`)
      .subscribe((data) => (this.charactersInfo = data))
  }

  generatePages(
    start: number | undefined,
    end: number | undefined
  ): number[] | undefined {
    if (start === undefined || end === undefined) {
      return undefined
    }
    const length = end - start + 1
    return Array.from({ length }, (_, index) => start + index)
  }
}

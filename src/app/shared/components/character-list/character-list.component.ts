import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { CharacterService } from '@services/home-services/character.service'
import { CharacterList } from '@interfaces/characters/character-list'
import { FilteredResults } from '@interfaces/characters/filtered-results'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  readonly API_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'
  characterService = inject(CharacterService)
  charactersInfo?: CharacterList
  charactersFiltered?: CharacterList
  startValue = 1
  endValue = this.charactersInfo?.info.pages
  status = ['all', 'alive', 'dead', 'unknown']
  gender = ['all', 'male', 'female', 'genderless', 'unknown']

  filteredForm = new FormGroup<FilteredResults>({
    name: new FormControl(''),
    specie: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(this.status[0]),
    gender: new FormControl(this.gender[0]),
  })

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

  submitFilter(): void {
    const nameValue = this.filteredForm.value.name?.toLowerCase()
    const typeValue = this.filteredForm.value.type?.toLowerCase()
    let genderValue = this.filteredForm.value.gender?.toLowerCase()
    let statusValue = this.filteredForm.value.status?.toLocaleLowerCase()
    const specieValue = this.filteredForm.value.specie?.toLocaleLowerCase()
    if (statusValue === 'all') {
      statusValue = ''
    }
    if (genderValue === 'all') {
      genderValue = ''
    }
    this.characterService
      .getAllCharacters(
        this.API_CHARACTERS_URL +
          `/?name=${nameValue}&status=${statusValue}&gender=${genderValue}&type=${typeValue}&species=${specieValue}`
      )
      .subscribe(
        (data) => (this.charactersInfo = data),
        (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.charactersInfo = undefined
          }
        }
      )
  }

  resetFilter(): void {
    this.filteredForm.reset({
      name: '',
      specie: '',
      type: '',
      status: this.status[0],
      gender: this.gender[0],
    })
    this.characterService.getAllCharacters(this.API_CHARACTERS_URL)
  }
}

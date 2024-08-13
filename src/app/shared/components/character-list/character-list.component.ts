import { Component, inject, OnInit, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http'
import { Subscription } from 'rxjs'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { CharacterService } from '@services/home-services/character.service'
import { CharacterList } from '@interfaces/characters/character-list'
import { FilteredResults } from '@interfaces/characters/filtered-results'
import { GenderData } from '@fakedata/gender-filter.data'
import { StatusData } from '@fakedata/status-filter.data'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent implements OnInit, OnDestroy {
  readonly API_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'
  characterService = inject(CharacterService)
  charactersInfo?: CharacterList
  characterInfoSuscriptor?: Subscription
  status: string[] = [...StatusData]
  gender: string[] = [...GenderData]

  filteredForm = new FormGroup<FilteredResults>({
    name: new FormControl(''),
    specie: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(this.status[0]),
    gender: new FormControl(this.gender[0]),
  })

  ngOnInit(): void {
    this.characterInfoSuscriptor = this.characterService
      .getAllCharacters(this.API_CHARACTERS_URL)
      .subscribe((data) => {
        this.charactersInfo = data
      })
  }

  prevPage(): void {
    if (this.charactersInfo?.info.prev !== undefined) {
      this.characterInfoSuscriptor = this.characterService
        .getAllCharacters(this.charactersInfo.info.prev)
        .subscribe((data) => (this.charactersInfo = data))
    }
  }

  nextPage(): void {
    if (this.charactersInfo?.info.next !== undefined) {
      this.characterService
        .getAllCharacters(this.charactersInfo.info.next)
        .subscribe((data) => (this.charactersInfo = data))
    }
  }

  submitFilter(): void {
    const nameValue = this.filteredForm.value.name?.toLowerCase()
    const typeValue = this.filteredForm.value.type?.toLowerCase()
    let genderValue = this.filteredForm.value.gender
    let statusValue = this.filteredForm.value.status
    const specieValue = this.filteredForm.value.specie?.toLocaleLowerCase()
    if (statusValue === this.status[0]) {
      statusValue = ''
    }
    if (genderValue === this.gender[0]) {
      genderValue = ''
    }
    this.characterInfoSuscriptor = this.characterService
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
  }

  ngOnDestroy(): void {
    if (this.characterInfoSuscriptor) {
      this.characterInfoSuscriptor.unsubscribe()
    }
  }
}

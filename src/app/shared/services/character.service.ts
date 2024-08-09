import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { CharacterList } from '@interfaces/character-list'
import { Episode } from '@interfaces/episode'

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersData?: Observable<CharacterList>
  readonly API_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) {}

  // getCharacterData(url: string): void {
  //   this.http.get<CharacterList>(url).pipe(switchMap((data:any) => {
  //     console.log(data.info)
  //   })).subscribe()
  // }

  // getDataCharacters(url: string): void {
  //   this.http.get(url).pipe(
  //     switchMap((character) => {
  //       console.log(character)
  //     })
  //   ).subscribe()
  // }

  getAllCharacters(url: string): Observable<CharacterList> {
    return this.http.get<CharacterList>(url)
  }

  getExperimentalCharacters(url: string): Observable<CharacterList> {
    return this.http.get<CharacterList>(url)
  }

  getAllEpisodes(url: string): Observable<Episode> {
    return this.http.get<Episode>(url)
  }
}

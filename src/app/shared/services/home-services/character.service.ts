import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, mergeMap, Observable, forkJoin } from 'rxjs'
import { CharacterList } from '@interfaces/characters/character-list'
import { EpisodeInfo } from '@interfaces/characters/episode-info'

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersData?: Observable<CharacterList>
  readonly API_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) {}

  getAllCharacters(url: string): Observable<CharacterList> {
    return this.http.get<CharacterList>(url).pipe(
      mergeMap((characterList: CharacterList) => {
        const charactersWithEpisodes = characterList.results.map((character) =>
          this.http.get<EpisodeInfo>(character.episode[0]).pipe(
            map((episodeInfo) => ({
              ...character,
              episodeInfo,
            }))
          )
        )

        return forkJoin(charactersWithEpisodes).pipe(
          map((updatedCharacters) => ({
            ...characterList,
            results: updatedCharacters,
          }))
        )
      })
    )
  }
}

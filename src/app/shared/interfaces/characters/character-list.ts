import { ResultCharacter } from './result-character'
import { InfoCharacterList } from './info-character-list'

export interface CharacterList {
  results: ResultCharacter[]
  info: InfoCharacterList
}

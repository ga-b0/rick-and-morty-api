import { InfoCharacterList } from './info-character-list'
import { ResultCharacter } from './result-character'

export interface CharacterList {
  results: ResultCharacter[]
  info: InfoCharacterList
}

import { OriginResultCharacter } from './origin-result-character'
import { EpisodeInfo } from './episode-info'

export interface ResultCharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: OriginResultCharacter
  location: OriginResultCharacter
  image: string
  url: string
  created: string
  episode: string[]
  episodeInfo?: EpisodeInfo
}

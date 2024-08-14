import { PageInfo } from '@interfaces/page-info'

export const PagesInfo: PageInfo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Basket Counter',
    description:
      'Control the score of your basketball game quickly and easily, update the score in real time and follow the excitement of the game!',
    imageUrl: '/pages-images/BasketCounter.webp',
    imageAlt: 'Basket Counter Image Page',
    pageUrl: '/home/basketball-counter',
  },
  {
    id: crypto.randomUUID(),
    title: 'Pokemon Selector',
    description:
      'Discover your favorite Pokémon! Explore three Pokémon and choose the one you like best to start your adventure - the choice is yours!',
    imageUrl: '/pages-images/PokemonSelector.webp',
    imageAlt: 'Pokemon Selector Image Page',
    pageUrl: '/home/pokemon-selector',
  },
  {
    id: crypto.randomUUID(),
    title: 'Pipes',
    description:
      'Turn your data into something spectacular! Transform information easily with our custom filters and formats, making everything look perfect with just one click.',
    imageUrl: '/pages-images/Pipes.webp',
    imageAlt: 'Pipes Image Page',
    pageUrl: '/home/pipes',
  },
  {
    id: crypto.randomUUID(),
    title: 'Rest API',
    description:
      'Meet all the Rick and Morty characters in one place! Filter and search by name to find your favorites and explore the multiverse to the fullest.',
    imageUrl: '/pages-images/RestApi.webp',
    imageAlt: 'Rest API Image Page',
    pageUrl: '/home/rest-api',
  },
]

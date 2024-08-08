import { Routes } from '@angular/router'
import { BasketballcounterComponent } from '@component/basketballCounterComponent/basketballcounter.component'
import { PipesComponent } from '@component/pipesComponent/pipes.component'
import { PokemonselectorComponent } from '@component/pokemonSelectorComponent/pokemonselector.component'
import { CharacterListComponent } from '@component/characterListComponent/character-list.component'
import { NotfoundComponent } from '@component/notFoundComponent/notfound.component'
import { LoginComponent } from '@component/loginComponent/login.component'
import { authGuard } from './shared/guards/auth.guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'basketball-counter',
    component: BasketballcounterComponent,
    canActivate: [authGuard],
    title: 'Basket Counter',
  },
  {
    path: 'pokemon-selector',
    component: PokemonselectorComponent,
    canActivate: [authGuard],
    title: 'Pokemon Selector',
  },
  {
    path: 'pipes',
    component: PipesComponent,
    canActivate: [authGuard],
    title: 'Pipes',
  },
  {
    path: 'rest-api',
    component: CharacterListComponent,
    canActivate: [authGuard],
    title: 'Character List',
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found',
  },
]

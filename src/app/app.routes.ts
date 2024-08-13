import { Routes } from '@angular/router'
import { authGuard } from '@guards/auth.guard'
import { loginGuard } from '@guards/login.guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./shared/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    canActivate: [loginGuard],
    title: 'Login',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./shared/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'basketball-counter',
        loadComponent: () =>
          import(
            './shared/components/basketball-counter/basketballcounter.component'
          ).then((m) => m.BasketballcounterComponent),
        title: 'Basket Counter',
        canActivate: [authGuard],
      },
      {
        path: 'pokemon-selector',
        loadComponent: () =>
          import(
            './shared/components/pokemon-selector/pokemonselector.component'
          ).then((m) => m.PokemonselectorComponent),
        title: 'Pokemon Selector',
        canActivate: [authGuard],
      },
      {
        path: 'pipes',
        loadComponent: () =>
          import('./shared/components/pipes/pipes.component').then(
            (m) => m.PipesComponent
          ),
        title: 'Pipes',
        canActivate: [authGuard],
      },
      {
        path: 'rest-api',
        loadComponent: () =>
          import(
            './shared/components/character-list/character-list.component'
          ).then((m) => m.CharacterListComponent),
        title: 'Character List',
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
    title: 'Not Found',
  },
]

import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BasketballcounterComponent } from './shared/components/basketballcounter/basketballcounter.component'
import { CommonModule } from '@angular/common'
import { PokemonselectorComponent } from './shared/components/pokemonselector/pokemonselector.component'
import { PipesComponent } from './shared/components/pipes/pipes.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BasketballcounterComponent,
    PokemonselectorComponent,
    PipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GCalderonWeek1'
}

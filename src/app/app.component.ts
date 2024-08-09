import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { BasketballcounterComponent } from '@component/basketball-counter/basketballcounter.component'
import { PokemonselectorComponent } from '@component/pokemon-selector/pokemonselector.component'
import { PipesComponent } from '@component/pipes/pipes.component'

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

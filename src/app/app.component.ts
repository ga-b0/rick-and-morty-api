import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasketballcounterComponent } from './shared/components/basketballcounter/basketballcounter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasketballcounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GCalderonWeek1';
}

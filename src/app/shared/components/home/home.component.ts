import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarLayoutComponent } from '@component/navbar-layout/navbar-layout.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavbarLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

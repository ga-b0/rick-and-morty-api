import { Component, inject, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarLayoutComponent } from '@component/navbar-layout/navbar-layout.component'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavbarLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  route = inject(ActivatedRoute)
  router = inject(Router)
  homePage = signal('')
}

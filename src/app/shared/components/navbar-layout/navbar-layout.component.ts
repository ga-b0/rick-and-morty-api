import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-layout.component.html',
  styleUrl: './navbar-layout.component.css',
})
export class NavbarLayoutComponent {
  username = ''
  router = inject(Router)

  constructor() {
    this.getUser()
  }

  getUser(): void {
    this.username = window.localStorage.getItem('username') || ''
  }

  logout(): void {
    window.localStorage.clear()
    this.router.navigate(['/login'])
  }
}

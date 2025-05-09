import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { RoutesPages } from '@enums/routes-pages.enum'

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [],
  templateUrl: './navbar-layout.component.html',
  styleUrl: './navbar-layout.component.css',
})
export class NavbarLayoutComponent {
  username = ''
  router = inject(Router)
  routes = { ...RoutesPages }

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

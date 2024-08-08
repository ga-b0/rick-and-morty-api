import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogged = false
  username = ''

  isAdmin(): boolean {
    if (
      window.localStorage.getItem('username') !== null &&
      window.localStorage.getItem('loggedin') !== null
    ) {
      return true
    }
    return false
  }
}

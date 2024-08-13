import { inject } from '@angular/core'
import { CanActivateFn } from '@angular/router'
import { AuthenticationService } from '@services/auth-services/authentication.service'
import { Router } from '@angular/router'

export const authGuard: CanActivateFn = () => {
  return inject(AuthenticationService).isAdmin()
    ? true
    : inject(Router).createUrlTree(['/login'])
}

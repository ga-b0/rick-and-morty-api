import { CanActivateFn } from '@angular/router'
import { AuthenticationService } from '@services/authentication.service'
import { inject } from '@angular/core'
import { Router } from '@angular/router'

export const loginGuard: CanActivateFn = () => {
  return inject(AuthenticationService).isAdmin()
    ? inject(Router).createUrlTree(['/home'])
    : true
}

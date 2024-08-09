import { Component, inject } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginFields } from '@interfaces/login-fields'
import { userCredentials } from '@fakedata/credentials-user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup<LoginFields>({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  })
  router = inject(Router)

  submitSesion(): void {
    if (
      this.loginForm.value.username === userCredentials.username &&
      this.loginForm.value.password === userCredentials.password
    ) {
      window.localStorage.setItem('username', this.loginForm.value.username)
      window.localStorage.setItem('loggedin', 'true')
      this.router.navigate(['/home'])
    }
  }
}

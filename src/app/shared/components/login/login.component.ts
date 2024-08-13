import { Component, inject } from '@angular/core'
import { AbstractControl, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { LoginFields } from '@interfaces/login/login-fields'
import { userCredentials } from '@fakedata/credentials-user.data'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formSubmitted = false
  message = ''
  loggin = false
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
    if (!this.loginForm.valid) {
      this.formSubmitted = true
      return
    }

    if (
      this.loginForm.value.username === userCredentials.username &&
      this.loginForm.value.password === userCredentials.password
    ) {
      window.localStorage.setItem('username', this.loginForm.value.username)
      window.localStorage.setItem('loggedin', 'true')
      this.message = 'Successful login'
      this.loggin = true
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 1000)
    } else {
      this.loggin = false
      this.message = 'Incorrect username or password'
      setTimeout(() => {
        this.message = ''
      }, 4000)
    }
  }

  get username(): AbstractControl | null {
    return this.loginForm.get('username')
  }
}

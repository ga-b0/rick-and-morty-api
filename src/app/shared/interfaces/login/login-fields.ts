import { FormControl } from '@angular/forms'

export interface LoginFields {
  username: FormControl<string>
  password: FormControl<string>
}

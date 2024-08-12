import { FormControl } from '@angular/forms'

export interface FilteredResults {
  name: FormControl<string | null>
  specie: FormControl<string | null>
  type: FormControl<string | null>
  status: FormControl<string | null>
  gender: FormControl<string | null>
}

import { Component } from '@angular/core'
import { PagesInfo } from '@fakedata/pages-info.data'
import { PageInfo } from '@interfaces/page-info'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  pagesInfo: PageInfo[] = [...PagesInfo]
}

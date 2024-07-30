import { Component } from '@angular/core';
import { PercentPipe, DecimalPipe, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [PercentPipe, DecimalPipe, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  percentage = 0.123456;
  date = new Date(2024, 6, 29);
  time = new Date(2024, 6, 2, 9 ,6 ,3);
  //time = new Date("July 29, 2024 09:06:03")
  decimal = 12.34;
  poundSterling = 12.34;
  currency = 12.34;

}

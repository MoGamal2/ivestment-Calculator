import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './investment-input.model';
import { IvestmentResultsComponent } from './ivestment-results/ivestment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, IvestmentResultsComponent],
})
export class AppComponent {
  resultsData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);
}

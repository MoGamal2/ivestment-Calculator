import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-ivestment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './ivestment-results.component.html',
  styleUrl: './ivestment-results.component.css',
})
export class IvestmentResultsComponent {
  private InvestmentService = inject(InvestmentService);

  results = computed(() => this.InvestmentService.resultsData());
}

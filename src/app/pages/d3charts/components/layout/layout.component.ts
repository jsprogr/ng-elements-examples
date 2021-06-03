import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { MarketUpdaterService } from '../../services/market-updater.service';
import { MarketPrice } from '../../types/market-updates.interface';
@Component({
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent {
  marketStatus: MarketPrice[];
  marketStatusToPlot: MarketPrice[];

  set MarketStatus(status: MarketPrice[]) {
    this.marketStatus = status;
    this.marketStatusToPlot = this.marketStatus.slice(0, 20);
  }

  constructor(private marketStatusSvc: MarketUpdaterService) {
    this.marketStatusSvc.getInitialMarketStatus().subscribe(prices => {
      this.MarketStatus = prices;

      let marketUpdateObservable = this.marketStatusSvc.getUpdates();   // 1
      marketUpdateObservable.subscribe((latestStatus: MarketPrice) => { // 2
        this.MarketStatus = [latestStatus].concat(this.marketStatus);   // 3
      });
    });
  }
}

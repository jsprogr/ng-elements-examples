import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from '../../data/products';

@Component({
  templateUrl: "./line-area-charts.component.html",
  styleUrls: ["./line-area-charts.component.scss"],
})
export class LineAreaChartsComponent implements OnInit {
  productSalesMulti: any[];
  view: any[] = [700, 370];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Products";
  yAxisLabel: string = "Sales";
  timeline: boolean = true;

  colorScheme = {
    domain: ["#704FC4", "#4B852C", "#B67A3D", "#5B6FC8", "#25706F"],
  };

  constructor() {
    Object.assign(this, { productSalesMulti });
  }

  onSelect(event) {
    console.log(event);
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}
}

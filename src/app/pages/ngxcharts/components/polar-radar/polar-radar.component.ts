import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from "../../data/products";

@Component({
  templateUrl: "./polar-radar.component.html",
  styleUrls: ["./polar-radar.component.scss"],
})
export class PolarRadarComponent implements OnInit {
  productSalesMulti: any[];
  view: any[] = [700, 300];

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

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };

  constructor() {
    Object.assign(this, { productSalesMulti });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {}
}

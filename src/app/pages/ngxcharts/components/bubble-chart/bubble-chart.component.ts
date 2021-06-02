import { Component, OnInit } from '@angular/core';
import { bubbleData } from "../../data/products";

@Component({
  templateUrl: "./bubble-chart.component.html",
  styleUrls: ["./bubble-chart.component.scss"],
})
export class BubbleChartComponent implements OnInit {
  bubbleData: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Sales";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Months";
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  constructor() {
    this.bubbleData = bubbleData;
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}
}

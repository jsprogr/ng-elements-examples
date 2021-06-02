import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: "./linear-gauge-chart.component.html",
  styleUrls: ["./linear-gauge-chart.component.scss"],
})
export class LinearGaugeChartComponent implements OnInit {
  single: any[];
  view: any[] = [400, 400];
  colorScheme = {
    domain: ["#aae3f5"],
  };
  value: number = 43;
  previousValue: number = 58;
  units: string = "Subscribers per month";

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {}
}

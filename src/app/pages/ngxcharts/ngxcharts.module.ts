import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxchartsRoutingModule } from './ngxcharts-routing.module';
import { ChartsComponent } from './components/charts/charts.component';
import { BarChartsComponent } from './components/bar-charts/bar-charts.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { LineAreaChartsComponent } from './components/line-area-charts/line-area-charts.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { GaugeChartComponent } from './components/gauge-chart/gauge-chart.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { LinearGaugeChartComponent } from './components/linear-gauge-chart/linear-gauge-chart.component';

@NgModule({
  declarations: [ChartsComponent, BarChartsComponent, LineAreaChartsComponent, BubbleChartComponent, GaugeChartComponent, HeatMapComponent, LinearGaugeChartComponent],
  imports: [
    CommonModule,
    NgxchartsRoutingModule,
    NgxChartsModule,

  ],
})
export class NgxchartsModule {}

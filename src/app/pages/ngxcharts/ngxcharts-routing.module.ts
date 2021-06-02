import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartsComponent } from './components/bar-charts/bar-charts.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { ChartsComponent } from './components/charts/charts.component';
import { GaugeChartComponent } from './components/gauge-chart/gauge-chart.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { LineAreaChartsComponent } from './components/line-area-charts/line-area-charts.component';
import { LinearGaugeChartComponent } from './components/linear-gauge-chart/linear-gauge-chart.component';

const routes: Routes = [
  { path: "", component: ChartsComponent },
  { path: "bars", component: BarChartsComponent },
  { path: "line-area", component: LineAreaChartsComponent },
  { path: "bubble", component: BubbleChartComponent },
  { path: "gauge", component: GaugeChartComponent },
  { path: "hitmap", component: HeatMapComponent },
  { path: "linear-gauge", component: LinearGaugeChartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxchartsRoutingModule { }

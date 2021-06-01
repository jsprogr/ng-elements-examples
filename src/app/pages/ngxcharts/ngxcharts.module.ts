import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxchartsRoutingModule } from './ngxcharts-routing.module';
import { ChartsComponent } from './components/charts/charts.component';
import { BarChartsComponent } from './components/bar-charts/bar-charts.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [ChartsComponent, BarChartsComponent],
  imports: [
    CommonModule,
    NgxchartsRoutingModule,
    NgxChartsModule,

  ],
})
export class NgxchartsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3chartsRoutingModule } from './d3charts-routing.module';
import { D3chartComponent } from './components/d3chart/d3chart.component';


@NgModule({
  declarations: [D3chartComponent],
  imports: [
    CommonModule,
    D3chartsRoutingModule
  ]
})
export class D3chartsModule { }

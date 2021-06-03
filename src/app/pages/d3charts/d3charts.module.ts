import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3chartsRoutingModule } from './d3charts-routing.module';
import { D3chartComponent } from './components/d3chart/d3chart.component';
import { D3rtComponent } from './components/d3rt/d3rt.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MarketUpdaterService } from './services/market-updater.service';
import { GraphLayoutComponent } from './components/graph-layout/graph-layout.component';
import { D3graphComponent } from './components/d3graph/d3graph.component';
import { LinkVisualComponent } from './components/helper/visuals/link-visual/link-visual.component';
import { NodeVisualComponent } from './components/helper/visuals/node-visual/node-visual.component';


@NgModule({
  declarations: [D3chartComponent, D3rtComponent, LayoutComponent, GraphLayoutComponent, D3graphComponent, LinkVisualComponent, NodeVisualComponent],
  imports: [CommonModule, D3chartsRoutingModule],
  providers: [MarketUpdaterService],
})
export class D3chartsModule {}

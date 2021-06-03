import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3chartComponent } from './components/d3chart/d3chart.component';
import { GraphLayoutComponent } from './components/graph-layout/graph-layout.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: "", component: LayoutComponent },
  { path: "graph", component: GraphLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3chartsRoutingModule { }

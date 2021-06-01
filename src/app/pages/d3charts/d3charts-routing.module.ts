import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3chartComponent } from './components/d3chart/d3chart.component';

const routes: Routes = [
  { path: "", component: D3chartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3chartsRoutingModule { }

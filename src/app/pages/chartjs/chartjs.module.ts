import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinesComponent } from './components/lines/lines.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherExamplesComponent } from './components/other-examples/other-examples.component';
import { ChartFilterExampleComponent } from './components/chart-filter-example/chart-filter-example.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", redirectTo: "/chartjs/line", pathMatch: "full" },
  { path: "line", component: LinesComponent },
  { path: "other", component: OtherExamplesComponent },
  { path: "chart-filter-example", component: ChartFilterExampleComponent },
];

@NgModule({
  declarations: [
    LinesComponent,
    OtherExamplesComponent,
    ChartFilterExampleComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class ChartjsModule {}

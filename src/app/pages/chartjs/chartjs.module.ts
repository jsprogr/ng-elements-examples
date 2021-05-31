import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinesComponent } from './components/lines/lines.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/chartjs/line", pathMatch: "full" },
  {
    path: "line",
    component: LinesComponent,
  },
];

@NgModule({
  declarations: [LinesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChartjsModule {}

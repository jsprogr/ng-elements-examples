import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinesComponent } from './components/lines/lines.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherExamplesComponent } from './components/other-examples/other-examples.component';

const routes: Routes = [
  { path: "", redirectTo: "/chartjs/line", pathMatch: "full" },
  { path: "line", component: LinesComponent },
  { path: "other", component: OtherExamplesComponent },
];

@NgModule({
  declarations: [LinesComponent, OtherExamplesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChartjsModule {}

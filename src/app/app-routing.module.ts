import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "ngxcharts",
    loadChildren: () =>
      import("./pages/ngxcharts/ngxcharts.module").then(m => m.NgxchartsModule),
  },
  {
    path: "chartjs",
    loadChildren: () =>
      import("./pages/chartjs/chartjs.module").then(m => m.ChartjsModule),
  },
  {
    path: "leafletmaps",
    loadChildren: () =>
      import("./pages/leafletmaps/leafletmaps.module").then(
        m => m.LeafletmapsModule
      ),
  },
  {
    path: "d3charts",
    loadChildren: () =>
      import("./pages/d3charts/d3charts.module").then(m => m.D3chartsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

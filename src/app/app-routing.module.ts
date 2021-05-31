import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from "@angular/router";
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
  { path: 'ng-animations', loadChildren: () => import('./pages/ng-animations/ng-animations.module').then(m => m.NgAnimationsModule) },
  { path: 'webrtc', loadChildren: () => import('./pages/webrtc-av/webrtc-av.module').then(m => m.WebrtcAvModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

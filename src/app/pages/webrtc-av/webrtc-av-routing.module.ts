import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  { path: "", redirectTo: "/webrtc/av", pathMatch: "full" },
  { path: 'av', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebrtcAvRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseMapComponent } from './components/base-map/base-map.component';


const routes: Routes = [{ path: '', component: BaseMapComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeafletmapsRoutingModule { }

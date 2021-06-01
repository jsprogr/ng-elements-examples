import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgAnimationsComponent } from './ng-animations.component';

const routes: Routes = [{ path: '', component: NgAnimationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgAnimationsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletmapsRoutingModule } from './leafletmaps-routing.module';
import { BaseMapComponent } from './components/base-map/base-map.component';


@NgModule({
  declarations: [BaseMapComponent],
  imports: [
    CommonModule,
    LeafletmapsRoutingModule
  ]
})
export class LeafletmapsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgAnimationsRoutingModule } from './ng-animations-routing.module';
import { NgAnimationsComponent } from './ng-animations.component';


@NgModule({
  declarations: [NgAnimationsComponent],
  imports: [
    CommonModule,
    NgAnimationsRoutingModule
  ]
})
export class NgAnimationsModule { }

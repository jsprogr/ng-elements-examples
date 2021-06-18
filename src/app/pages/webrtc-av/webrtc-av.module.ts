import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WebrtcAvRoutingModule } from "./webrtc-av-routing.module";
import {
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
} from "@angular/material";
import { LayoutComponent } from './components/layout/layout.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [LayoutComponent, ChatComponent],
  imports: [
    CommonModule,
    WebrtcAvRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class WebrtcAvModule {}


/* TODO: add text chat, devices selection, data transfer */

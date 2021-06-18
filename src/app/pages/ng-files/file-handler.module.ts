import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileHandlerRoutingModule } from './file-handler-routing.module';
import { FileHandlerComponent } from './file-handler.component';
import { VideoConverterComponent } from './components/video-converter/video-converter.component';


@NgModule({
  declarations: [FileHandlerComponent, VideoConverterComponent],
  imports: [
    CommonModule,
    FileHandlerRoutingModule
  ]
})
export class FileHandlerModule { }

/* TODO: add service to connect with  /file-handler-server.js*/

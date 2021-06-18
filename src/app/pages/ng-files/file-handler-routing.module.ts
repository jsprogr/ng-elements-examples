import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileHandlerComponent } from './file-handler.component';

const routes: Routes = [{ path: '', component: FileHandlerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileHandlerRoutingModule { }

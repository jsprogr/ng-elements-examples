import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartjsModule } from './pages/chartjs/chartjs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartjsModule,
    BrowserAnimationsModule,
    // NgxchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

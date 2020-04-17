import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ModifyDashDirective } from './modify-dash.directive';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    ModifyDashDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

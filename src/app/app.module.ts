import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgxTawkComponent } from './app.component';


@NgModule({
  declarations: [
    NgxTawkComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ NgxTawkComponent ],
  providers: [],
  bootstrap: [NgxTawkComponent]
})
export class AppModule { }

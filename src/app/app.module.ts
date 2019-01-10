import { NgModule } from '@angular/core';


import { NgxTawkComponent } from './app.component';


@NgModule({
  declarations: [
    NgxTawkComponent
  ],
  exports: [ NgxTawkComponent ],
  providers: [],
  bootstrap: [ NgxTawkComponent ]
})
export class AppModule { }

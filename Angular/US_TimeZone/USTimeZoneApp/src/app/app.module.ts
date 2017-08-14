import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsTimeComponentComponent } from './us-time-component/us-time-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UsTimeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

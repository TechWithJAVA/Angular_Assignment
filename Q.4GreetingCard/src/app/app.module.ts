import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardpipePipe } from './cardpipe.pipe';
import { GreetingcardComponent } from './greetingcard/greetingcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardpipePipe,
    GreetingcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

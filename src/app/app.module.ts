import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

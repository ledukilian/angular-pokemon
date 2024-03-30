import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BorderCardDirective } from "./directives/border-card/border-card.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BorderCardDirective,
    BorderCardDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

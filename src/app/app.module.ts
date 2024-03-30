import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BorderCardDirective} from "./border-card.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BorderCardDirective
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

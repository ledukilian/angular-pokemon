import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BorderCardDirective } from "./directives/border-card/border-card.directive";
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color/pokemon-type-color.pipe";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BorderCardDirective,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BorderCardDirective } from "./directives/border-card/border-card.directive";
import { PokemonTypeColorPipe } from "./pipes/pokemon-type-color/pokemon-type-color.pipe";
import { ListPokemonComponent } from './components/pages/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/pages/detail-pokemon/detail-pokemon.component';
import { NgOptimizedImage } from "@angular/common";
import { NotFoundComponent } from './components/pages/errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BorderCardDirective,
    BorderCardDirective,
    PokemonTypeColorPipe,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

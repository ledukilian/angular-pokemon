import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonModule } from "./modules/pokemon/pokemon.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/pages/errors/not-found/not-found.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./modules/pokemon/services/in-memory-data/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

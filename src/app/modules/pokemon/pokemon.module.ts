import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from "./components/pages/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./components/pages/detail-pokemon/detail-pokemon.component";
import { RouterModule, Routes } from "@angular/router";
import { BorderCardDirective } from "./directives/border-card/border-card.directive";
import { PokemonTypeColorPipe } from "./pipes/pokemon-type-color/pokemon-type-color.pipe";
import { PokemonTypeEmojiPipe } from "./pipes/pokemon-type-emoji/pokemon-type-emoji.pipe";
import { PokemonService } from "./services/pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from './components/forms/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/pages/edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/modifier/:id', component: EditPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent }
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonTypeEmojiPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }

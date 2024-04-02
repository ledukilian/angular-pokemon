import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from "./components/pages/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./components/pages/detail-pokemon/detail-pokemon.component";
import { NotFoundComponent } from "./components/pages/errors/not-found/not-found.component";

const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

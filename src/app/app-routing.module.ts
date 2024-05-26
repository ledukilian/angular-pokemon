import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./pages/errors/not-found/not-found.component";
import {LoginComponent} from "./auth/pages/login/login.component";
import {ListPokemonComponent} from "./modules/pokemon/components/pages/list-pokemon/list-pokemon.component";
import {AuthGuard} from "./auth/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'connexion', component: LoginComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

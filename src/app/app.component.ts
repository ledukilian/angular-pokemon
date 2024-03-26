import { Component, OnInit } from '@angular/core';
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Pokémon';
  pokemonList: Pokemon[] = POKEMONS;

  constructor() {

  }

  ngOnInit():void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[9]);
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log(`Vous avez choisi : ${pokemon.name}`);
  }
}

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
  pokemonSelected: Pokemon|undefined;

  constructor() {

  }

  ngOnInit():void {
    console.table(this.pokemonList);
    //this.selectPokemon(this.pokemonList[9]);
  }

  selectPokemon(pokemonId: string): void {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    if (pokemon) {
      this.pokemonSelected = pokemon;
    } else {
      console.warn('Pokemon not found');
      this.pokemonSelected = undefined;
    }
  }
}

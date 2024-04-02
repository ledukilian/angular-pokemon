import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "../../../data/mock-pokemon-list";
import {Pokemon} from "../../../models/pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
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

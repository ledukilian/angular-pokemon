import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../../models/pokemon";
import {PokemonService} from "../../../services/pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon|undefined;

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit():void {
    console.table(this.pokemonList);
    this.pokemonList = this.pokemonService.getPokemonList();
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

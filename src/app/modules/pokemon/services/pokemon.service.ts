import {Injectable} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {POKEMONS} from "../data/mock-pokemon-list";

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id === pokemonId);
  }

  getPokemonTypeList(): String[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Électrique',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
      'Sol',
      'Roche',
      'Spectre',
      'Acier',
      'Glace',
      'Dragon'
    ]
  }
}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from "../../data/mock-pokemon-list";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // Simule une base de données à partir du mock de données fourni (voir PokemonService)
  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }

}

import { Injectable } from '@angular/core';
import { POKEMONS } from "../../modules/pokemon/data/mock-pokemon-list";

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db: IDBDatabase;

  constructor() {
    this.openDatabase();
  }

  private openDatabase() {
    const request = window.indexedDB.open('PokemonDB', 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      db.createObjectStore('pokemons', { keyPath: 'id' });
    };

    request.onsuccess = (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
      this.addDataToDB();
    };

    request.onerror = (event) => {
      // @ts-ignore
      console.error("IndexedDB error:", event.target.error);
    };
  }

  private addDataToDB() {
    const transaction = this.db.transaction('pokemons', 'readwrite');
    const pokemonStore = transaction.objectStore('pokemons');

    POKEMONS.forEach((pokemon) => {
      pokemonStore.add(pokemon);
    });

    transaction.oncomplete = () => {
      console.log("Pokemons added to IndexedDB");
    };

    transaction.onerror = (event) => {
      // @ts-ignore
      console.error("Error adding pokemons to IndexedDB:", event.target.error);
    };
  }

}

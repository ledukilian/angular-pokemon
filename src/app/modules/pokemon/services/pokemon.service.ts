import { Injectable } from '@angular/core';
import { Pokemon } from "../models/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable()
export class PokemonService {

  constructor(
    private http: HttpClient
  ) {}

  getPokemonList(): Observable<Pokemon[]> {
    console.warn('patate');
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    console.warn('saucisse');
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<Pokemon>(`api/pokemons/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
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
      'Psy'
    ]
  }
}

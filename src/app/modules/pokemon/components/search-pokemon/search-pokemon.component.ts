import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent {
  // Subject : Flux de recherche dans le temps de l'utilisateur (chaque frappe de touche)
  // Pour visualiser, on cherche Krabby (🦀) avec une petite faute de frappe (c au lieu de a) : {.."k"."kr"."krc".."kr".."kra"...}
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // Opérateur RxJS : On temporise le temps de la saisie (voir exemple avec Krabby ci-dessus) : imaginons que chaque point représente 100ms, il attendra 3 points avant de faire la suite
      debounceTime(300),
      // Opérateur RxJS : Ignorer les éléments similaires à leur prédécesseur
      distinctUntilChanged(),
      // On effectue la recherche : opérateur RxJS pour projeter les valeurs émises par un observable dans un autre observable
      switchMap((term: string) => this.pokemonService.searchPokemonList(term)),

    );
  }

  search(term: string): void {
    // On ajoute le terme de recherche au flux de recherche
    this.searchTerms.next(term);
  }

  goToDetail(id: number): void {
    const link = ['/pokemon', id];
    this.router.navigate(link);
  }

}

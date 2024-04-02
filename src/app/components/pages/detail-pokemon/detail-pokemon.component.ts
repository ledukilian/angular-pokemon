import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {POKEMONS} from "../../../data/mock-pokemon-list";
import {Pokemon} from "../../../models/pokemon";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: number = +this.route.snapshot.paramMap.get('id')!;
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === pokemonId);
    } else {
      console.error("Pokemon not found");
    }

  }

  goBack() {
    window.history.back();
  }
}

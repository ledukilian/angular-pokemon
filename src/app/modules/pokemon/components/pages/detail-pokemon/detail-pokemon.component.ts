import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Pokemon } from "../../../models/pokemon";
import { PokemonService } from "../../../services/pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: number = +this.route.snapshot.paramMap.get('id')!;

    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      console.error("Pokemon not found");
    }

  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  goToEdit(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/modifier', pokemon.id]);
  }
}

import { Component } from '@angular/core';
import {Pokemon} from "../../../models/pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../../services/pokemon.service";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent {

  pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    const pokemonId: number = +this.route.snapshot.paramMap.get('id')!;
    if (!pokemonId) {
      console.error("Pokemon not found");
    }
    this.pokemon = this.pokemonService.getPokemonById(pokemonId);
  }

}

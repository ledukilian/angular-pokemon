import { Component } from '@angular/core';
import {Pokemon} from "../../../models/pokemon";
import {ActivatedRoute, Router} from "@angular/router";
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
    private route: ActivatedRoute,
    private router: Router
  )
  {}

  ngOnInit(): void {
    const pokemonId: number = +this.route.snapshot.paramMap.get('id')!;
    if (!pokemonId) {
      console.error("Pokemon not found");
    }
    this.pokemon = this.pokemonService.getPokemonById(pokemonId);
  }

  goBack(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}

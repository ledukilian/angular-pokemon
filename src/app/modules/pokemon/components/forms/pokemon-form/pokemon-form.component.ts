import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from "../../../services/pokemon.service";
import { Pokemon } from "../../../models/pokemon";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string) {
    return this.pokemon.types.includes(type);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  selectType(event: Event, type: string): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit(): void {
    console.log('Formulaire envoyé');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}

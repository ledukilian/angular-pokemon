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
  isAddForm: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('ajouter');
  }

  hasType(type: string) {
    return this.pokemon.types.includes(type);
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
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
    if (this.isAddForm) {
      // TODO : Redirection vers la page du pokémon ajouté
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => {
          this.router.navigate(['/pokemon', pokemon.id]);
        });
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => {
          this.router.navigate(['/pokemon', this.pokemon.id]);
        });
    }
  }

  updateImage() {
    /*TODO: Améliorer le système de rechargement d'image
    *  Vérifier l'URL, et le bloquer dans l'entité */
    this.pokemon.picture = this.pokemon.picture;
  }
}

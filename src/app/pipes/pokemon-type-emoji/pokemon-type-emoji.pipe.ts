import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeEmoji',
  standalone: true
})
export class PokemonTypeEmojiPipe implements PipeTransform {

  transform(type: string): string {

    let emoji: string;

    // On parcourt tous les types pour afficher la couleur correspondante
    switch (type) {
      case 'Feu':
        emoji = '🔥';
        break;
      case 'Eau':
        emoji = '💧';
        break;
      case 'Plante':
        emoji = '🌱';
        break;
      case 'Insecte':
        emoji = '🐛';
        break;
      case 'Normal':
        emoji = '🐾';
        break;
      case 'Vol':
        emoji = '🕊️';
        break;
      case 'Poison':
        emoji = '☠️';
        break;
      case 'Fée':
        emoji = '✨';
        break;
      case 'Psy':
        emoji = '🌀';
        break;
      case 'Électrique':
        emoji = '⚡';
        break;
      case 'Combat':
        emoji = '👊';
        break;
      default:
        emoji = '🐾';
        break;
    }

    // On combine une classe "puce" avec la couleur pour obtenir le badge de couleur
    return emoji + ' ';

  }
}

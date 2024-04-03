import {Directive, ElementRef, HostListener, Input} from '@angular/core';

// On définit le sélecteur de la directive (avec préfixe pkmn pour la propreté)
@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})

export class BorderCardDirective {

  // Couleur par défaut
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#1976D2';

  // On injecte l'élément du DOM
  constructor(private el: ElementRef) {
    this.setBorderColor(this.initialColor);
  }

  // Permet d'avoir une saisie sur la couleur de la bordure
  @Input('pkmnBorderCard') borderColor: string; // Avec alias: à privilégier, plus propre
  //@Input() pkmnBorderCard: string; // Sans alias

  // Au passage de la souris
  @HostListener('mouseenter') onMouseEnter() {
    // La bordure change de couleur soit par celle choisie soit par celle par défaut
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  // Lorsque la souris quitte la zone
  @HostListener('mouseleave') onMouseLeave() {
    // La bordure reprend sa couleur par défaut (pas de couleur)
    this.setBorderColor(this.initialColor);
  }

  // Permet de définir la couleur de la bordure
  setBorderColor(color: string) {
    // On définit la couleur de la bordure
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}

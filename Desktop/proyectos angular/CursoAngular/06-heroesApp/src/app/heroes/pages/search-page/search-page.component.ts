import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { ServiceNameService } from '../../services/heroes.srevice';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  constructor(private ServiceHeroes: ServiceNameService) { }
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public seelctedHero?: Hero;
  searchHero() {
    const value: string = this.searchInput.value || '';
    this.ServiceHeroes.getHero().subscribe(heroes => {
      this.heroes = heroes.filter(hero => hero.superhero.startsWith(this.capitalize(value)))
    })
  }
  capitalize(str: string) {
    return str.replace(/^[a-z]/, match => match.toUpperCase());
  }
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.seelctedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.seelctedHero = hero
  }
}

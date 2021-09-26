import { Component } from '@angular/core';
import { PokemonList } from './pokemon-list'
import { pokemonData } from './data';
import { PokemonsCompare } from './pokemon-compare';
import data from './api/pokemon.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  // pagination
  totalLength: any;
  page: number = 1;

  pokemonsList: PokemonList[] = data;

  pokemonsToCompare: PokemonsCompare[] = [];

  createPokemon(name: string, types: string, skills: string) {
    const pokemon: PokemonsCompare = {
      name,
      types,
      skills,
    }
    if (this.pokemonsToCompare.length < 2) {
      this.pokemonsToCompare.push(pokemon);
      console.log(this.pokemonsToCompare);
    } else {
      alert('za dużo pokemonów wybranych');
      console.log('za dużo pokemonów wybranych');
    }

  }

  clearCreatePokemon(name: string, types: string, skills: string) {
    const pokemon: PokemonsCompare = {
      name,
      types,
      skills,
    }
    this.pokemonsToCompare.length = 0;
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}

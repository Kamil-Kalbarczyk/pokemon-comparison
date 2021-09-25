import { Component } from '@angular/core';
import { PokemonList } from './pokemon-list'
import { pokemonData } from './data';
import { Pokemon } from './pokemon-compare';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  pokemonsList: PokemonList[] = [

    {
      name: 'Pokemon1',
      types: 'Typ1',
      skills: 'Umiejętności1',
    },
    {
      name: 'Pokemon2',
      types: 'Typ2',
      skills: 'Umiejętności2',
    }
  ];

  pokemons: Pokemon[] = [];

  createPokemon(name: string, types: string, skills: string) {
    const pokemon: Pokemon = {
      name,
      types,
      skills,
    }
    if (this.pokemons.length < 2) {
      this.pokemons.push(pokemon);
      console.log(this.pokemons);
    } else {
      alert('za dużo pokemonów wybranych');
      console.log('za dużo pokemonów wybranych');
    }

  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}

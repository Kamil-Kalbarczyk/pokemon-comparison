import { Component } from '@angular/core';
import { PokemonList } from './pokemon-list'
import { pokemonData } from './data';
import { PokemonsCompare } from './pokemon-compare';
import data from './api/pokemon.json';

// modal
import { ModalService } from './_modal';

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

  // Pokemon to compare function
  pokemonsToCompare: PokemonsCompare[] = [];

  createPokemon(id: number, name: string, types: string, height: number, weight: number, skills: string) {
    const pokemon: PokemonsCompare = {
      id,
      name,
      types,
      height,
      weight,
      skills,
    }
    if (this.pokemonsToCompare.length < 2) {
      this.pokemonsToCompare.push(pokemon);
      console.log(this.pokemonsToCompare);
    } else {
      alert('za dużo pokemonów wybranych');
      console.log('za dużo pokemonów wybranych');
    }
  };

  // Pokemon Details View function
  pokemonDetails: PokemonsCompare[] = [];

  pokemonInfo(id: number, name: string, types: string, height: number, weight: number, skills: string) {
    const pokemon: PokemonsCompare = {
      id,
      name,
      types,
      height,
      weight,
      skills,
    }
    this.pokemonDetails.push(pokemon);
  };

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  };

  // Modal
  constructor(private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // footer
  footer = "© Kamil Kalbarczyk - zadanie rekrutacyjne"
  getDate(): Date {
    return new Date();
  }
}

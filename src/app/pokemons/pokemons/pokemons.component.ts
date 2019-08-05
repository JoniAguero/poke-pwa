import { Component, OnInit } from '@angular/core';
import { PokemonApiService, Pokemon } from 'poke-lib';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon [];

  constructor(private apiPokemonService: PokemonApiService) { }

  ngOnInit() {
    this.apiPokemonService.getAll().subscribe((res) => {
      this.pokemons = res.pokemon;
    });
  }

}

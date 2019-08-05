import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'poke-lib';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
    console.log(this.pokemon);
  }

}

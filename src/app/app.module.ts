import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { PokeLibModule } from 'poke-lib';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';
import { PokemonCardComponent } from './pokemons/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    SharedModule,
    PokeLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


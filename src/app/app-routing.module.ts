import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons/pokemons.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  /* {
    path: '',
    loadChildren: './gnomes-components/gnomes.module#GnomesModule',
    canLoad: [AuthGuardService]
  }, */
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

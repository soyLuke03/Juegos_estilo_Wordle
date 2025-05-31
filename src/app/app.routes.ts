import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LolWordleGameComponent } from './games/league of legends/lol-wordle-game/lol-wordle-game.component';
import { BlackJackComponent } from './games/casino/black-jack/black-jack.component';
import { TragaperrasComponent } from './games/casino/tragaperras/tragaperras.component';
import { CarrerasCaballosComponent } from './games/casino/caballos/caballos.component';
import { FiveNights1Component } from './games/five nights/five-nights-1/five-nights-1.component';
import { GLOBAL_CONSTANTES } from './GLOBAL_CONST';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: `${GLOBAL_CONSTANTES.LOL_WORDLE_SHOW_URL_ROUTE}`,
    component: LolWordleGameComponent,
  },
  {
    path: `${GLOBAL_CONSTANTES.FIVE_NIGHTS_URL_ROUTE}`,
    component: FiveNights1Component,
  },
  {
    path: `${GLOBAL_CONSTANTES.BLACKJACK_URL_ROUTE}`,
    component: BlackJackComponent,
  },
  {
    path: `${GLOBAL_CONSTANTES.TRAGAPERRAS_URL_ROUTE}`,
    component: TragaperrasComponent,
  },
  {
    path: `${GLOBAL_CONSTANTES.CABALLOS_URL_ROUTE}`,
    component: CarrerasCaballosComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

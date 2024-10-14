import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LolWordleGameComponent } from './games/league of legends/lol-wordle-game/lol-wordle-game.component';
import { BlackJackComponent } from './games/casino/black-jack/black-jack.component';
import { TragaperrasComponent } from './games/casino/tragaperras/tragaperras.component';

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
    path: 'home/LOL/play/Encontrar_el_campeon',
    component: LolWordleGameComponent,
  },
  {
    path: 'home/CASINO/play/Black_Jack',
    component: BlackJackComponent,
  },
  {
    path: 'home/CASINO/play/Maquina_tragaperras',
    component: TragaperrasComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

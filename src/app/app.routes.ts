import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './lolworlde/game.component';

export const routes: Routes = [
  { 
      path: '', 
      pathMatch: 'full', 
      component: HomeComponent },
  { 
      path: 'home', 
      pathMatch: 'full', 
      component: HomeComponent },
  { 
      path: 'home/LOL/play/Encontrar_el_campeon', 
      component: GameComponent },
  {
      path: '**',
      redirectTo: 'home',
  }
];
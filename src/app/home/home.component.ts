import { Component } from '@angular/core';
import { LolWordleGameComponent } from '../games/lol-wordle-game/lol-wordle-game';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LolWordleGameComponent, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

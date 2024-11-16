import { Component } from '@angular/core';
import { LolWordleGameComponent } from '../games/league of legends/lol-wordle-game/lol-wordle-game.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

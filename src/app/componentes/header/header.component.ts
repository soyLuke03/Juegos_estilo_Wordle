import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_CONSTANTES } from '../../five-nights-constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  shouldShowHeader(): boolean {
    return this.router.url !== GLOBAL_CONSTANTES.FIVE_NIGHTS_URL;
  }
}
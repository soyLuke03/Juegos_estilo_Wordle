import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PuntosComponent } from '../../../puntos/puntos.component';
import { CasinoService } from '../../../services/casino.service';

@Component({
  selector: 'app-tragaperras',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PuntosComponent],
  templateUrl: './tragaperras.component.html',
  styleUrl: './tragaperras.component.css'
})
export class TragaperrasComponent implements OnInit{

  constructor(private router: Router, private casino: CasinoService) {
  }
  
  puntuacionTotal: number = this.casino.getPuntuacionTotal();

  ngOnInit(): void {

  }


  returnHome(): void {
    this.router.navigate(['/home']);
  }
  
}

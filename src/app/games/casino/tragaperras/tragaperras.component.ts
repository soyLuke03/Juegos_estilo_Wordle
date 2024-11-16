import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PuntosComponent } from '../../../componentes/puntos/puntos.component';
import { CasinoService } from '../../../services/casino.service';

@Component({
  selector: 'app-tragaperras',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PuntosComponent],
  templateUrl: './tragaperras.component.html',
  styleUrl: './tragaperras.component.css'
})
export class TragaperrasComponent implements OnInit {
  constructor(private router: Router, private casino: CasinoService) {}

  tragaperras: string[][] = Array.from({ length: 5 }, () => Array(5).fill('')); // Initialize with 5 rows
  puntuacionTotal: number = this.casino.getPuntuacionTotal();
  spinState: string = 'inactive';

  ngOnInit(): void {
    this.initTragaperras();
  }

  initTragaperras(): void {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.tragaperras = Array.from({ length: 5 }, () => Array(5).fill(''));
  
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        this.tragaperras[i][j] = String.fromCharCode(randomLetter.charCodeAt(0) + i);
      }
    }
  }

  girarTragaperras(): void {
    this.spinState = 'active';
    const numShifts = Math.floor(Math.random() * 4) + 1; // Randomly select 1 to 4 shifts
    let shiftCount = 0;
  
    const shiftLetters = () => {
      for (let i = 0; i < 5; i++) {
        const newRow = [];
        for (let j = 0; j < 5; j++) {
          const newIndex = (j + 1) % 5; // Shift down by one position, wrapping around to the start of the row
          newRow.push(this.tragaperras[i][newIndex]);
        }
        this.tragaperras[i] = newRow;
      }
      shiftCount++;
      if (shiftCount < numShifts) {
        setTimeout(shiftLetters, 700); // Repeat the shift after 700ms
      } else {
        this.spinState = 'inactive'; // Reset spinState after all shifts
      }
    };
  
    shiftLetters(); // Start the shifting process
  }
  
  generateRandomLetter(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return String.fromCharCode(Math.floor(Math.random() * letters.length) + 65);
  }

  verificarGanador(): void {
    // Verificar filas horizontales
    for (let i = 0; i < 5; i++) {
      const fila = this.tragaperras[i];
      if (this.isEqual(fila)) {
        console.log(`Ganador! Fila horizontal ${i + 1}`);
        return;
      }
    }

    // Verificar columnas verticales
    for (let i = 0; i < 5; i++) {
      const columna = this.tragaperras.map(row => row[i]);
      if (this.isEqual(columna)) {
        console.log(`Ganador! Columna vertical ${i + 1}`);
        return;
      }
    }

    // Verificar diagonales
    const diagonal1 = [this.tragaperras[0][0], this.tragaperras[1][1], this.tragaperras[2][2], this.tragaperras[3][3], this.tragaperras[4][4]];
    const diagonal2 = [this.tragaperras[0][4], this.tragaperras[1][3], this.tragaperras[2][2], this.tragaperras[3][1], this.tragaperras[4][0]];
    if (this.isEqual(diagonal1) || this.isEqual(diagonal2)) {
      console.log('Ganador! Diagonal');
      return;
    }
  }

  isEqual(arr: string[]): boolean {
    return arr.every(item => item === arr[0]);
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}
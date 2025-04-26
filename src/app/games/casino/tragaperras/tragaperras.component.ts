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
  styleUrl: './tragaperras.component.css',
})
export class TragaperrasComponent implements OnInit {
  constructor(private router: Router, private casino: CasinoService) {}

  puntuacionTotal: number = this.casino.getPuntuacionTotal();
  spinState: string = 'inactive';
  columna1: string[] = ['A', 'B', 'C', 'D', 'E'];
  columna2: string[] = ['F', 'G', 'H', 'I', 'J'];
  columna3: string[] = ['K', 'L', 'M', 'N', 'Ñ'];
  columna4: string[] = ['O', 'P', 'Q', 'R', 'S'];
  columna5: string[] = ['T', 'U', 'V', 'W', 'X'];

  palancaActivada: boolean = false;

  offsets: number[] = [0, 0, 0, 0, 0];

  ngOnInit(): void {}

  private _spinLetras(columna: number) {
    let arrayRef: string[];

    switch (columna) {
      case 1:
        arrayRef = this.columna1;
        this.girarColumna(arrayRef);
        break;
      case 2:
        arrayRef = this.columna2;
        this.girarColumna(arrayRef);
        break;
      case 3:
        arrayRef = this.columna3;
        this.girarColumna(arrayRef);
        break;
      case 4:
        arrayRef = this.columna4;
        this.girarColumna(arrayRef);
        break;
      case 5:
        arrayRef = this.columna5;
        this.girarColumna(arrayRef);
        break;
      default:
        return;
    }
  }

  private girarColumna(arrayRef: string[]) {
    const numeroDeGiros: number = Math.floor(Math.random() * 10);
    for (let giros: number = 0; giros < numeroDeGiros; giros++) {
      const last = arrayRef.pop();
      arrayRef.unshift(last!);
    }
  }

  girarTragaperras() {
    let columnasTerminadas = 0;
  
    for (let columna = 1; columna <= 5; columna++) {
      this.girarColumnaConAnimacion(columna, () => {
        columnasTerminadas++;
        if (columnasTerminadas === 5) {
          this.palancaActivada = false;
        }
      });
    }
  }
  
  private girarColumnaConAnimacion(columna: number, onFinish: () => void) {
    let girosRestantes = Math.floor(Math.random() * 20) + 10;
  
    const intervalo = setInterval(() => {
      this._spinLetras(columna);
  
      girosRestantes--;
  
      if (girosRestantes <= 0) {
        clearInterval(intervalo);
        onFinish();
      }
    }, 100);
  }

  getTransform(columna: number) {
    const offset = this.offsets[columna - 1];
    return `translateY(${offset}px)`;
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}

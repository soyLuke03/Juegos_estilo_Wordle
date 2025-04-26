import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PuntosComponent } from '../../../componentes/puntos/puntos.component';
import { CasinoService } from '../../../services/casino.service';

@Component({
  selector: 'app-tragaperras',
  standalone: true,
  imports: [CommonModule, FormsModule, PuntosComponent],
  templateUrl: './tragaperras.component.html',
  styleUrl: './tragaperras.component.css',
})
export class TragaperrasComponent implements OnInit {
  constructor(private router: Router, private casino: CasinoService) {}

  puntuacionTotal: number = this.casino.getPuntuacionTotal();
  columna1: string[] = ['☆', '☆', 'A', 'S', 'D'];
  columna2: string[] = ['☆', '☆', 'A', 'S', 'D'];
  columna3: string[] = ['☆', '☆', 'A', 'S', 'D'];
  columna4: string[] = ['☆', '☆', 'A', 'S', 'D'];
  columna5: string[] = ['☆', '☆', 'A', 'S', 'D'];
  // columna1: string[] = ['B','C','Ñ','V','U','G','I','P','R','H','Q','O','T','☆','X','J','A','M','S','Z','☆','Y','F','K','☆','L','E',];
  // columna2: string[] = ['X','F','P','N','T','J','S','M','L','☆','V','A','G','Q','B','Ñ','K','O','Y','H','Z','I','☆','E','C','R','U',];
  // columna3: string[] = ['Q','Ñ','B','A','M','T','☆','G','S','H','Y','K','R','C','X','F','O','I','P','Z','V','E','L','☆','U','J','W',];
  // columna4: string[] = ['J','P','B','M','T','C','O','☆','Ñ','K','Q','V','Z','F','S','L','Y','E','X','R','G','A','☆','W','I','U','H',];
  // columna5: string[] = ['R','Q','B','O','Ñ','V','G','E','X','☆','A','K','S','L','J','Z','F','P','I','M','Y','T','C','U','H','W','☆',];

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
    const numeroDeGiros: number = Math.floor(Math.random() * 10) + 5;
    for (let giros: number = 0; giros < numeroDeGiros; giros++) {
      const last = arrayRef.pop();
      arrayRef.unshift(last!);
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

  private comprobarPartida() {
    const lineaCentral = [
      this.columna1[2],
      this.columna2[2],
      this.columna3[2],
      this.columna4[2],
      this.columna5[2],
    ];

    console.log(lineaCentral);
    if (this.comprobarIguales(lineaCentral)) {
      console.log('¡Línea central ganadora!');
      return true;
    }

    const diagonal1 = [
      this.columna1[0],
      this.columna2[1],
      this.columna3[2],
      this.columna4[3],
      this.columna5[4],
    ];

    const diagonal2 = [
      this.columna1[4],
      this.columna2[3],
      this.columna3[2],
      this.columna4[1],
      this.columna5[0],
    ];

    console.log(diagonal1);
    if (this.comprobarIguales(diagonal1)) {
      console.log('¡Diagonal ganadora! (de arriba a abajo)');
      return true;
    }

    console.log(diagonal2);
    if (this.comprobarIguales(diagonal2)) {
      console.log('¡Diagonal ganadora! (de abajo a arriba)');
      return true;
    }

    return false;
  }

  comprobarIguales(letras: string[]): boolean {
    const letraReferencia = letras.find(letra => letra !== '☆');
  
    if (!letraReferencia) {
      return true;
    }
  
    return letras.every(letra => letra === letraReferencia || letra === '☆');
  }

  getColumnaVisible(columna: number): string[] {
    switch (columna) {
      case 1:
        return this.columna1.slice(0, 5);
      case 2:
        return this.columna2.slice(0, 5);
      case 3:
        return this.columna3.slice(0, 5);
      case 4:
        return this.columna4.slice(0, 5);
      case 5:
        return this.columna5.slice(0, 5);
      default:
        return [];
    }
  }

  girarTragaperras() {
    let columnasTerminadas = 0;

    for (let columna = 1; columna <= 5; columna++) {
      this.girarColumnaConAnimacion(columna, () => {
        columnasTerminadas++;
        if (columnasTerminadas === 5) {
          this.palancaActivada = false;
          if (this.comprobarPartida()) {
            console.log('¡Has ganado!');
          } else {
            console.log('¡Has perdido!');
          }
        }
      });
    }
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}

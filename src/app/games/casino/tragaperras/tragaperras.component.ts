import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PuntosComponent } from '../../../componentes/puntos/puntos.component';
import { CasinoService } from '../../../services/casino.service';
import Swal from 'sweetalert2';

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
  columnas: string[][] = [
    ['B', 'A', 'S', 'A', 'D'],
    ['A', 'B', 'A', 'A', 'D'],
    ['A', 'S', 'B', 'A', 'D'],
    ['A', 'S', 'B', 'A', 'D'],
    ['A', 'B', 'A', 'A', 'D'],
  ];

  palancaActivada: boolean = false;
  timers: number = 15000;

  // Base de puntos que el usuario define
  apuestaJugador: number = 0;
  apuestaValida: boolean = false;
  apuestaConfirmada: boolean = false;

  // Bonificaciones
  MultiplicarBonus: boolean = true;

  BonusXCentro: number = 100;
  BonusXDiagonal: number = 50;

  MultiplicadorXCentro: number = 5;
  MultiplicadorXDiagonal: number = 3;
  MultiplicadorXPremioTotal: number = 25;

  ngOnInit(): void {}

  private spinLetras() {
    for (let i = 0; i < this.columnas.length; i++) {
      this.girarColumna(this.columnas[i]);
    }
  }

  private girarColumna(arrayRef: string[]) {
    const numeroDeGiros: number = Math.floor(Math.random() * 10) + 5;
    for (let giros: number = 0; giros < numeroDeGiros; giros++) {
      const last = arrayRef.pop();
      arrayRef.unshift(last!);
    }
  }

  private girarColumnaConAnimacion(onFinish: () => void) {
    let girosRestantes = Math.floor(Math.random() * 20) + 10;

    const intervalo = setInterval(() => {
      this.spinLetras();

      girosRestantes--;

      if (girosRestantes <= 0) {
        clearInterval(intervalo);
        onFinish();
      }
    }, 100);
  }

  private comprobarPartida() {
    const victorias: {
      tipo: string;
      puntosGanados: number;
      descripcionBonus: string;
    }[] = [];

    let totalPuntos = 0;
    let ganoEnTodasLasFormas = true;
    let multiplicadorAplicado = false; // Variable para saber si se aplicó el multiplicador adicional

    const lineas = [
      { tipo: 'Línea central', indices: [2, 2, 2, 2, 2], bonus: this.BonusXCentro, multiplicador: this.MultiplicadorXCentro },
      { tipo: 'Diagonal principal', indices: [0, 1, 2, 3, 4], bonus: this.BonusXDiagonal, multiplicador: this.MultiplicadorXDiagonal },
      { tipo: 'Diagonal secundaria', indices: [4, 3, 2, 1, 0], bonus: this.BonusXDiagonal, multiplicador: this.MultiplicadorXDiagonal },
    ];

    lineas.forEach(linea => {
      const letras = linea.indices.map((filaIndex, columnaIndex) => this.columnas[columnaIndex][filaIndex]);
      
      if (this.comprobarIguales(letras)) {
        let puntos = this.apuestaJugador;

        if (this.MultiplicarBonus) {
          puntos *= linea.multiplicador;
          victorias.push({
            tipo: linea.tipo,
            puntosGanados: puntos,
            descripcionBonus: `x${linea.multiplicador}`,
          });
        } else {
          puntos += linea.bonus;
          victorias.push({
            tipo: linea.tipo,
            puntosGanados: puntos,
            descripcionBonus: `+${linea.bonus}`,
          });
        }

        totalPuntos += puntos;
      } else {
        ganoEnTodasLasFormas = false;
      }
    });

    if (ganoEnTodasLasFormas) {
      totalPuntos *= this.MultiplicadorXPremioTotal;
      multiplicadorAplicado = true;
    }

    if (victorias.length > 0) {
      this.casino.addPuntos(totalPuntos, true);
      this.puntuacionTotal = this.casino.getPuntuacionTotal();
      this.mostrarMensajeVictoria(victorias, totalPuntos, multiplicadorAplicado);
      return true;
    }
    
    this.mostrarMensajeDerrota();
    return false;
  }

  private mostrarMensajeVictoria(victorias: { tipo: string; puntosGanados: number; descripcionBonus: string }[], totalPuntos: number, multiplicadorAplicado: boolean) {
    Swal.fire({
      html: this.crearMensajeVictoria(victorias, totalPuntos, multiplicadorAplicado),
      timer: this.timers,
      timerProgressBar: true,
      toast: true,
      position: 'top-right'
    });
  }

  private mostrarMensajeDerrota() {
    Swal.fire({
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; text-align: center;">
          <h3 style="color: #d32f2f;">¡Has perdido!</h3>
          <p style="font-size: 1.2em;">¡Sigue intentando, la próxima será tuya!</p>
          <div style="font-size: 2em; margin-top: 10px;">💔</div>
        </div>
      `,
      timer: this.timers,
      timerProgressBar: true,
      toast: true,
      position: 'top-right'
    });
  }

  private crearMensajeVictoria(victorias: { tipo: string; puntosGanados: number; descripcionBonus: string }[], totalPuntos: number, multiplicadorAplicado: boolean) {
    let mensaje = '<div style="font-family: Arial, sans-serif; color: #333;">';
    let totalVictorias = 0;
  
    // Encabezado
    mensaje += `<h3 style="text-align: center; color: #4CAF50;">¡Has ganado!</h3>`;
  
    victorias.forEach(v => {
      mensaje += `
        <div style="margin-bottom: 10px;">
          <strong>Victoria: ${v.tipo}</strong><br>
          <span style="color: #888;">Bonus aplicado: <strong>${v.descripcionBonus}</strong></span><br>
          <span style="font-size: 1.2em; color: #2196F3;">Puntos ganados: ${v.puntosGanados}</span><br>
        </div>
      `;
      totalVictorias += v.puntosGanados;
    });
  
    // Total de victorias
    mensaje += `
      <div style="margin-top: 20px; font-size: 1.3em; font-weight: bold;">
        <span>Total de victorias: ${totalVictorias} puntos</span>
      </div><br>
    `;
  
    // Mensaje de multiplicador
    if (multiplicadorAplicado) {
      const totalConMultiplicador = totalVictorias * this.MultiplicadorXPremioTotal;
      mensaje += `
        <div style="background-color: #FFEB3B; padding: 15px; border-radius: 5px; margin-top: 20px; color: #4CAF50;">
          <strong>¡Multiplicador aplicado!</strong><br>
          <span style="font-size: 1.2em; color: #d32f2f;">Multiplicador total: x${this.MultiplicadorXPremioTotal}</span><br>
          <strong style="font-size: 1.5em;">Total final: ${totalConMultiplicador} puntos</strong>
        </div>
      `;
    } else {
      mensaje += `
        <div style="margin-top: 20px; font-size: 1.2em; font-weight: bold; color: #333;">
          <strong>Total ganado: ${totalVictorias} puntos</strong>
        </div>
      `;
    }
  
    mensaje += '</div>'; // Cerrar el div principal
  
    return mensaje;
  }
  
  private cobrarApuesta() {
    this.casino.addPuntos(this.apuestaJugador, false);
    this.puntuacionTotal = this.casino.getPuntuacionTotal();
  }

  confirmarApuesta() {
    if (this.apuestaValida) {
      console.log('Apuesta confirmada: ' + this.apuestaJugador);
      this.apuestaConfirmada = true;  // Desactivamos el botón después de confirmar
    } else {
      alert('La apuesta debe ser mayor que 0 y no puede superar tus puntos disponibles.');
    }
  }

  validarApuesta() {
    if (this.apuestaJugador < 1 || this.apuestaJugador > this.puntuacionTotal) {
      this.apuestaValida = false;
    } else {
      this.apuestaValida = true;
    }

    if (this.apuestaConfirmada && this.apuestaValida) {
      this.apuestaConfirmada = false;
    }
  }

  comprobarIguales(letras: string[]): boolean {
    const letraReferencia = letras.find(letra => letra !== '☆');

    if (!letraReferencia) {
      return true;
    }

    return letras.every(letra => letra === letraReferencia || letra === '☆');
  }

  getColumnaVisible(columna: number): string[] {
    return this.columnas[columna - 1].slice(0, 5);
  }

  girarTragaperras(e: Event): void {
    if (!this.apuestaValida || this.puntuacionTotal == 0 || this.apuestaJugador > this.puntuacionTotal || !this.apuestaConfirmada) {
      alert('Por favor, confirma una apuesta válida antes de girar.');
      e.preventDefault()
      return;
    }

    
    this.palancaActivada = true;
    this.cobrarApuesta();
    this.girarColumnaConAnimacion(() => {
      this.palancaActivada = false;
      this.comprobarPartida();
    });
  }


  returnHome(): void {
    this.router.navigate(['/home']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PuntosComponent } from '../../../componentes/puntos/puntos.component';
import { CasinoService } from '../../../services/casino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carreras-caballos',
  standalone: true,
  imports: [CommonModule, FormsModule, PuntosComponent],
  templateUrl: './caballos.component.html',
  styleUrls: ['./caballos.component.css'],
})
export class CarrerasCaballosComponent implements OnInit {
  puntuacionTotal: number = 0;
  maxValueProgressBar: number = 1000;
  progressValues: number[] = Array(8).fill(1);
  posiciones: { caballo: number; posicion: number | null }[] = Array(8)
    .fill(null)
    .map((_, i) => ({ caballo: i + 1, posicion: null }));
  posicionActual: number = 1;
  intervalos: any[] = [];
  timerDeCarrera: number = 300;
  carreraActiva: boolean = false;

  // Base de puntos que el usuario define
  apuestaJugador: number = 0;
  apuestaValida: boolean = false;
  apuestaConfirmada: boolean = false;

  // Nueva propiedad para el caballo seleccionado
  caballoSeleccionado: number | null = null;

  constructor(private router: Router, private casino: CasinoService) {}

  ngOnInit(): void {
    this.puntuacionTotal = this.casino.getPuntuacionTotal();
  }

  toggleCarrera(e: Event) {
    if (this.carreraActiva) {
      this.detenerCarrera();
    } else {
      this.iniciarCarrera(e);
    }
  }

  iniciarCarrera(e: Event) {
    if (
      !this.apuestaValida ||
      this.puntuacionTotal == 0 ||
      this.apuestaJugador > this.puntuacionTotal ||
      !this.apuestaConfirmada
    ) {
      alert('Por favor, confirma una apuesta válida antes de girar.');
      e.preventDefault();
      return;
    }

    if (this.caballoSeleccionado === null) {
      alert('Por favor, selecciona un caballo para apostar.');
      e.preventDefault();
      return;
    }

    this.carreraActiva = true;
    this.cobrarApuesta();
    this.posiciones = Array(8)
      .fill(null)
      .map((_, i) => ({ caballo: i + 1, posicion: null }));
    this.posicionActual = 1;

    // Reiniciamos valores a 1 para arrancar
    this.progressValues = Array(8).fill(1);

    // Limpiamos intervalos previos por seguridad
    this.limpiarIntervalos();

    for (let i = 0; i < 8; i++) {
      this.animarBarra(i);
    }
  }

  private cobrarApuesta() {
    this.casino.addPuntos(this.apuestaJugador, false);
    this.puntuacionTotal = this.casino.getPuntuacionTotal();
  }

  asignarPosicion(indice: number) {
    // Sólo asigna si no tiene posición ya
    if (this.posiciones[indice].posicion === null) {
      this.posiciones[indice].posicion = this.posicionActual++;
    }
  }

  animarBarra(indice: number) {
    const intervalo = setInterval(() => {
      if (this.posiciones.every((pos) => pos.posicion !== null)) {
        this.detenerCarrera(true);

        // Check if selected horse position matches horse 1 position
        this.comprobarGanador();
        return;
      }

      if (
        this.progressValues[indice] < this.maxValueProgressBar &&
        this.posiciones[indice].posicion === null
      ) {
        this.progressValues[indice] += this.generarNumeroAleatorio();

        if (this.progressValues[indice] >= this.maxValueProgressBar) {
          this.progressValues[indice] = this.maxValueProgressBar;

          // Aquí delegamos a función que asigna la posición asegurando unicidad
          this.asignarPosicion(indice);
        }
      }
    }, this.timerDeCarrera);

    this.intervalos.push(intervalo);
  }

  private comprobarGanador() {
    if (this.caballoSeleccionado !== null &&
      this.posiciones.find((p) => p.caballo === this.caballoSeleccionado)?.posicion ===
      this.posiciones.find((p) => p.caballo === 1)?.posicion) {
      Swal.fire(
        '¡Felicidades!',
        '¡Has ganado la apuesta con tu caballo seleccionado!',
        'success'
      );
      this.casino.addPuntos(this.apuestaJugador * 5, true);
    } else {
      Swal.fire(
        '¡Carrera terminada!',
        'Revisa las posiciones finales.',
        'success'
      );
    }
  }

  detenerCarrera(limpiezaSolo: boolean = false) {
    this.carreraActiva = false;
    this.limpiarIntervalos();

    if (!limpiezaSolo) {
      this.progressValues = Array(8).fill(1);
      this.posiciones = Array(8)
        .fill(null)
        .map((_, i) => ({ caballo: i + 1, posicion: null }));
      this.posicionActual = 1;
    }
  }

  limpiarIntervalos() {
    this.intervalos.forEach((id) => clearInterval(id));
    this.intervalos = [];
  }

  generarNumeroAleatorio(): number {
    const min = 1;
    const max = 15;
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  confirmarApuesta() {
    if (this.apuestaValida) {
      console.log('Apuesta confirmada: ' + this.apuestaJugador);
      this.apuestaConfirmada = true; // Desactivamos el botón después de confirmar
    } else {
      alert(
        'La apuesta debe ser mayor que 0 y no puede superar tus puntos disponibles.'
      );
    }
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}

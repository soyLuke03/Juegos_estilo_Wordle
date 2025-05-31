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
  posiciones: (number | null)[] = Array(8).fill(null);
  posicionActual: number = 1;
  intervalos: any[] = [];
  timerDeCarrera: number = 300;
  carreraActiva: boolean = false;

  constructor(private router: Router, private casino: CasinoService) {}

  ngOnInit(): void {
    this.puntuacionTotal = this.casino.getPuntuacionTotal();
  }

  toggleCarrera() {
    if (this.carreraActiva) {
      this.detenerCarrera();
    } else {
      this.iniciarCarrera();
    }
  }

  iniciarCarrera() {
    this.carreraActiva = true;
    this.posiciones = Array(8).fill(null);
    this.posicionActual = 1;

    // Reiniciamos valores a 1 para arrancar
    this.progressValues = Array(8).fill(1);

    // Limpiamos intervalos previos por seguridad
    this.limpiarIntervalos();

    for (let i = 0; i < 8; i++) {
      this.animarBarra(i);
    }
  }

  asignarPosicion(indice: number) {
    // Sólo asigna si no tiene posición ya
    if (this.posiciones[indice] === null) {
      this.posiciones[indice] = this.posicionActual++;
    }
  }

  animarBarra(indice: number) {
    const intervalo = setInterval(() => {
      if (this.posiciones.every((pos) => pos !== null)) {
        this.detenerCarrera(true);
        Swal.fire(
          '¡Carrera terminada!',
          'Revisa las posiciones finales.',
          'success'
        );
        return;
      }

      if (
        this.progressValues[indice] < this.maxValueProgressBar &&
        this.posiciones[indice] === null
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

  detenerCarrera(limpiezaSolo: boolean = false) {
    this.carreraActiva = false;
    this.limpiarIntervalos();

    if (!limpiezaSolo) {
      this.progressValues = Array(8).fill(1);
      this.posiciones = Array(8).fill(null);
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

  returnHome(): void {
    this.router.navigate(['/home']);
  }
}

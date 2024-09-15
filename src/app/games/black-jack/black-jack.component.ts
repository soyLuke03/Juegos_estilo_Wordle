import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Dificultad } from '../../models/modelos-blackjack/Dificultad.model';
import { Valor } from '../../models/modelos-blackjack/Valor.enum';
import { Cartas, Carta } from '../../models/modelos-blackjack/Carta.model';
import { Palo } from '../../models/modelos-blackjack/Palo.enum';
import { ImagenCarta } from '../../models/modelos-blackjack/Imagen_Carta.enum';
import { PuntosComponent } from '../../puntos/puntos.component';

@Component({
  selector: 'app-black-jack',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PuntosComponent],
  templateUrl: './black-jack.component.html',
  styleUrl: './black-jack.component.css',
})
export class BlackJackComponent {
  constructor(private router: Router) {}

  puntuacionTotal: number = 0;

  totalPuntosJugadorManoActual: number = 0;
  totalPuntosIAManoActual: number = 0;

  dificultad: Dificultad = Dificultad.Facil;

  cartasJugador: Cartas = [];
  cartasIA: Cartas = [];

  partidaAcabada: boolean = false;

  jugadorJuega() {
    const carta = this.obtenerCarta();
    this.cartasJugador.unshift(carta);
    this.obtenerPuntosJugador(carta);
  }

  iaJuega() {
    let carta: Carta | undefined;

    switch (this.dificultad) {
      case Dificultad.Facil:
        while (this.totalPuntosIAManoActual < 21) {
          if (Math.random() < 0.7) {
            carta = this.obtenerCarta();
            this.cartasIA.unshift(carta);
            this.obtenerPuntosIA(carta);
          } else {
            break;
          }
        }
        break;

      case Dificultad.Medio:
        while (this.totalPuntosIAManoActual < 21) {
          if (Math.random() < 0.75) {
            carta = this.obtenerCarta();
            this.cartasIA.unshift(carta);
            this.obtenerPuntosIA(carta);
          } else {
            break;
          }
        }
        break;

      case Dificultad.Dificil:
        while (this.totalPuntosIAManoActual < 21) {
          if (this.totalPuntosIAManoActual < 13) {
            if (Math.random() < 0.8) {
              carta = this.obtenerCarta();
              this.cartasIA.unshift(carta);
              this.obtenerPuntosIA(carta);
            } else {
              break;
            }
          } else {
            if (Math.random() < 0.5) {
              carta = this.obtenerCarta();
              this.cartasIA.unshift(carta);
              this.obtenerPuntosIA(carta);
            } else {
              break;
            }
          }
        }
        break;

      case Dificultad.Insano:
        // Insane difficulty: always draws cards until its total points are greater than the player's total points and less than or equal to 21
        while (
          this.totalPuntosIAManoActual < this.totalPuntosJugadorManoActual &&
          this.totalPuntosIAManoActual <= 21
        ) {
          carta = this.obtenerCarta();
          const puntosCarta = this.obtenerValor(carta.valor);
          if (this.totalPuntosIAManoActual + puntosCarta > 21) {
            // If adding the new card would make the IA go over 21, don't add it
            continue;
          }
          this.cartasIA.unshift(carta);
          this.obtenerPuntosIA(carta);
        }
        break;

      case Dificultad.Imposible:
        // Impossible difficulty: always wins with exactly 21 points
        while (this.totalPuntosIAManoActual < 21) {
          carta = this.obtenerCarta();
          const puntosCarta = this.obtenerValor(carta.valor);
          if (this.totalPuntosIAManoActual + puntosCarta > 21) {
            // If adding the new card would make the IA go over 21, don't add it
            continue;
          }
          this.cartasIA.unshift(carta);
          this.obtenerPuntosIA(carta);
        }
        break;
    }
    this.comprobarPartida();
  }

  obtenerCarta(): Carta {
    const palos = Object.values(Palo);
    const valores = Object.values(Valor);

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    const claveImagen =
      `${paloAleatorio}${valorAleatorio}` as keyof typeof ImagenCarta;
    const imagenAleatoria = ImagenCarta[claveImagen];

    const carta: Carta = {
      valor: valorAleatorio,
      palo: paloAleatorio,
      imagen: imagenAleatoria,
    };

    return carta;
  }

  comprobarPartida() {
    if (
      this.totalPuntosIAManoActual > 21 &&
      this.totalPuntosJugadorManoActual > 21
    ) {
      alert('empate');
      this.obtenerPuntos(0);

    } else if (this.totalPuntosJugadorManoActual > 21) {
      alert('jugador pierde');
      this.obtenerPuntos(-1);
      
    } else if (this.totalPuntosIAManoActual > 21) {
      alert('jugador gana');
      this.obtenerPuntos(1);

    } else if (
      this.totalPuntosIAManoActual == this.totalPuntosJugadorManoActual &&
      this.totalPuntosIAManoActual < 21
    ) {
      alert('empate');
      this.obtenerPuntos(0);

    } else if (
      this.totalPuntosIAManoActual > this.totalPuntosJugadorManoActual
    ) {
      alert('jugador pierde');
      this.obtenerPuntos(-1);

    } else if (
      this.totalPuntosIAManoActual < this.totalPuntosJugadorManoActual
    ) {
      alert('jugador gana');
      this.obtenerPuntos(1);

    } else if (
      this.totalPuntosIAManoActual == this.totalPuntosJugadorManoActual
    ) {
      if (this.cartasIA.length > this.cartasJugador.length) {
        alert('jugador gana');
        this.obtenerPuntos(1);

      } else {
        alert('jugador pierde');
        this.obtenerPuntos(-1);
      }
    }

    this.partidaAcabada = true;
  }

  obtenerPuntos(jugadorGana: number) {
    switch (this.dificultad) {
      case Dificultad.Facil:
        if (jugadorGana == 1) {
          this.puntuacionTotal += 100;
        } else if (jugadorGana == 0) {
          this.puntuacionTotal += 50;
        } else {
          this.puntuacionTotal -= 50;
        }
        break;

      case Dificultad.Medio:
        if (jugadorGana == 1) {
          this.puntuacionTotal += 200;
        } else if (jugadorGana == 0) {
          this.puntuacionTotal += 70;
        } else {
          this.puntuacionTotal -= 80;
        }
        break;

      case Dificultad.Dificil:
        if (jugadorGana == 1) {
          this.puntuacionTotal += 400;
        } else if (jugadorGana == 0) {
          this.puntuacionTotal += 100;
        } else {
          this.puntuacionTotal -= 150;
        }
        break;

      case Dificultad.Insano:
        if (jugadorGana == 1) {
          this.puntuacionTotal += 5000;
        } else if (jugadorGana == 0) {
          this.puntuacionTotal += 250;
        } else {
          this.puntuacionTotal -= 500;
        }
        break;

      case Dificultad.Imposible:
        if (jugadorGana == 1) {
          this.puntuacionTotal += 25000;
        } else if (jugadorGana == 0) {
          this.puntuacionTotal += 100;
        } else {
          this.puntuacionTotal -= 5000;
        }
        break;
    }
  }

  reiniciarPartida() {
    this.partidaAcabada = false;
    this.totalPuntosIAManoActual = 0;
    this.totalPuntosJugadorManoActual = 0;
    this.cartasIA = [];
    this.cartasJugador = [];
  }

  obtenerValor(valor: Valor): number {
    switch (valor) {
      case Valor.Jota:
      case Valor.Reina:
      case Valor.Rey:
        return 10; // Las cartas de figuras valen 10
      case Valor.As:
        return 11; // El As puede valer 1 o 11
      default:
        return parseInt(valor); // Las cartas numéricas valen su número
    }
  }

  obtenerPuntosJugador(carta: Carta) {
    this.totalPuntosJugadorManoActual += this.obtenerValor(carta.valor);
  }

  obtenerPuntosIA(carta: Carta) {
    this.totalPuntosIAManoActual += this.obtenerValor(carta.valor);
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }

  guardarPuntosEnCookies(): void {
    const fechaExpiracion = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 días
    const puntuacionCodificada = this.encodePuntuacionTotalValue(this.puntuacionTotal);
    document.cookie = `blackjack-puntos=${puntuacionCodificada}; expires=${fechaExpiracion.toUTCString()}; path=/`;
  }
  
  recogerPuntuacionCookies(): void {
    const cookies = document.cookie.split(';');
  
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
  
      if (name.trim() === 'blackjack-puntos') {
        const puntuacionDescodificada = this.decodePuntuacionTotalValue(value);
        this.puntuacionTotal = puntuacionDescodificada;
        break;
      }
    }
  }

  /**
   * DEV MODE
   */

    encodePuntuacionTotalValue(value: number): string {
      let encodedValue = btoa(String(value));
      encodedValue = btoa(encodedValue);
      encodedValue = btoa(encodedValue);
      return encodedValue;
    }
    
    decodePuntuacionTotalValue(value: string): number {
      let decodedValue = atob(value);
      decodedValue = atob(decodedValue);
      decodedValue = atob(decodedValue);
      return parseInt(decodedValue, 10);
    }
}

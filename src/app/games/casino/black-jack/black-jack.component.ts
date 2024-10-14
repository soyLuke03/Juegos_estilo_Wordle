import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cartas, Carta } from '../../../models/modelos-blackjack/Carta.model';
import { Dificultad } from '../../../models/modelos-blackjack/Dificultad.model';
import { ImagenCarta } from '../../../models/modelos-blackjack/Imagen_Carta.enum';
import { Palo } from '../../../models/modelos-blackjack/Palo.enum';
import { Valor } from '../../../models/modelos-blackjack/Valor.enum';
import { PuntosComponent } from '../../../puntos/puntos.component';
import { CasinoService } from '../../../services/casino.service';

@Component({
  selector: 'app-black-jack',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PuntosComponent],
  templateUrl: './black-jack.component.html',
  styleUrl: './black-jack.component.css',
})
export class BlackJackComponent implements OnInit{
  constructor(private router: Router, private casino: CasinoService) {
  }

  puntuacionTotal: number = this.casino.getPuntuacionTotal();

  ngOnInit(): void {
  }

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
        do {
          if (Math.random() < 0.8) {
            carta = this.obtenerCarta();
            this.cartasIA.unshift(carta);
            this.obtenerPuntosIA(carta);
          } else {
            console.log("IA PASA")
            break;
          }
        } while (
          this.totalPuntosIAManoActual < 21 ||
          this.totalPuntosIAManoActual == 0
        );
        break;

      case Dificultad.Medio:
        do {
          if (Math.random() < 0.85) {
            carta = this.obtenerCarta();
            this.cartasIA.unshift(carta);
            this.obtenerPuntosIA(carta);
          } else {
            break;
          }
        } while (
          this.totalPuntosIAManoActual < 21 ||
          this.totalPuntosIAManoActual == 0
        );
        break;

      case Dificultad.Dificil:
        do {
          if (this.totalPuntosIAManoActual < 13) {
              if (Math.random() < 0.9) {
              carta = this.obtenerCarta();
              this.cartasIA.unshift(carta);
              this.obtenerPuntosIA(carta);
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
        } while (
          this.totalPuntosIAManoActual < 21 ||
          this.totalPuntosIAManoActual == 0
        );
        break;

      case Dificultad.Insano:
        // Insane difficulty: always draws cards until its total points are greater than the player's total points and less than or equal to 21
        while (
          this.totalPuntosIAManoActual < this.totalPuntosJugadorManoActual &&
          this.totalPuntosIAManoActual <= 21
        ) {
          carta = this.obtenerCarta();
          const puntosCarta = this.obtenerValor(carta.valor);
          if (this.totalPuntosIAManoActual + puntosCarta <= 21) {
            this.cartasIA.unshift(carta);
            this.obtenerPuntosIA(carta);
          } else {
            break;
          }
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
    if (this.totalPuntosIAManoActual == this.totalPuntosJugadorManoActual && this.totalPuntosJugadorManoActual < 21 && this.totalPuntosIAManoActual < 21) {
      if (this.cartasIA.length > this.cartasJugador.length) {
        this.obtenerPuntos(1);
        alert('jugador gana');
      } else if (this.cartasIA.length < this.cartasJugador.length) {
        this.obtenerPuntos(-1);
        alert('jugador pierde');
      } else {
        this.obtenerPuntos(0);
        alert('empate');
      }
    }
    else if (this.totalPuntosIAManoActual > 21 && this.totalPuntosJugadorManoActual > 21) {
      if(this.totalPuntosIAManoActual > this.totalPuntosJugadorManoActual) {
        this.obtenerPuntos(1);
        alert('jugador gana');
      }
      else if (this.totalPuntosIAManoActual < this.totalPuntosJugadorManoActual) {
        this.obtenerPuntos(-1);
        alert('jugador pierde');
      }
    }
    else if (this.totalPuntosIAManoActual <= 21 && this.totalPuntosJugadorManoActual <= 21) {
      if (this.totalPuntosIAManoActual > this.totalPuntosJugadorManoActual) {
        this.obtenerPuntos(-1);
        alert('jugador pierde');
      }
      else if (this.totalPuntosIAManoActual < this.totalPuntosJugadorManoActual) {
        this.obtenerPuntos(1);
        alert('jugador gana');
      }
    }
    else if (this.totalPuntosIAManoActual <= 21 && this.totalPuntosJugadorManoActual > 21) {
      this.obtenerPuntos(-1);
      alert('jugador pierde');
    }
    else if (this.totalPuntosIAManoActual > 21 && this.totalPuntosJugadorManoActual <= 21) {
      this.obtenerPuntos(1);
      alert('jugador gana');
    }

    this.partidaAcabada = true;
  }

  obtenerPuntos(jugadorGana: number) {
    switch (this.dificultad) {
      case Dificultad.Facil:
        if (jugadorGana == 1) {
          this.casino.addPuntos(100, true);
        } else if (jugadorGana == 0) {
          this.casino.addPuntos(50, true);
        } else {
          this.casino.addPuntos(50, false);
        }
        break;

      case Dificultad.Medio:
        if (jugadorGana == 1) {
          this.casino.addPuntos(200, true);
        } else if (jugadorGana == 0) {
          this.casino.addPuntos(70, true);
        } else {
          this.casino.addPuntos(80, false);
        }
        break;

      case Dificultad.Dificil:
        if (jugadorGana == 1) {
          this.casino.addPuntos(400, true);
        } else if (jugadorGana == 0) {
          this.casino.addPuntos(100, true);
        } else {
          this.casino.addPuntos(150, false);
        }
        break;

      case Dificultad.Insano:
        if (jugadorGana == 1) {
          this.casino.addPuntos(5000, true);
        } else if (jugadorGana == 0) {
          this.casino.addPuntos(250, true);
        } else {
          this.casino.addPuntos(500, false);
        }
        break;

      case Dificultad.Imposible:
        if (jugadorGana == 1) {
          this.casino.addPuntos(25000, true);
        } else if (jugadorGana == 0) {
          this.casino.addPuntos(100, true);
        } else {
          this.casino.addPuntos(5000, false);
        }
        break;
    }
    this.puntuacionTotal = this.casino.getPuntuacionTotal();
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


}

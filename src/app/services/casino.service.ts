import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasinoService {

  private puntuacionTotal: number = 0;

  constructor() { 
    
  }

  getPuntuacionTotal(): number {
    this.recogerPuntuacionCookies();
    console.log(this.puntuacionTotal)
    return this.puntuacionTotal;
  }

  setPuntuacionTotal(puntuacion: number): void {
    this.puntuacionTotal = puntuacion;
  }

  addPuntos(puntos: number): void {
    if(puntos>0){
      this.puntuacionTotal += puntos;
    }
    else if (puntos<0){
      this.puntuacionTotal -= puntos;
    }
    this.guardarPuntosEnCookies();
  }

  resetPuntuacion(): void {
    this.puntuacionTotal = 0;
  }

  guardarPuntosEnCookies(): void {
    const fechaExpiracion = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 días
    const puntuacionCodificada = this.encodePuntuacionTotalValue(
      this.puntuacionTotal
    );
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

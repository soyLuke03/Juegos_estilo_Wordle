import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {
  private puntuacionTotal: number = 0;
  private dictionary: { [key: string]: string } = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    f: '6',
    g: '7',
    h: '8',
    i: '9',
    j: 'A',
    k: 'B',
    l: 'C',
    m: 'D',
    n: 'E',
    o: 'F',
    p: 'G',
    q: 'H',
    r: 'I',
    s: 'J',
    t: 'K',
    u: 'L',
    v: 'M',
    w: 'N',
    x: 'O',
    y: 'P',
    z: 'Q',
    A: 'R',
    B: 'S',
    C: 'T',
    D: 'U',
    E: 'V',
    F: 'W',
    G: 'X',
    H: 'Y',
    I: 'Z',
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    '4': 'e',
    '5': 'f',
    '6': 'g',
    '7': 'h',
    '8': 'i',
    '9': 'j',
    '!': 'k',
    '@': 'l',
    '#': 'm',
    $: 'n',
    '%': 'o',
    '^': 'p',
    '&': 'q',
    '*': 'r',
    '(': 's',
    ')': 't',
    '-': 'u',
    _: 'v',
    '=': 'w',
    '+': 'x',
    '[': 'y',
    ']': 'z',
    '{': 'A',
    '}': 'B',
    '|': 'C',
    '\\': 'D',
    ':': 'E',
    ';': 'F',
    "'": 'G',
    '"': 'H',
    '<': 'I',
    '>': 'J',
    ',': 'K',
    '.': 'L',
    '?': 'M',
    '/': 'N',
    '~': 'O',
    '`': 'P',
    ' ': 'Q',
    '\t': 'R',
    '\n': 'S',
    '\r': 'T',
    '\b': 'U',
    '\f': 'V',
    '\v': 'W',
  };

  constructor() {}

  getPuntuacionTotal(): number {
    this.recogerPuntuacionCookies();
    return this.puntuacionTotal;
  }

  setPuntuacionTotal(puntuacion: number): void {
    this.puntuacionTotal = puntuacion;
  }

  addPuntos(puntos: number, sumar: boolean): void {
    if (sumar) {
      this.puntuacionTotal += puntos;
    } else {
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
    document.cookie = `casino-puntos=${puntuacionCodificada}; expires=${fechaExpiracion.toUTCString()}; path=/`;
  }

  recogerPuntuacionCookies(): void {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');

      if (name.trim() === 'casino-puntos') {
        let puntuacionDescodificada = this.decodePuntuacionTotalValue(value);
        if (!puntuacionDescodificada) {
          puntuacionDescodificada = 0;
        }
        this.puntuacionTotal = puntuacionDescodificada;
        break;
      }
    }
  }

  encodePuntuacionTotalValue(value: number): string {
    let encodedValue:string = this.privateEnconder(value.toString());
    encodedValue = btoa(encodedValue);
    return encodedValue;
  }

  decodePuntuacionTotalValue(value: string): number {
    let decodedValue: string = atob(value);
    decodedValue = this.privateDecoder(decodedValue);
    return parseInt(decodedValue, 10);
  }

  privateEnconder(encripted: string): string {
    return encripted
      .split('')
      .map((c) => this.dictionary[c] || c)
      .join('');
  }

  privateDecoder(decripted: string): string {
    const inverseDictionary: { [key: string]: string } = {};
    Object.keys(this.dictionary).forEach((key) => {
      inverseDictionary[this.dictionary[key]] = key;
    });
    return decripted
      .split('')
      .map((c) => inverseDictionary[c] || c)
      .join('');
  }
}

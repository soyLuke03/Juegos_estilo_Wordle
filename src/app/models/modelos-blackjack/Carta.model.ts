import { ImagenCarta } from "./Imagen_Carta.enum";
import { Palo } from "./Palo.enum";
import { Valor } from "./Valor.enum";

export type Carta = {
    valor: Valor,
    palo: Palo,
    imagen: ImagenCarta
}

export type Cartas = Carta[];
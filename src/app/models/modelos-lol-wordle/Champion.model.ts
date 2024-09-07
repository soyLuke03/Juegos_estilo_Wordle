import { Especie } from "../modelos-lol-wordle/Especie.model"
import { Genero } from "../modelos-lol-wordle/Genero.model"
import { PosicionCollection } from "../modelos-lol-wordle/Posicion.model"
import { Recurso } from "../modelos-lol-wordle/Recurso.model"
import { RegionCollection } from "../modelos-lol-wordle/Region.model"
import { TipoDecombateCollection } from "./TipoDeCombate.model"

export type Champion = {
    nombre: string,
    posicion: PosicionCollection,
    genero: Genero,
    especie: Especie,
    recurso: Recurso,
    tipoDeCombate: TipoDecombateCollection,
    region: RegionCollection,
    fechaDeLanzamiento: number
}

export type ChampionCollection = Champion[];
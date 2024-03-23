import { Especie } from "./Especie.model"
import { Genero } from "./Genero.model"
import { PosicionCollection } from "./Posicion.model"
import { Recurso } from "./Recurso.model"
import { RegionCollection } from "./Region.model"
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
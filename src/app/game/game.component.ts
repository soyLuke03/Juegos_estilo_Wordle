import { Component, OnInit } from '@angular/core';
import { Champion, ChampionCollection } from '../models/Champion.model';
import { Especie } from '../models/Especie.model';
import { Genero } from '../models/Genero.model';
import { Posicion, PosicionCollection } from '../models/Posicion.model';
import { Recurso } from '../models/Recurso.model';
import { TipoDeCombate } from '../models/TipoDeCombate.model';
import { Region } from '../models/Region.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PuntosComponent } from '../puntos/puntos.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, PuntosComponent, RouterLink],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.nuevoJuego();
  }

  campeones: ChampionCollection = [
    {
      nombre: "Jinx",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Quimicamente_Alterado_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Nasus",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Dios_Guerrero,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Jhin",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2016
    },
    {
      nombre: "Jayce",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia, TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Piltover],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Janna",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Dios_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima, Region.Zaun],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Morgana",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Aspecto_Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Demacia, Region.Targon],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Mordekaiser",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Renacido,
      recurso: Recurso.Escudo,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Milio",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ixtal],
      fechaDeLanzamiento: 2023
    },
    {
      nombre: "Maokai",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Soporte],
      especie: Especie.Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Malzahar",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima, Region.El_Vacio],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Malphite",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Golem,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Ixtal, Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Briar",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Golem,
      recurso: Recurso.Consume_vida,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2023
    },
    {
      nombre: "Braum",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Nacido_del_Hielo,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2014
    },
    {
      nombre: "Brand",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Soporte],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Freljord, Region.Runaterra],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Blitzcrank",
      genero: Genero.Otro,
      posicion: [Posicion.Soporte],
      especie: Especie.Golem,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Bel'Veth",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Ser_del_Vacio,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.El_Vacio],
      fechaDeLanzamiento: 2022
    },
    {
      nombre: "Bardo",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Celestial,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2015
    },
    {
      nombre: "Volibear",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Dios_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Vladimir",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Sed_de_sangre,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Camavor, Region.Noxus, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Viktor",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Ciborg_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Zaun, Region.Piltover],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Viego",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.No_muerto,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Camavor, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2021
    },
    {
      nombre: "Vi",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Zaun, Region.Piltover],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Vex",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2021
    },
    {
      nombre: "Vel'koz",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Soporte],
      especie: Especie.Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.El_Vacio],
      fechaDeLanzamiento: 2014
    },
    {
      nombre: "Veigar",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle, Region.Runaterra, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Vayne",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior, Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Varus",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Darkin_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia, Region.Shurima, Region.Runaterra],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Corki",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle, Region.Piltover],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Cho'Gath",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.El_Vacio],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Cassiopeia",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus, Region.Shurima],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Camille",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Ciborg_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Piltover],
      fechaDeLanzamiento: 2016
    },
    {
      nombre: "Xerath",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Soporte],
      especie: Especie.Dios_Guerrero,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Xayah",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Vastaya,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2017
    },
    {
      nombre: "Zyra",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Medio],
      especie: Especie.Desconocido,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ixtal],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Zoe",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Aspecto_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Targon],
      fechaDeLanzamiento: 2017
    },
    {
      nombre: "Zilean",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Icathia, Region.Runaterra, Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Ziggs",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Inferior],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Zed",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Energia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Zac",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Golem,
      recurso: Recurso.Consume_vida,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Xin Zhao",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia, Region.Jonia, Region.Noxus],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Nocturne",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Demonio_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Nilah",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2022
    },
    {
      nombre: "Nidalee",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla, Posicion.Inferior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo, TipoDeCombate.A_distancia],
      region: [Region.Ixtal],
      fechaDeLanzamiento: 2019
    },
    {
      nombre: "Neeko",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio, Posicion.Soporte],
      especie: Especie.Vastaya,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ixtal],
      fechaDeLanzamiento: 2018
    },
    {
      nombre: "Nautilus",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Renacido,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Zac",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Dios_Guerrero,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Nami",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Vastaya,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Aguas_Estancadas, Region.Runaterra],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Naafiri",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Darkin_Perro,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2023
    },
    {
      nombre: "Lux",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio, Posicion.Soporte],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Lulu",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Lucian",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Demacia, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Lissandra",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Nacido_del_Hielo,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Lilia",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2020
    },
    {
      nombre: "Leona",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Aspecto_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Targon],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "LeBlanc",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Kog'Maw",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.El_Vacio],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Kled",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Yordle,
      recurso: Recurso.Valor,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2016
    },
    {
      nombre: "Kindred",
      genero: Genero.Otro,
      posicion: [Posicion.Jungla],
      especie: Especie.Dios_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2015
    },
    {
      nombre: "Kha'Zix",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.El_Vacio],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Kennen",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Yordle,
      recurso: Recurso.Energia,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Kayn",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Darkin_Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia, Region.Noxus, Region.Runaterra, Region.Shurima],
      fechaDeLanzamiento: 2017
    },
    {
      nombre: "Kayle",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Aspecto_Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo, TipoDeCombate.A_distancia],
      region: [Region.Demacia, Region.Targon],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Katarina",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Kassadin",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima, Region.El_Vacio],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Karthus",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Medio],
      especie: Especie.No_muerto,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Karma",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Medio],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Kalista",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.No_muerto,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Camavor, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2014
    },
    {
      nombre: "Kai'sa",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano_Ser_del_Vacio,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.El_Vacio, Region.Shurima],
      fechaDeLanzamiento: 2018
    },
    {
      nombre: "K'Sante",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2022
    },
    {
      nombre: "Hwei",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Soporte],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2023
    },
    {
      nombre: "Heimerdinger",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Soporte, Posicion.Superior],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Piltover],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Hecarim",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.No_muerto,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Islas_de_la_Sombra, Region.Camavor],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Gwen",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Islas_de_la_Sombra, Region.Camavor],
      fechaDeLanzamiento: 2021
    },
    {
      nombre: "Graves",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Gragas",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Gnar",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Yordle,
      recurso: Recurso.Rabia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo, TipoDeCombate.A_distancia],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2014
    },
    {
      nombre: "Garen",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Gangplank",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Galio",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Soporte],
      especie: Especie.Golem,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Miss Fortune",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Fizz",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Fiora",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Fiddlesticks",
      genero: Genero.Otro,
      posicion: [Posicion.Jungla],
      especie: Especie.Demonio_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Draven",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Dr. Mundo",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior, Posicion.Jungla],
      especie: Especie.Quimicamente_Alterado_Humano,
      recurso: Recurso.Consume_vida,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Diana",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio, Posicion.Jungla],
      especie: Especie.Aspecto_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Targon],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Darius",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Syndra",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Sylas",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia, Region.Freljord],
      fechaDeLanzamiento: 2019
    },
    {
      nombre: "Swain",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Soraka",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia, Region.Demacia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Sona",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia, Region.Demacia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Skarner",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Brackern,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Sivir",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Sion",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Renacido,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Singed",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Quimicamente_Alterado_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Piltover, Region.Zaun],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Shyvana",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Dragon_Magicamente_alterado,
      recurso: Recurso.Furia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Shen",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Energia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Shaco",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Soporte],
      especie: Especie.Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Sett",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Vastaya,
      recurso: Recurso.Determinacion,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2020
    },
    {
      nombre: "Seraphine",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Piltover, Region.Zaun],
      fechaDeLanzamiento: 2020
    },
    {
      nombre: "Senna",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Inferior],
      especie: Especie.Humano_No_muerto,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2019
    },
    {
      nombre: "Sejuani",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano_Nacido_del_Hielo,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Samira",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia, TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus, Region.Shurima],
      fechaDeLanzamiento: 2020
    },
    {
      nombre: "Lee Sin",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Energia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Pyke",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Renacido,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2018
    },
    {
      nombre: "Poppy",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Superior, Posicion.Jungla],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Pantheon",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte, Posicion.Medio, Posicion.Superior],
      especie: Especie.Aspecto_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Targon],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Ornn",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Dios_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2017
    },
    {
      nombre: "Orianna",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Medio],
      especie: Especie.Golem,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Piltover],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Olaf",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Nacido_del_Hielo,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Jarvan IV",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Ivern",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte, Posicion.Jungla],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Freljord, Region.Jonia],
      fechaDeLanzamiento: 2016
    },
    {
      nombre: "Irelia",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio, Posicion.Superior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Illaoi",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2015
    },
    {
      nombre: "Urgot",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Quimicamente_Alterado_Ciborg_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus, Region.Zaun],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Udyr",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord, Region.Jonia],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Yuumi",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Gato_Magicamente_Alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle],
      fechaDeLanzamiento: 2019
    },
    {
      nombre: "Yorick",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Yone",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior, Posicion.Medio],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2020
    },
    {
      nombre: "Yasuo",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior, Posicion.Medio, Posicion.Superior],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Maestro Yi",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "twitch",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Quimicamente_Alterado_Rata,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Twisted Fate",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Aguas_Estancadas],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Tryndamere",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Trundle",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Nacido_del_Hielo_Trol,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Tristana",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio, Posicion.Inferior],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Thresh",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.No_muerto,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Teemo",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Ciudad_de_Bandle],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Taric",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Aspecto_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Targon, Region.Demacia],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Talon",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Medio],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Taliyah",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla, Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2016
    },
    {
      nombre: "Tahm Kench",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte, Posicion.Superior],
      especie: Especie.Demonio_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Aguas_Estancadas, Region.Runaterra],
      fechaDeLanzamiento: 2015
    },
    {
      nombre: "Ryze",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Rumble",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Yordle,
      recurso: Recurso.Calor,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Ciudad_de_Bandle],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Riven",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus, Region.Jonia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Rengar",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Vastaya,
      recurso: Recurso.Ferocidad,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Ixtal, Region.Shurima],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Renekton",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Dios_Guerrero,
      recurso: Recurso.Furia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Renata Glasc",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Quimicamente_Alterado_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2022
    },
    {
      nombre: "Rell",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte],
      especie: Especie.Humano_Mágicamente_alterado_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus],
      fechaDeLanzamiento: 2020
    },
    {
      nombre: "Rek'Sai",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Ser_del_Vacio,
      recurso: Recurso.Rabia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima, Region.El_Vacio],
      fechaDeLanzamiento: 2014
    },
    {
      nombre: "Rammus",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Desconocido,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Rakan",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Vastaya,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2017
    },
    {
      nombre: "Evelynn",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Demonio_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 209
    },
    {
      nombre: "Elise",
      genero: Genero.Femenino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano_Mágicamente_alterado,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia, TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Noxus, Region.Islas_de_la_Sombra],
      fechaDeLanzamiento: 2012
    },
    {
      nombre: "Ekko",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio, Posicion.Jungla],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2015
    },
    {
      nombre: "Wukong",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Vastaya,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Warwick",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Quimicamente_Alterado_Ciborg_Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Zaun],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Nunu y Willump",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla],
      especie: Especie.Humano_Yeti,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Quinn",
      genero: Genero.Femenino,
      posicion: [Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Demacia],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Qiyana",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Ixtal],
      fechaDeLanzamiento: 2019
    },
    {
      nombre: "Azir",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Dios_Guerrero,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2014
    },
    {
      nombre: "Aurelion Sol",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Celestial_Dragon,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Runaterra, Region.Targon],
      fechaDeLanzamiento: 2016
    },
    {
      nombre: "Ashe",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Inferior],
      especie: Especie.Humano_Nacido_del_Hielo,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Apehlios",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano_Espiritualista,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Targon],
      fechaDeLanzamiento: 2019
    },
    {
      nombre: "Annie",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Noxus, Region.Runaterra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Anivia",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Medio],
      especie: Especie.Dios_Espiritu,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Freljord],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Amumu",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte, Posicion.Jungla],
      especie: Especie.No_muerto_Yordle,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Akshan",
      genero: Genero.Masculino,
      posicion: [Posicion.Medio],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Shurima],
      fechaDeLanzamiento: 2021
    },
    {
      nombre: "Akali",
      genero: Genero.Femenino,
      posicion: [Posicion.Medio, Posicion.Superior],
      especie: Especie.Humano,
      recurso: Recurso.Energia,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Ahri",
      genero: Genero.Femenino,
      posicion: [Posicion.Soporte, Posicion.Medio],
      especie: Especie.Vastaya,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Jonia],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Aatrox",
      genero: Genero.Masculino,
      posicion: [Posicion.Superior],
      especie: Especie.Darkin,
      recurso: Recurso.Sin_Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Runaterra, Region.Shurima],
      fechaDeLanzamiento: 2013
    },
    {
      nombre: "Caitlyn",
      genero: Genero.Femenino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Piltover],
      fechaDeLanzamiento: 2011
    },
    {
      nombre: "Ezreal",
      genero: Genero.Masculino,
      posicion: [Posicion.Inferior],
      especie: Especie.Humano_Nacido_con_magia,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.A_distancia],
      region: [Region.Piltover],
      fechaDeLanzamiento: 2010
    },
    {
      nombre: "Alistar",
      genero: Genero.Masculino,
      posicion: [Posicion.Soporte],
      especie: Especie.Minotauro,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Runaterra],
      fechaDeLanzamiento: 2009
    },
    {
      nombre: "Jax",
      genero: Genero.Masculino,
      posicion: [Posicion.Jungla, Posicion.Superior],
      especie: Especie.Desconocido,
      recurso: Recurso.Mana,
      tipoDeCombate: [TipoDeCombate.Cuerpo_a_cuerpo],
      region: [Region.Runaterra, Region.Icathia, Region.Shurima],
      fechaDeLanzamiento: 2009
    }
  ];

  campeonesDisponibles: ChampionCollection = [];
  campeonesDichos: ChampionCollection = [];
  campeonesPosiblesSegunBusqueda: ChampionCollection = [];

  campeonElegido!: Champion;
  campeonDicho!: Champion;

  intentos: number = 0;
  victoria: boolean = false;
  inputSearch: string = '';
  showChamps: boolean = false;


  nuevoJuego() {
    this.campeonesPosiblesSegunBusqueda = [];
    this.intentos = 0;
    this.victoria = false;
    this.showChamps = false;
    this.inputSearch = "";
    this.campeonesDichos = [];
    this.campeonElegido = this.campeones[this.generarNumeroAleatorio()];
    this.campeonesDisponibles = [...this.campeones];
  }

  showChampsInSearch(): void {
    this.campeonesPosiblesSegunBusqueda = [];
    if (this.inputSearch == '') {
      this.showChamps = false;
    }
    else {
      this.showChamps = true;

      for (const campeon of this.campeonesDisponibles) {
        if (campeon.nombre.toLowerCase().startsWith(this.inputSearch.toLowerCase())) {
          this.campeonesPosiblesSegunBusqueda.push(campeon);
        }
      }
    }
  }

  guessChamp(campeonPosible: Champion) {
    this.intentos++;
    this.campeonesDichos.unshift(campeonPosible);
    this.eliminarCampeonDisponible(campeonPosible);
    this.showChampsInSearch();


    if (campeonPosible === this.campeonElegido) {
      this.victoria = true
      this.campeonesPosiblesSegunBusqueda = [];
      alert("VICTORIA")
    }
  }

  eliminarCampeonDisponible(campeonPosible: Champion) {
    const index = this.campeonesDisponibles.indexOf(campeonPosible);
    if (index !== -1) {
      this.campeonesDisponibles.splice(index, 1);
    }
  }

  generarNumeroAleatorio(): number {
    const numeroAleatorio = Math.random();
    const numeroEscalado = Math.floor(numeroAleatorio * 166) + 1;
    return numeroEscalado;
  }

  isPartialMatch(campeon: Champion, campeonElegido: Champion, atributo: string): boolean {
    switch (atributo) {
      case "position":
        return campeonElegido.posicion.some(posicion => {
          return campeon.posicion.includes(posicion);
        });
      case "tipoDeCombate":
        return campeonElegido.tipoDeCombate.some(tipoDeCombate => {
          return campeon.tipoDeCombate.includes(tipoDeCombate);
        });
      case "region":
        return campeonElegido.region.some(region => {
          return campeon.region.includes(region);
        });
    }
    return false;
  }

  isFullMatch(campeon: Champion, campeonElegido: Champion, atributo: string): boolean {
    switch (atributo) {
      case "position":
        return this.iguales(campeonElegido.posicion, campeon.posicion);
      case "tipoDeCombate":
        return this.iguales(campeonElegido.tipoDeCombate, campeon.tipoDeCombate);
      case "region":
        return this.iguales(campeonElegido.region, campeon.region);
      default:
        return false;
    }
  }

  isSame(campeon: Champion, campeonElegido: Champion, atributo: string): boolean {
    switch (atributo) {
      case "nombre":
        return campeon.nombre === campeonElegido.nombre;
      case "genero":
        return campeon.genero === campeonElegido.genero;
      case "especie":
        return campeon.especie === campeonElegido.especie;
      case "recurso":
        return campeon.recurso === campeonElegido.recurso;

    }
    return false;
  }

  isGreaterOrLesserDate(campeon: Champion, campeonElegido: Champion): number {
    if (campeon.fechaDeLanzamiento > campeonElegido.fechaDeLanzamiento) {
      return 1; //es mayor
    }
    else if (campeon.fechaDeLanzamiento < campeonElegido.fechaDeLanzamiento) {
      return -1; //es menor
    }
    else {
      return 0;
    }
  }

  iguales(array1: any[], array2: any[]): boolean {
    if (array1.length !== array2.length) {
      return false;
    }
  
    for (const item of array1) {
      if( !array2.includes(item)) {
        return false;
      }
    }
  
    return true;
  }
}

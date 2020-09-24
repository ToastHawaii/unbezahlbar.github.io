// Copyright (C) 2020 Markus Peloso
//
// This file is part of Priceless map.
//
// Priceless map is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// Priceless map is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Priceless map.  If not, see <http://www.gnu.org/licenses/>.

import { type } from "./local.type";

export const local = {
  code: "de",
  title: "Unbezahlbar Karte",
  description: "Erlebe die Welt. Gratis.",
  minZoomMessageNoLayer: "Keine Ebene zugewiesen",
  minZoomMessage: "Vergrössern, um Standorte zu laden",
  emptyIndicator: "Keine Orte gefunden",
  linkCopied: "Link in die Zwischenablage kopiert",
  capacity: "Kapazität",
  playground: "Für Kinder",
  changing_table: "Hat einen Wickeltisch",
  bottle: "Nachfüllen ist möglich",
  pump: "Pumpe",
  tools: "Werkzeuge",
  chainTool: "Kettennietdrücker",
  internet: "Internet",
  water: "Trinkwasser",
  bicycle: "Velo",
  park: "Park",
  charging: "Aufladen",
  mobileCharging: "Aufladen",
  car: "Auto",
  mobile: "Smartphone",
  smallElectronics: "Kleine Elektrongeräte",
  electronics: "Elektrongeräte",
  furniture: "Möbel",
  computer: "Computer",
  toy: "Spielzeug",
  clothes: "Kleider",
  freeToGive: "Nur bringen",
  freeToTake: "Nur mitnehmen",
  freeToTakeOrGive: "Mitnehmen und bringen",
  borrow: "Nur ausleihen",
  indoor: "Drinnen",
  female: "Frau",
  male: "Mann",
  hoops: "Körbe",
  light: "Beleuchtet",
  covered: "Überdacht",
  wheelchairYes: "Rollstuhlgerecht",
  wheelchairLimited: "Limitiert Rollstuhlgerecht",
  wheelchairNo: "Nicht Rollstuhlgerecht",
  colour: "Farbe",
  open: "Geöffnet",
  closed: "Geschlossen",
  maybeOpen: "Vielleicht geöffnet",
  maybeOpens: "Öffnet vielleicht",
  maybeCloses: "Schliesst vielleicht",
  opens: "Öffnet",
  closes: "Schliesst",
  thatDependsOn: "Das hängt ab von",
  conditionalFee: "Nur zu bestimmten Zeiten kostenlos.",
  horizontalBar: "Reck",
  parallelBars: "Parallelbarren",
  rings: "Ringe",
  exerciseMachine: "Übungsgerät",
  balance: "Gleichgewicht",
  route: "Routen",
  difficulty: "Schwierigkeitsgrad",
  externalResources: "Andere",
  floor: function (level: number) {
    return `(${level}. OG)`;
  },
  groundFloor: function (_level: number) {
    return `(EG)`;
  },
  basement: function (level: number) {
    return `(${Math.abs(level)}. UG)`;
  },
  group: {
    culture: "Kultur",
    education: "Bildung",
    natural: "Natur",
    object_of_utility: "Hilfsmittel",
    health: "Gesundheit",
    community: "Gemeinschaft",
    sport: "Sport",
    communitySport: "Gemeinschaftssport",
    trip: "Ausflug",
    goods: "Gegenstände",
    material: "Material weiterverwerten"
  },
  amenity: {
    hunting_stand: "Hochsitz für Jäger"
  },
  leisure: {
    bird_hide: "Versteck um Vögel zu beobachten",
    wildlife_hide: "Versteck um Wildtiere zu beobachten"
  },
  man_made: {
    water_well: "Brunnen",
    watermill: "Wassermühle",
    windmill: "Windmühle",
    mineshaft: "Schacht",
    drinking_fountain: "Trinkbrunnen",
    tower: "Turm",
    beehive: "Bienenstock",
    insect_hotel: "Insektenhotel",
    nesting_site: "Nisthilfe"
  },
  landuse: {
    apiary: "Bienenstock"
  },
  natural: {
    anthill: "Ameisenhügel",
    termite_mound: "Termitenhügel"
  },
  sport: { bowls: "Bowls", boules: "Boule" },
  boules: {
    petanque: "Pétanque",
    lyonnaise: "Jeu Provençal",
    boule_de_fort: "Boule de fort",
    pétanque: "Pétanque",
    bocce: "Boccia"
  },
  type: type,
  "piste:difficulty": {
    novice: "Sehr leicht",
    easy: "Leicht",
    intermediate: "Mittel",
    advanced: "Schwer",
    expert: "Sehr schwer",
    freeride: "Freeride",
    extreme: "Extrem schwer"
  },
  fitness_station: {
    balance_beam: "Schwebebalken",
    box: "Sprungbox",
    horizontal_bar: "Reck",
    horizontal_ladder: "Hangelleiter",
    hyperextension: "Hyperextension-Bank",
    parallel_bars: "Parallelbarren",
    "push-up": "Liegestützstation",
    rings: "Ringe",
    sign: "Übungsanleitungstafel",
    "sit-up": "Sit-Up-Station",
    stairs: "Übungsstiege",
    beam_jump: "Beam jump",
    stepping_stone: "Stepping stone",
    bench: "Bank",
    body_raise: "Körper heben",
    slalom: "Slalom",
    stretch_bars: "Dehnen"
  },
  historic: {
    aircraft: "Flugzeug",
    aqueduct: "Aquädukt",
    archaeological_site: "Ausgrabungsstätte",
    battlefield: "Schlachtfeld",
    boundary_stone: "Grenzstein",
    building: "Gebäude",
    cannon: "Kanone",
    castle: "Burg",
    castle_wall: "Stadtmauer",
    church: "Kirche",
    city_gate: "Stadttor",
    citywalls: "Stadtmauer",
    farm: "Farm",
    fort: "Fort",
    gallows: "Galgen",
    highwater_mark: "Hochwassermarke",
    locomotive: "Lokomotive",
    manor: "Herrenhaus",
    memorial: "Denkmal",
    mine: "Mine",
    mine_shaft: "Schacht",
    milestone: "Meilenstein",
    monastery: "Kloster",
    monument: "Monument",
    optical_telegraph: "Optischer Telegraf",
    pillory: "Pranger",
    railway_car: "Eisenbahnwagen",
    ruins: "Ruine",
    rune_stone: "Runenstein",
    ship: "Schiff",
    tomb: "Grab",
    tower: "Turm",
    tree_shrine: "Baum",
    wayside_cross: "Wegkreuz",
    wayside_shrine: "Schrein",
    wreck: "Wrack"
  },
  site_type: {
    megalith: "Steinsetzung",
    bigstone: "Bearbeiteter Grossstein",
    tumulus: "Hügelgrab",
    fortification: "Befestigungsanlage",
    petroglyph: "Felsbild",
    geoglyph: "Erdzeichnung",
    city: "Historische Stadt",
    settlement: "Siedlung",
    hut_circle: "Hüttenkreis",
    roman_villa: "Römische Villa",
    domus: "Domus",
    roman_circus: "Zirkus (Antikes Rom)",
    necropolis: "Totenstadt, Nekropolis"
  },
  castle_type: {
    defensive: "Burg",
    palace: "Palast",
    stately: "Schloss ",
    manor: "Herrenhaus",
    fortress: "Festung",
    castrum: "Römische Militärlager",
    shiro: "Shiro",
    kremlin: "Kreml",
    hillfort: "Hügelfort"
  },
  "public_bookcase:type": {
    building: "Öffentliche Tauschbibliothek",
    glass_cabinet: "Öffentlicher Bücherschrank",
    metal_cabinet: "Öffentlicher Bücherschrank",
    movable_cabinet: "Öffentlicher Bücherschrank",
    phone_box: "Öffentliche Buchkabine",
    reading_box: "Öffentliche Bücherbox",
    sculpture: "Öffentlicher Bücherschrank",
    shelf: "Öffentliches Bücherregal",
    shelter: "Öffentliches Bücherregal",
    wooden_cabinet: "Öffentlicher Bücherschrank"
  },
  "garden:type": {
    botanical: "Botanischer Garten",
    community: "Gemeinschaftsgarten",
    residential: "Hausgarten",
    roof_garden: "Dachgarten"
  },
  "garden:style": {
    english: "Englischer Garten",
    french: "Französischer Garten",
    chinese: "Chinesischer Garten",
    japanese: "Japanischer Garten",
    zen: "Zen Garten",
    monastery: "Klostergarten",
    rosarium: "Rosengarten",
    herb_garden: "Kräutergarten",
    medical_garden: "Apothekergarten",
    kitchen: "Nutzgarten",
    flower_garden: "Ziergarten",
    cottage_garden: "Bauerngarten"
  }
};

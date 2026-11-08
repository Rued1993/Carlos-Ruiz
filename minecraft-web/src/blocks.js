// Bloques, ítems, herramientas y recetas.
import { clean } from './flavor.js';
export const AIR = 0;

export const B = {
  GRASS: 1, DIRT: 2, STONE: 3, SAND: 4, LOG: 5, LEAVES: 6, PLANKS: 7, COBBLE: 8,
  WATER: 9, GLASS: 10, COAL_ORE: 11, IRON_ORE: 12, GOLD_ORE: 13, DIAMOND_ORE: 14,
  BEDROCK: 15, SNOW: 16, CACTUS: 17, BRICKS: 18, TABLE: 19, TORCH: 20, FURNACE: 21, COMMAND: 22,
  OBSIDIAN: 23, NETHER_PORTAL: 24, NETHERRACK: 25, SOUL_SAND: 26, GLOWSTONE: 27, LAVA: 28, NETHER_BRICKS: 29,
  END_STONE: 30, END_FRAME: 31, END_FRAME_EYE: 32, END_PORTAL: 33,
  PURPUR: 34, END_BRICKS: 35, CHEST: 36, CHEST_OPEN: 37,
  SANDSTONE: 38, MOSSY_COBBLE: 39, ANCIENT_DEBRIS: 40, GOLD_BLOCK: 41,
  BREWING: 85, ENCH_TABLE: 86, LAPIS_ORE: 87,
  TNT: 98, BED: 99, TRAPDOOR: 187, TRAPDOOR_OPEN: 188, GATE: 192, GATE_OPEN: 196, FARMLAND: 244, WHEAT_CROP: 245,
  RED_SAND: 88, TERRA_ORANGE: 89, TERRA_RED: 90, TERRA_YELLOW: 91, TERRA_WHITE: 92, TERRA_BROWN: 93, CHERRY_LOG: 94, CHERRY_LEAVES: 95, CHERRY_PLANKS: 96, MUD: 97,
};
export const I = { STICK: 100, COAL: 101, IRON: 102, GOLD: 103, DIAMOND: 104, APPLE: 150, PORK: 151, BEEF: 152, COOKED_PORK: 153, STEAK: 154, STAR: 105, PEARL: 106, LIGHTER: 107, EYE: 108, ELYTRA: 109,
  DONUT: 160, DUFF: 161, SENZU: 162, DBALL: 163, NETHERITE: 170, SCRAP: 171, LEATHER: 172, BOTTLE: 173, WART: 174, BLAZE_POWDER: 175, MAGMA_CREAM: 176, LAPIS: 177, BOOK: 178, HOE_STONE: 116, HOE_IRON: 117, HOE_DIAMOND: 118, BOW: 119, ARROW: 126, BUCKET: 127, WATER_BUCKET: 128, LAVA_BUCKET: 129, SEEDS: 136, WHEAT: 137, BREAD: 138, SHEARS: 139, COMPASS: 146, CHICKEN: 155, COOKED_CHICKEN: 156 };

export const BLOCKS = {};
function block(id, name, tiles, hardness, tool = null, lvl = 0, extra = {}) {
  BLOCKS[id] = { id, name, tiles, hardness, tool, lvl, opaque: true, liquid: false, ...extra };
}
//            id            nombre        [arriba, abajo, lados]                         dureza herram. nivel
block(B.GRASS, 'Hierba', ['grass_top', 'dirt', 'grass_side'], 0.6, 'shovel');
block(B.DIRT, 'Tierra', ['dirt', 'dirt', 'dirt'], 0.5, 'shovel');
block(B.STONE, 'Piedra', ['stone', 'stone', 'stone'], 1.5, 'pick', 1);
block(B.SAND, 'Arena', ['sand', 'sand', 'sand'], 0.5, 'shovel');
block(B.LOG, 'Tronco', ['log_top', 'log_top', 'log_side'], 2, 'axe');
block(B.LEAVES, 'Hojas', ['leaves', 'leaves', 'leaves'], 0.2);
block(B.PLANKS, 'Tablones', ['planks', 'planks', 'planks'], 2, 'axe');
block(B.COBBLE, 'Adoquín', ['cobble', 'cobble', 'cobble'], 2, 'pick', 1);
block(B.WATER, 'Agua', ['water', 'water', 'water'], 100, null, 0, { opaque: false, liquid: true, transparent: true });
block(B.GLASS, 'Cristal', ['glass', 'glass', 'glass'], 0.3, null, 0, { opaque: false, transparent: true });
block(B.COAL_ORE, 'Mena de carbón', ['coal_ore', 'coal_ore', 'coal_ore'], 3, 'pick', 1);
block(B.IRON_ORE, 'Mena de hierro', ['iron_ore', 'iron_ore', 'iron_ore'], 3, 'pick', 2);
block(B.GOLD_ORE, 'Mena de oro', ['gold_ore', 'gold_ore', 'gold_ore'], 3, 'pick', 3);
block(B.DIAMOND_ORE, 'Mena de diamante', ['diamond_ore', 'diamond_ore', 'diamond_ore'], 3, 'pick', 3);
block(B.BEDROCK, 'Lecho de roca', ['bedrock', 'bedrock', 'bedrock'], Infinity);
block(B.SNOW, 'Nieve', ['snow', 'dirt', 'snow_side'], 0.3, 'shovel');
block(B.CACTUS, 'Cactus', ['cactus_top', 'cactus_top', 'cactus_side'], 0.4);
block(B.BRICKS, 'Ladrillos', ['bricks', 'bricks', 'bricks'], 2, 'pick', 1);
block(B.TABLE, 'Mesa de crafteo', ['table_top', 'planks', 'table_side'], 2.5, 'axe');
block(B.TORCH, 'Antorcha', ['torch', 'torch', 'torch'], 0.05, null, 0, { opaque: false, torch: true, flat: true, emit: 10 });
block(B.COMMAND, 'Bloque de comandos', ['command', 'command', 'command'], 5, 'pick', 3);
block(B.OBSIDIAN, 'Obsidiana', ['obsidian', 'obsidian', 'obsidian'], 50, 'pick', 4);
block(B.NETHER_PORTAL, 'Portal del Nether', ['portal', 'portal', 'portal'], Infinity, null, 0, { opaque: false, transparent: true, portal: true, glow: true });
block(B.NETHERRACK, 'Netherrack', ['netherrack', 'netherrack', 'netherrack'], 0.4, 'pick');
block(B.SOUL_SAND, 'Arena de almas', ['soul_sand', 'soul_sand', 'soul_sand'], 0.5, 'shovel');
block(B.GLOWSTONE, 'Piedra luminosa', ['glowstone', 'glowstone', 'glowstone'], 0.3, null, 0, { glow: true, emit: 10 });
block(B.LAVA, 'Lava', ['lava', 'lava', 'lava'], Infinity, null, 0, { opaque: false, liquid: true, glow: true, emit: 10 });
block(B.NETHER_BRICKS, 'Ladrillos del Nether', ['nether_bricks', 'nether_bricks', 'nether_bricks'], 2, 'pick', 1);
block(B.END_STONE, 'Piedra del End', ['end_stone', 'end_stone', 'end_stone'], 3, 'pick', 1);
block(B.END_FRAME, 'Marco del portal del End', ['end_frame_top', 'end_stone', 'end_frame_side'], Infinity);
block(B.END_FRAME_EYE, 'Marco del End con ojo', ['end_frame_eye', 'end_stone', 'end_frame_side'], Infinity);
block(B.END_PORTAL, 'Portal del End', ['end_portal', 'end_portal', 'end_portal'], Infinity, null, 0, { opaque: false, transparent: true, portal: true, glow: true });
block(B.PURPUR, 'Purpur', ['purpur', 'purpur', 'purpur'], 1.5, 'pick', 1);
block(B.END_BRICKS, 'Ladrillos del End', ['end_bricks', 'end_bricks', 'end_bricks'], 2, 'pick', 1);
block(B.CHEST, 'Cofre', ['chest_top', 'chest_top', 'chest_side'], 2.5, 'axe');
block(B.CHEST_OPEN, 'Cofre abierto', ['chest_open', 'chest_top', 'chest_side'], 2.5, 'axe');
block(B.SANDSTONE, 'Arenisca', ['sandstone', 'sandstone', 'sandstone'], 0.8, 'pick', 1);
block(B.MOSSY_COBBLE, 'Adoquín musgoso', ['mossy_cobble', 'mossy_cobble', 'mossy_cobble'], 2, 'pick', 1);
block(B.ANCIENT_DEBRIS, 'Restos antiguos', ['ancient_debris_top', 'ancient_debris_top', 'ancient_debris_side'], 30, 'pick', 4);
block(B.GOLD_BLOCK, 'Bloque de oro', ['gold_block', 'gold_block', 'gold_block'], 3, 'pick', 3);
block(B.RED_SAND, 'Arena roja', ['red_sand', 'red_sand', 'red_sand'], 0.5, 'shovel');
block(B.TERRA_ORANGE, 'Terracota naranja', ['terra_orange', 'terra_orange', 'terra_orange'], 1.2, 'pick', 1);
block(B.TERRA_RED, 'Terracota roja', ['terra_red', 'terra_red', 'terra_red'], 1.2, 'pick', 1);
block(B.TERRA_YELLOW, 'Terracota amarilla', ['terra_yellow', 'terra_yellow', 'terra_yellow'], 1.2, 'pick', 1);
block(B.TERRA_WHITE, 'Terracota blanca', ['terra_white', 'terra_white', 'terra_white'], 1.2, 'pick', 1);
block(B.TERRA_BROWN, 'Terracota marrón', ['terra_brown', 'terra_brown', 'terra_brown'], 1.2, 'pick', 1);
block(B.CHERRY_LOG, 'Tronco de cerezo', ['cherry_log_top', 'cherry_log_top', 'cherry_log_side'], 2, 'axe');
block(B.CHERRY_LEAVES, 'Hojas de cerezo', ['cherry_leaves', 'cherry_leaves', 'cherry_leaves'], 0.2);
block(B.CHERRY_PLANKS, 'Tablones de cerezo', ['cherry_planks', 'cherry_planks', 'cherry_planks'], 2, 'axe');
block(B.MUD, 'Barro', ['mud', 'mud', 'mud'], 0.5, 'shovel');
block(B.BREWING, 'Soporte de pociones', ['brew_top', 'brew_top', 'brew_side'], 1.5, 'pick', 1);
block(B.ENCH_TABLE, 'Mesa de encantamientos', ['ench_top', 'obsidian', 'ench_side'], 5, 'pick', 3);
block(B.LAPIS_ORE, 'Mena de lapislázuli', ['lapis_ore', 'lapis_ore', 'lapis_ore'], 3, 'pick', 2);
block(B.FURNACE, 'Horno', ['furnace_top', 'stone', 'furnace_front'], 3, 'pick', 1);

// ---------- Bloques con forma: losas, escaleras, vallas y puertas ----------
export const SHAPE = new Array(256).fill(null); // id -> { kind, ... }
export const SLAB_MATS = [B.PLANKS, B.COBBLE, B.STONE, B.BRICKS, B.SANDSTONE];
const SLAB_NAMES = ['madera', 'adoquín', 'piedra', 'ladrillo', 'arenisca'];
export const SLAB_BOTTOM = (m) => 42 + m, SLAB_TOP = (m) => 47 + m;
export const STAIR_MATS = [B.PLANKS, B.COBBLE, B.BRICKS, B.SANDSTONE];
const STAIR_NAMES = ['madera', 'adoquín', 'ladrillo', 'arenisca'];
export const STAIR_ID = (m, o) => 52 + m * 4 + o;
export const FENCE = 68, DOOR_LO = 69, DOOR_LO_OPEN = 73, DOOR_HI = 77, DOOR_HI_OPEN = 81;
SLAB_MATS.forEach((mat, m) => {
  const base = BLOCKS[mat];
  for (const top of [false, true]) {
    const id = top ? SLAB_TOP(m) : SLAB_BOTTOM(m);
    block(id, 'Losa de ' + SLAB_NAMES[m], base.tiles, base.hardness, base.tool, base.lvl, { opaque: false, hidden: top, dropAs: SLAB_BOTTOM(m) });
    SHAPE[id] = { kind: 'slab', top, m };
  }
});
STAIR_MATS.forEach((mat, m) => {
  const base = BLOCKS[mat];
  for (let o = 0; o < 4; o++) {
    const id = STAIR_ID(m, o);
    block(id, 'Escaleras de ' + STAIR_NAMES[m], base.tiles, base.hardness, base.tool, base.lvl, { opaque: false, hidden: o > 0, dropAs: STAIR_ID(m, 0) });
    SHAPE[id] = { kind: 'stairs', o, m };
  }
});
block(FENCE, 'Valla', BLOCKS[B.PLANKS].tiles, 2, 'axe', 0, { opaque: false, flat: true });
SHAPE[FENCE] = { kind: 'fence' };
for (let o = 0; o < 4; o++) for (const [base, open, hi] of [[DOOR_LO, false, false], [DOOR_LO_OPEN, true, false], [DOOR_HI, false, true], [DOOR_HI_OPEN, true, true]]) {
  const id = base + o;
  block(id, 'Puerta de madera', ['planks', 'planks', hi ? 'door_hi' : 'door_lo'], 2, 'axe', 0, { opaque: false, flat: true, hidden: id !== DOOR_LO, dropAs: DOOR_LO });
  SHAPE[id] = { kind: 'door', o, open, hi };
}
// Escotilla (suelo; abierta: panel vertical), portón de valla, cama, cultivos, TNT y tierra de labranza
block(B.TRAPDOOR, 'Escotilla de madera', ['trapdoor', 'trapdoor', 'trapdoor'], 2, 'axe', 0, { opaque: false });
SHAPE[B.TRAPDOOR] = { kind: 'trapdoor', open: false, o: 0 };
for (let o = 0; o < 4; o++) { block(B.TRAPDOOR_OPEN + o, 'Escotilla de madera', ['trapdoor', 'trapdoor', 'trapdoor'], 2, 'axe', 0, { opaque: false, hidden: true, dropAs: B.TRAPDOOR }); SHAPE[B.TRAPDOOR_OPEN + o] = { kind: 'trapdoor', open: true, o }; }
for (let a = 0; a < 2; a++) for (const open of [false, true]) { const id = (open ? B.GATE_OPEN : B.GATE) + a; block(id, 'Portón', ['planks', 'planks', 'planks'], 2, 'axe', 0, { opaque: false, flat: true, hidden: id !== B.GATE, dropAs: B.GATE }); SHAPE[id] = { kind: 'gate', axis: a, open }; }
block(B.BED, 'Cama', ['bed_top', 'planks', 'bed_side'], 0.3, 'axe', 0, { opaque: false });
SHAPE[B.BED] = { kind: 'bed' };
block(B.TNT, 'TNT', ['tnt_top', 'tnt_top', 'tnt_side'], 0.1);
block(B.FARMLAND, 'Tierra de labranza', ['farmland', 'dirt', 'dirt'], 0.6, 'shovel', 0, { dropAs: B.DIRT });
for (let st = 0; st < 4; st++) { block(B.WHEAT_CROP + st, 'Trigo', ['wheat', 'wheat', 'wheat'], 0.02, null, 0, { opaque: false, hidden: true, crop: st }); SHAPE[B.WHEAT_CROP + st] = { kind: 'crop', stage: st }; }
// Cajas (en coordenadas 0..1 de la celda) de cada forma. nb(dx, dz) indica si la valla conecta en esa dirección.
export function shapeBoxes(id, nb, collide) {
  const s = SHAPE[id];
  if (s.kind === 'slab') return [s.top ? [0, 0.5, 0, 1, 1, 1] : [0, 0, 0, 1, 0.5, 1]];
  if (s.kind === 'stairs') return [[0, 0, 0, 1, 0.5, 1], [[0, 0.5, 0, 1, 1, 0.5], [0.5, 0.5, 0, 1, 1, 1], [0, 0.5, 0.5, 1, 1, 1], [0, 0.5, 0, 0.5, 1, 1]][s.o]];
  if (s.kind === 'bed') return [[0, 0, 0, 1, 0.56, 1]];
  if (s.kind === 'crop') return collide ? [] : [[0.08, 0, 0.08, 0.92, [0.2, 0.4, 0.65, 0.95][s.stage], 0.92]];
  if (s.kind === 'trapdoor') return s.open ? [[[0, 0, 0, 1, 1, 0.1875], [0.8125, 0, 0, 1, 1, 1], [0, 0, 0.8125, 1, 1, 1], [0, 0, 0, 0.1875, 1, 1]][s.o]] : [[0, 0, 0, 1, 0.1875, 1]];
  if (s.kind === 'gate') {
    const ph = collide ? 1.5 : 1, bars = s.axis === 0 ? [[0, 0, 0.4375, 0.125, ph, 0.5625], [0.875, 0, 0.4375, 1, ph, 0.5625]] : [[0.4375, 0, 0, 0.5625, ph, 0.125], [0.4375, 0, 0.875, 0.5625, ph, 1]];
    if (!s.open) bars.push(s.axis === 0 ? [0.125, 0.3, 0.4375, 0.875, collide ? 1.5 : 0.95, 0.5625] : [0.4375, 0.3, 0.125, 0.5625, collide ? 1.5 : 0.95, 0.875]);
    else bars.push(s.axis === 0 ? [0, 0.3, 0.5625, 0.125, 0.95, 0.9] : [0.5625, 0.3, 0, 0.9, 0.95, 0.125]);
    return bars;
  }
  if (s.kind === 'fence') {
    const hgt = collide ? 1.5 : 1, out = [[0.375, 0, 0.375, 0.625, hgt, 0.625]];
    if (nb(0, -1)) out.push(collide ? [0.4375, 0, 0, 0.5625, 1.5, 0.375] : [0.4375, 0.375, 0, 0.5625, 0.5625, 0.375], ...(collide ? [] : [[0.4375, 0.6875, 0, 0.5625, 0.875, 0.375]]));
    if (nb(0, 1)) out.push(collide ? [0.4375, 0, 0.625, 0.5625, 1.5, 1] : [0.4375, 0.375, 0.625, 0.5625, 0.5625, 1], ...(collide ? [] : [[0.4375, 0.6875, 0.625, 0.5625, 0.875, 1]]));
    if (nb(-1, 0)) out.push(collide ? [0, 0, 0.4375, 0.375, 1.5, 0.5625] : [0, 0.375, 0.4375, 0.375, 0.5625, 0.5625], ...(collide ? [] : [[0, 0.6875, 0.4375, 0.375, 0.875, 0.5625]]));
    if (nb(1, 0)) out.push(collide ? [0.625, 0, 0.4375, 1, 1.5, 0.5625] : [0.625, 0.375, 0.4375, 1, 0.5625, 0.5625], ...(collide ? [] : [[0.625, 0.6875, 0.4375, 1, 0.875, 0.5625]]));
    return out;
  }
  // puerta: panel fino en un lateral de la celda; abierta, gira hacia el lateral contiguo
  const side = s.open ? (s.o + 3) % 4 : s.o, T = 0.1875;
  return [[[0, 0, 0, 1, 1, T], [1 - T, 0, 0, 1, 1, 1], [0, 0, 1 - T, 1, 1, 1], [0, 0, 0, T, 1, 1]][side]];
}

// Tablas rápidas por id
export const OPAQUE = new Uint8Array(256);
export const SOLID = new Uint8Array(256);
export const LIQUID = new Uint8Array(256);
export const GHOST = new Uint8Array(256);  // se atraviesan y no se pueden apuntar (portales)
export const EMIT = new Uint8Array(256);   // emiten luz
export const BLOCKLIGHT = new Uint8Array(256); // bloquean la luz del cielo (opacos, losas, escaleras y puertas)
for (const b of Object.values(BLOCKS)) {
  OPAQUE[b.id] = b.opaque ? 1 : 0;
  BLOCKLIGHT[b.id] = b.opaque || (SHAPE[b.id] && !['fence', 'crop', 'gate', 'trapdoor'].includes(SHAPE[b.id].kind)) ? 1 : 0;
  SOLID[b.id] = b.liquid || b.torch || b.portal || b.crop !== undefined ? 0 : 1;
  if (b.portal) GHOST[b.id] = 1;
  if (b.emit) EMIT[b.id] = b.emit;
  LIQUID[b.id] = b.liquid ? 1 : 0;
}

// ---------- Ítems ----------
export const ITEMS = {};
function item(id, name, extra = {}) { ITEMS[id] = { id, name, stack: 64, ...extra }; }
item(I.STICK, 'Palo');
item(I.COAL, 'Carbón');
item(I.IRON, 'Lingote de hierro');
item(I.GOLD, 'Lingote de oro');
item(I.DIAMOND, 'Diamante');
item(I.STAR, 'Estrella de la tormenta');
item(I.PEARL, 'Perla de Ender');
item(I.LIGHTER, 'Encendedor', { stack: 1, uses: 64 });
item(I.EYE, 'Ojo de Ender');
item(I.ELYTRA, 'Élitros', { stack: 1 });
item(I.DONUT, 'Dona rosquilla', { food: 12 });
item(I.DUFF, 'Cerveza Duff', { food: 5 });
item(I.SENZU, 'Semilla del ermitaño', { food: 20, heal: true });
item(I.DBALL, 'Esfera del dragón', { stack: 7 });
item(I.NETHERITE, 'Lingote de netherita');
item(I.SCRAP, 'Fragmento de netherita');
item(I.LEATHER, 'Cuero');
item(I.HOE_STONE, 'Azada de piedra', { stack: 1, tool: { type: 'hoe', tier: 1, speed: 1, dur: 120, lvl: 0, dmg: 2 }, color: [150, 150, 150] });
item(I.HOE_IRON, 'Azada de hierro', { stack: 1, tool: { type: 'hoe', tier: 2, speed: 1, dur: 250, lvl: 0, dmg: 2 }, color: [216, 216, 216] });
item(I.HOE_DIAMOND, 'Azada de diamante', { stack: 1, tool: { type: 'hoe', tier: 3, speed: 1, dur: 1500, lvl: 0, dmg: 2 }, color: [90, 240, 230] });
item(I.BOW, 'Arco', { stack: 1, tool: { type: 'bow', tier: 0, speed: 1, dur: 380, lvl: 0, dmg: 1 }, color: [150, 100, 50] });
item(I.ARROW, 'Flecha'); item(I.BUCKET, 'Cubo', { stack: 16 }); item(I.WATER_BUCKET, 'Cubo de agua', { stack: 1 }); item(I.LAVA_BUCKET, 'Cubo de lava', { stack: 1 });
item(I.SEEDS, 'Semillas'); item(I.WHEAT, 'Trigo'); item(I.BREAD, 'Pan', { food: 8 });
item(I.SHEARS, 'Tijeras', { stack: 1, tool: { type: 'shears', tier: 1, speed: 4, dur: 240, lvl: 0, dmg: 1 }, color: [210, 210, 220] });
item(I.COMPASS, 'Brújula', { stack: 1 });
item(I.BOTTLE, 'Botella de cristal'); item(I.WART, 'Verruga del Nether'); item(I.BLAZE_POWDER, 'Polvo de blaze'); item(I.MAGMA_CREAM, 'Crema de magma'); item(I.LAPIS, 'Lapislázuli'); item(I.BOOK, 'Libro');
// ---------- Pociones: botella + verruga del Nether + ingrediente (en el soporte de pociones) ----------
export const POTIONS = [
  { k: 'heal', id: 180, name: 'Poción de curación', color: [232, 60, 80], ing: I.APPLE, dur: 0, desc: 'Cura 5 corazones al instante' },
  { k: 'regen', id: 181, name: 'Poción de regeneración', color: [240, 120, 200], ing: I.GOLD, dur: 45, desc: 'Regenera vida durante 45 s' },
  { k: 'speed', id: 182, name: 'Poción de rapidez', color: [90, 200, 240], ing: I.IRON, dur: 180, desc: 'Velocidad +30 % durante 3 min' },
  { k: 'strength', id: 183, name: 'Poción de fuerza', color: [200, 60, 40], ing: I.BLAZE_POWDER, dur: 180, desc: 'Más daño durante 3 min' },
  { k: 'fire', id: 184, name: 'Poción de resistencia al fuego', color: [255, 150, 40], ing: I.MAGMA_CREAM, dur: 180, desc: 'Inmune a fuego y lava 3 min' },
  { k: 'jump', id: 185, name: 'Poción de salto', color: [90, 230, 90], ing: I.LEATHER, dur: 180, desc: 'Saltas mucho más alto 3 min' },
  { k: 'night', id: 186, name: 'Poción de visión nocturna', color: [90, 90, 220], ing: B.GLOWSTONE, dur: 240, desc: 'Ves en la oscuridad 4 min' },
];
for (const p of POTIONS) item(p.id, p.name, { stack: 4, potion: p.k, color: p.color });
// ---------- Encantamientos ----------
export const ENCHANTS = {
  eficiencia: { name: 'Eficiencia', max: 3, desc: 'Rompe bloques más rápido' },
  fortuna: { name: 'Fortuna', max: 3, desc: 'Más recursos de las menas' },
  afilado: { name: 'Filo', max: 3, desc: '+1,5 de daño por nivel' },
  fuego: { name: 'Aspecto ígneo', max: 2, desc: 'Prende fuego a los enemigos' },
  irrompibilidad: { name: 'Irrompibilidad', max: 3, desc: 'Se desgasta menos' },
  proteccion: { name: 'Protección', max: 3, desc: 'Más defensa' },
  caida: { name: 'Caída de pluma', max: 3, desc: 'Menos daño al caer' },
};
const ROMAN = ['', 'I', 'II', 'III', 'IV'];
export const enchText = (it) => (it && it.ench ? Object.entries(it.ench).map(([k, v]) => ENCHANTS[k].name + ' ' + ROMAN[v]).join(', ') : '');
export function enchantsFor(id) {
  const it = ITEMS[id]; if (!it) return [];
  if (it.tool) return it.tool.type === 'sword' ? ['afilado', 'fuego', 'irrompibilidad'] : ['eficiencia', 'fortuna', 'irrompibilidad'];
  if (it.armor) return it.armor.slot === 3 ? ['proteccion', 'caida', 'irrompibilidad'] : ['proteccion', 'irrompibilidad'];
  return [];
}
// Opción de encantamiento (tier 1-3) determinista a partir de una semilla
export function rollEnchant(id, tier, seed) {
  const list = enchantsFor(id); if (!list.length) return null;
  let s = (seed * 2654435761 + tier * 40503 + id * 9973) >>> 0; const rnd = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
  const out = {}, k = list[Math.floor(rnd() * list.length)];
  out[k] = Math.max(1, Math.min(ENCHANTS[k].max, Math.round(tier - 1 + rnd() * 1.2) || 1));
  if (tier === 3 && list.length > 1 && rnd() < 0.6) { const k2 = list.filter((x) => x !== k)[Math.floor(rnd() * (list.length - 1))]; out[k2] = Math.max(1, Math.min(ENCHANTS[k2].max, 1 + Math.floor(rnd() * 2))); }
  return out;
}
item(I.CHICKEN, 'Pollo crudo', { food: 4 });
item(I.COOKED_CHICKEN, 'Pollo asado', { food: 12 });
item(I.APPLE, 'Manzana', { food: 8 });
item(I.PORK, 'Cerdo crudo', { food: 6 });
item(I.BEEF, 'Ternera cruda', { food: 6 });
item(I.COOKED_PORK, 'Cerdo asado', { food: 14 });
item(I.STEAK, 'Filete', { food: 16 });

export const TIERS = [
  { n: 'de madera', color: [176, 140, 84], speed: 2, dur: 59, lvl: 1, mat: B.PLANKS, dmgB: 0 },
  { n: 'de piedra', color: [140, 140, 140], speed: 4, dur: 131, lvl: 2, mat: B.COBBLE, dmgB: 1 },
  { n: 'de hierro', color: [225, 225, 225], speed: 6, dur: 250, lvl: 3, mat: I.IRON, dmgB: 2 },
  { n: 'de diamante', color: [90, 235, 225], speed: 8, dur: 1561, lvl: 4, mat: I.DIAMOND, dmgB: 3 },
  { n: 'de oro', color: [250, 215, 60], speed: 12, dur: 32, lvl: 1, mat: I.GOLD, dmgB: 0 },          // rápido pero frágil, como en Minecraft
  { n: 'de netherita', color: [78, 68, 76], speed: 9, dur: 2031, lvl: 5, mat: I.NETHERITE, dmgB: 4 }, // la mejor: se mejora desde diamante
];
// Armaduras: puntos por pieza [casco, peto, grebas, botas], durabilidad base y material
export const ARMOR_TIERS = [
  { n: 'de cuero', color: [160, 100, 60], pts: [1, 3, 2, 1], dur: 80, mat: I.LEATHER },
  { n: 'de oro', color: [250, 215, 60], pts: [2, 5, 3, 1], dur: 90, mat: I.GOLD },
  { n: 'de hierro', color: [225, 225, 225], pts: [2, 6, 5, 2], dur: 240, mat: I.IRON },
  { n: 'de diamante', color: [90, 235, 225], pts: [3, 8, 6, 3], dur: 528, mat: I.DIAMOND },
  { n: 'de netherita', color: [78, 68, 76], pts: [4, 9, 7, 4], dur: 592, mat: I.NETHERITE },
];
export const ARMOR_TYPES = [
  { t: 'head', name: 'Casco', rows: ['MMM', 'M M'], dm: 1 },
  { t: 'chest', name: 'Peto', rows: ['M M', 'MMM', 'MMM'], dm: 1.45 },
  { t: 'legs', name: 'Grebas', rows: ['MMM', 'M M', 'M M'], dm: 1.35 },
  { t: 'feet', name: 'Botas', rows: ['M M', 'M M'], dm: 1.15 },
];
export const armorId = (type, tier) => 200 + type * 10 + tier;
export const TOOL_TYPES = [
  { t: 'pick', name: 'Pico', base: 110, dmg: 2, rows: ['MMM', ' S ', ' S '] },
  { t: 'axe', name: 'Hacha', base: 120, dmg: 3, rows: ['MM', 'MS', ' S'] },
  { t: 'shovel', name: 'Pala', base: 130, dmg: 2, rows: ['M', 'S', 'S'] },
  { t: 'sword', name: 'Espada', base: 140, dmg: 4, rows: ['M', 'M', 'S'] },
];

export const RECIPES = [];
function recipe(rows, key, out, n = 1) { RECIPES.push({ pattern: rows, key, out, n }); }

TOOL_TYPES.forEach((tt) => TIERS.forEach((tier, ti) => {
  const id = tt.base + ti;
  item(id, `${tt.name} ${tier.n}`, { stack: 1, tool: { type: tt.t, tier: ti, speed: tier.speed, dur: tier.dur, lvl: tier.lvl, dmg: tt.dmg + tier.dmgB }, color: tier.color });
  if (ti === 5) recipe(['T', 'N'], { T: tt.base + 3, N: I.NETHERITE }, id); // netherita = herramienta de diamante + lingote
  else recipe(tt.rows, { M: tier.mat, S: I.STICK }, id);
}));
ARMOR_TYPES.forEach((at, ai) => ARMOR_TIERS.forEach((tier, ti) => {
  const id = armorId(ai, ti);
  item(id, `${at.name} ${tier.n}`, { stack: 1, armor: { slot: ai, pts: tier.pts[ai], tier: ti, dur: Math.round(tier.dur * at.dm) }, color: tier.color });
  if (ti === 4) recipe(['A', 'N'], { A: armorId(ai, 3), N: I.NETHERITE }, id);
  else recipe(at.rows, { M: tier.mat }, id);
}));
recipe(['SG', 'GS'], { S: I.SCRAP, G: I.GOLD }, I.NETHERITE);
recipe(['G G', ' G '], { G: B.GLASS }, I.BOTTLE, 3);
recipe(['MM', ' S', ' S'], { M: B.COBBLE, S: I.STICK }, I.HOE_STONE); recipe(['MM', ' S', ' S'], { M: I.IRON, S: I.STICK }, I.HOE_IRON); recipe(['MM', ' S', ' S'], { M: I.DIAMOND, S: I.STICK }, I.HOE_DIAMOND);
recipe([' SL', 'S L', ' SL'], { S: I.STICK, L: I.LEATHER }, I.BOW);
recipe(['C', 'S', 'L'], { C: I.COAL, S: I.STICK, L: I.LEATHER }, I.ARROW, 4);
recipe(['I I', ' I '], { I: I.IRON }, I.BUCKET);
recipe(['WWW'], { W: I.WHEAT }, I.BREAD);
recipe([' I', 'I '], { I: I.IRON }, I.SHEARS);
recipe([' I ', 'ICI', ' I '], { I: I.IRON, C: I.COAL }, I.COMPASS);
recipe(['LLL', 'PPP'], { L: I.LEATHER, P: B.PLANKS }, B.BED);
recipe(['CSC', 'SCS', 'CSC'], { C: I.COAL, S: B.SAND }, B.TNT);
recipe(['PPP', 'PPP'], { P: B.PLANKS }, B.TRAPDOOR, 2);
recipe(['SPS', 'SPS'], { S: I.STICK, P: B.PLANKS }, B.GATE);
recipe(['L', 'L', 'L'], { L: I.LEATHER }, I.BOOK);
recipe([' P ', 'CCC'], { P: I.BLAZE_POWDER, C: B.COBBLE }, B.BREWING);
recipe([' B ', 'DOD', 'OOO'], { B: I.BOOK, D: I.DIAMOND, O: B.OBSIDIAN }, B.ENCH_TABLE);
SLAB_MATS.forEach((mat, m) => { recipe(['MMM'], { M: mat }, SLAB_BOTTOM(m), 6); recipe(['S', 'S'], { S: SLAB_BOTTOM(m) }, mat); });
STAIR_MATS.forEach((mat, m) => recipe(['M  ', 'MM ', 'MMM'], { M: mat }, STAIR_ID(m, 0), 4));
recipe(['PSP', 'PSP'], { P: B.PLANKS, S: I.STICK }, FENCE, 3);
recipe(['PP', 'PP', 'PP'], { P: B.PLANKS }, DOOR_LO, 3);
recipe(['L'], { L: B.LOG }, B.PLANKS, 4);
recipe(['L'], { L: B.CHERRY_LOG }, B.CHERRY_PLANKS, 4);
recipe(['PP', 'PP'], { P: B.CHERRY_PLANKS }, B.TABLE);
recipe(['SS', 'SS'], { S: B.RED_SAND }, B.TERRA_ORANGE, 4);
recipe(['P', 'P'], { P: B.PLANKS }, I.STICK, 4);
recipe(['PP', 'PP'], { P: B.PLANKS }, B.TABLE);
recipe(['SS', 'SS'], { S: B.SAND }, B.GLASS, 4);
recipe(['CC', 'CC'], { C: B.COBBLE }, B.BRICKS, 4);
recipe(['CCC', 'C C', 'CCC'], { C: B.COBBLE }, B.FURNACE);
recipe(['C', 'S'], { C: I.COAL, S: I.STICK }, B.TORCH, 4);
recipe(['CCC', 'CDC', 'CCC'], { C: B.COBBLE, D: I.DIAMOND }, B.OBSIDIAN, 2);
recipe(['I', 'C'], { I: I.IRON, C: I.COAL }, I.LIGHTER);
recipe(['P', 'C'], { P: I.PEARL, C: I.COAL }, I.EYE);
recipe(['OOO', 'ODO', 'OOO'], { O: B.OBSIDIAN, D: I.DIAMOND }, B.END_FRAME, 4);
recipe(['DGD', 'GCG', 'DGD'], { D: I.DIAMOND, G: I.GOLD, C: I.COAL }, B.COMMAND);

// Fundición: entrada -> [salida, cantidad]; combustible -> segundos de llama
export const SMELT = {
  [B.IRON_ORE]: [I.IRON, 1], [B.GOLD_ORE]: [I.GOLD, 1], [B.COBBLE]: [B.STONE, 1], [B.SAND]: [B.GLASS, 1],
  [B.LOG]: [I.COAL, 1], [B.CHERRY_LOG]: [I.COAL, 1], [B.MUD]: [B.TERRA_BROWN, 1], [I.PORK]: [I.COOKED_PORK, 1], [I.BEEF]: [I.STEAK, 1], [I.CHICKEN]: [I.COOKED_CHICKEN, 1], [B.ANCIENT_DEBRIS]: [I.SCRAP, 1],
};
export const FUEL = { [I.COAL]: 80, [B.LOG]: 15, [B.CHERRY_LOG]: 15, [B.CHERRY_PLANKS]: 15, [B.PLANKS]: 15, [B.TABLE]: 15, [I.STICK]: 5 };
export const SMELT_TIME = 8;

export function info(id) { return BLOCKS[id] || ITEMS[id]; }
export function maxStack(id) { const i = info(id); return BLOCKS[id] ? 64 : i.stack; }
export const isBlock = (id) => !!BLOCKS[id];
export const isFlat = (id) => !BLOCKS[id] || !!BLOCKS[id].flat;

// Receta que encaja con la rejilla (size x size); ids, 0 = vacío
export function matchRecipe(grid, size) {
  let minR = size, maxR = -1, minC = size, maxC = -1;
  for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (grid[r * size + c]) {
    minR = Math.min(minR, r); maxR = Math.max(maxR, r); minC = Math.min(minC, c); maxC = Math.max(maxC, c);
  }
  if (maxR < 0) return null;
  const h = maxR - minR + 1, w = maxC - minC + 1;
  for (const rec of RECIPES) {
    if (rec.pattern.length !== h || rec.pattern[0].length !== w) continue;
    for (const mirror of [false, true]) {
      let ok = true;
      for (let r = 0; r < h && ok; r++) for (let c = 0; c < w; c++) {
        const ch = rec.pattern[r][mirror ? w - 1 - c : c];
        const want = ch === ' ' ? 0 : rec.key[ch];
        if (grid[(minR + r) * size + minC + c] !== want) { ok = false; break; }
      }
      if (ok) return rec;
    }
  }
  return null;
}

// ---------- Minería ----------
export function toolOf(slot) { return slot && ITEMS[slot.id] && ITEMS[slot.id].tool; }

export function canHarvest(blockId, slot) {
  const b = BLOCKS[blockId];
  if (!b.lvl) return true;
  const t = toolOf(slot);
  return !!t && t.type === 'pick' && t.lvl >= b.lvl;
}

// Segundos para romper el bloque con el ítem en mano
export function breakTime(blockId, slot) {
  const b = BLOCKS[blockId];
  if (b.hardness === Infinity) return Infinity;
  const t = toolOf(slot);
  const match = t && b.tool && t.type === b.tool;
  const ok = canHarvest(blockId, slot);
  const speed = (match ? t.speed : 1) * (1 + 0.4 * ((slot && slot.ench && slot.ench.eficiencia) || 0));
  return (b.hardness * (ok ? 1.5 : 5)) / speed;
}

// [id, cantidad] o null
export function dropOf(blockId, slot) {
  if (!canHarvest(blockId, slot)) return null;
  if (BLOCKS[blockId] && BLOCKS[blockId].dropAs) return [BLOCKS[blockId].dropAs, 1];
  switch (blockId) {
    case B.GRASS: return [B.DIRT, 1];
    case B.STONE: return [B.COBBLE, 1];
    case B.COAL_ORE: return [I.COAL, 1];
    case B.DIAMOND_ORE: return [I.DIAMOND, 1];
    case B.LEAVES: return Math.random() < 0.1 ? [I.APPLE, 1] : null;
    case B.CHERRY_LEAVES: return Math.random() < 0.05 ? [I.APPLE, 1] : null;
    case B.CHEST_OPEN: return [B.CHEST, 1];
    case B.GOLD_BLOCK: return [I.GOLD, 9];
    case B.GRASS: return Math.random() < 0.1 ? [I.SEEDS, 1] : [B.DIRT, 1];
    case B.WHEAT_CROP: case B.WHEAT_CROP + 1: case B.WHEAT_CROP + 2: case B.WHEAT_CROP + 3: return [I.SEEDS, 1 + (Math.random() < 0.5 ? 1 : 0)];
    case B.LAPIS_ORE: return [I.LAPIS, 4 + Math.floor(Math.random() * 5)];
    case B.SOUL_SAND: return Math.random() < 0.2 ? [I.WART, 1] : [B.SOUL_SAND, 1];
    case B.GLASS: case B.WATER: case B.LAVA: case B.NETHER_PORTAL: case B.END_PORTAL: case B.END_FRAME: case B.END_FRAME_EYE: return null;
    default: return [blockId, 1];
  }
}

// Edición limpia: nombres sin marcas ajenas
for (const d of [...Object.values(BLOCKS), ...Object.values(ITEMS)]) d.name = clean(d.name);

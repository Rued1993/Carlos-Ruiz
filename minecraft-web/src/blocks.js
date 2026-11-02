// Bloques, ítems, herramientas y recetas.
export const AIR = 0;

export const B = {
  GRASS: 1, DIRT: 2, STONE: 3, SAND: 4, LOG: 5, LEAVES: 6, PLANKS: 7, COBBLE: 8,
  WATER: 9, GLASS: 10, COAL_ORE: 11, IRON_ORE: 12, GOLD_ORE: 13, DIAMOND_ORE: 14,
  BEDROCK: 15, SNOW: 16, CACTUS: 17, BRICKS: 18, TABLE: 19, TORCH: 20, FURNACE: 21, COMMAND: 22,
  OBSIDIAN: 23, NETHER_PORTAL: 24, NETHERRACK: 25, SOUL_SAND: 26, GLOWSTONE: 27, LAVA: 28, NETHER_BRICKS: 29,
  END_STONE: 30, END_FRAME: 31, END_FRAME_EYE: 32, END_PORTAL: 33,
  PURPUR: 34, END_BRICKS: 35, CHEST: 36, CHEST_OPEN: 37,
  SANDSTONE: 38, MOSSY_COBBLE: 39, ANCIENT_DEBRIS: 40, GOLD_BLOCK: 41,
};
export const I = { STICK: 100, COAL: 101, IRON: 102, GOLD: 103, DIAMOND: 104, APPLE: 150, PORK: 151, BEEF: 152, COOKED_PORK: 153, STEAK: 154, STAR: 105, PEARL: 106, LIGHTER: 107, EYE: 108, ELYTRA: 109,
  DONUT: 160, DUFF: 161, SENZU: 162, DBALL: 163, NETHERITE: 170, SCRAP: 171, LEATHER: 172, CHICKEN: 155, COOKED_CHICKEN: 156 };

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
block(B.FURNACE, 'Horno', ['furnace_top', 'stone', 'furnace_front'], 3, 'pick', 1);

// Tablas rápidas por id
export const OPAQUE = new Uint8Array(256);
export const SOLID = new Uint8Array(256);
export const LIQUID = new Uint8Array(256);
export const GHOST = new Uint8Array(256);  // se atraviesan y no se pueden apuntar (portales)
export const EMIT = new Uint8Array(256);   // emiten luz
for (const b of Object.values(BLOCKS)) {
  OPAQUE[b.id] = b.opaque ? 1 : 0;
  SOLID[b.id] = b.liquid || b.torch || b.portal ? 0 : 1;
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
recipe(['L'], { L: B.LOG }, B.PLANKS, 4);
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
  [B.LOG]: [I.COAL, 1], [I.PORK]: [I.COOKED_PORK, 1], [I.BEEF]: [I.STEAK, 1], [I.CHICKEN]: [I.COOKED_CHICKEN, 1], [B.ANCIENT_DEBRIS]: [I.SCRAP, 1],
};
export const FUEL = { [I.COAL]: 80, [B.LOG]: 15, [B.PLANKS]: 15, [B.TABLE]: 15, [I.STICK]: 5 };
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
  const speed = match ? t.speed : 1;
  return (b.hardness * (ok ? 1.5 : 5)) / speed;
}

// [id, cantidad] o null
export function dropOf(blockId, slot) {
  if (!canHarvest(blockId, slot)) return null;
  switch (blockId) {
    case B.GRASS: return [B.DIRT, 1];
    case B.STONE: return [B.COBBLE, 1];
    case B.COAL_ORE: return [I.COAL, 1];
    case B.DIAMOND_ORE: return [I.DIAMOND, 1];
    case B.LEAVES: return Math.random() < 0.1 ? [I.APPLE, 1] : null;
    case B.CHEST_OPEN: return [B.CHEST, 1];
    case B.GOLD_BLOCK: return [I.GOLD, 9];
    case B.GLASS: case B.WATER: case B.LAVA: case B.NETHER_PORTAL: case B.END_PORTAL: case B.END_FRAME: case B.END_FRAME_EYE: return null;
    default: return [blockId, 1];
  }
}

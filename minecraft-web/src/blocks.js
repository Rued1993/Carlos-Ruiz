// Definición de bloques. tiles = [arriba, abajo, lados] (nombres de textura del atlas)
export const AIR = 0;

export const BLOCKS = {
  1: { name: 'Hierba', tiles: ['grass_top', 'dirt', 'grass_side'] },
  2: { name: 'Tierra', tiles: ['dirt', 'dirt', 'dirt'] },
  3: { name: 'Piedra', tiles: ['stone', 'stone', 'stone'] },
  4: { name: 'Arena', tiles: ['sand', 'sand', 'sand'] },
  5: { name: 'Tronco', tiles: ['log_top', 'log_top', 'log_side'] },
  6: { name: 'Hojas', tiles: ['leaves', 'leaves', 'leaves'] },
  7: { name: 'Tablones', tiles: ['planks', 'planks', 'planks'] },
  8: { name: 'Adoquín', tiles: ['cobble', 'cobble', 'cobble'] },
};

export const HOTBAR = [1, 2, 3, 4, 5, 6, 7, 8];

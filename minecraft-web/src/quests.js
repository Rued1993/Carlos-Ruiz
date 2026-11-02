// Misiones: aprendizaje, caza y derrotar a todos los jefes.
import { B, I } from './blocks.js';

export const QUESTS = [
  // Aprendiz
  { id: 'logs', group: 'Aprendiz', title: 'Primeros pasos', desc: 'Recoge 3 troncos', ev: 'collect', target: B.LOG, n: 3, reward: [[I.APPLE, 4]], xp: 8 },
  { id: 'table', group: 'Aprendiz', title: 'Carpintero', desc: 'Fabrica una mesa de crafteo', ev: 'craft', target: B.TABLE, n: 1, reward: [[B.PLANKS, 16]], xp: 8 },
  { id: 'pick', group: 'Aprendiz', title: 'Minero', desc: 'Fabrica un pico de piedra', ev: 'craft', target: 111, n: 1, reward: [[I.COAL, 8]], xp: 10 },
  { id: 'a_iron', group: 'Aprendiz', title: 'Armado hasta los dientes', desc: 'Fabrica un peto de hierro', ev: 'craft', target: 212, n: 1, reward: [[I.DIAMOND, 2]], xp: 30 },
  { id: 'a_gold', group: 'Aprendiz', title: 'Fiebre del oro', desc: 'Fabrica una espada de oro', ev: 'craft', target: 144, n: 1, reward: [[I.GOLD, 6]], xp: 20 },
  { id: 'a_nether', group: 'Dimensiones', title: 'Forjado en el Nether', desc: 'Consigue un lingote de netherita (restos antiguos + oro)', ev: 'collect', target: I.NETHERITE, n: 1, reward: [[I.DIAMOND, 6]], xp: 120 },
  { id: 'torch', group: 'Aprendiz', title: 'Luz en la oscuridad', desc: 'Fabrica 4 antorchas', ev: 'craft', target: B.TORCH, n: 4, reward: [[I.COAL, 8]], xp: 10 },
  { id: 'iron', group: 'Aprendiz', title: 'Fundidor', desc: 'Consigue un lingote de hierro', ev: 'collect', target: I.IRON, n: 1, reward: [[I.COAL, 16]], xp: 15 },
  { id: 'diamond', group: 'Aprendiz', title: '¡Diamantes!', desc: 'Consigue un diamante', ev: 'collect', target: I.DIAMOND, n: 1, reward: [[I.GOLD, 6]], xp: 25 },
  // Cazador
  { id: 'k_zombie', group: 'Cazador', title: 'Cazador de zombis', desc: 'Derrota 3 zombis', ev: 'kill', target: 'zombie', n: 3, reward: [[I.STEAK, 4]], xp: 15 },
  { id: 'k_skeleton', group: 'Cazador', title: 'Huesos rotos', desc: 'Derrota 3 esqueletos', ev: 'kill', target: 'skeleton', n: 3, reward: [[I.STEAK, 4]], xp: 18 },
  { id: 'k_creeper', group: 'Cazador', title: 'Silencio…', desc: 'Derrota 2 creepers', ev: 'kill', target: 'creeper', n: 2, reward: [[I.GOLD, 4]], xp: 18 },
  { id: 'k_spider', group: 'Cazador', title: 'Aracnofobia', desc: 'Derrota 2 arañas', ev: 'kill', target: 'spider', n: 2, reward: [[I.GOLD, 4]], xp: 16 },
  { id: 'pearl', group: 'Cazador', title: 'Ojos que miran', desc: 'Consigue una perla de Ender', ev: 'collect', target: I.PEARL, n: 1, reward: [[I.DIAMOND, 3]], xp: 30 },
  // Dimensiones
  { id: 'obsidian', group: 'Dimensiones', title: 'Cristal volcánico', desc: 'Consigue obsidiana (8 adoquines + 1 diamante = 2)', ev: 'collect', target: B.OBSIDIAN, n: 1, reward: [[I.COAL, 12]], xp: 20 },
  { id: 'd_nether', group: 'Dimensiones', title: 'Una puerta al infierno', desc: 'Entra al Nether (marco 4x5 de obsidiana + encendedor)', ev: 'dim', target: 'nether', n: 1, reward: [[I.GOLD, 8], [I.DIAMOND, 4]], xp: 80 },
  { id: 'k_blaze', group: 'Dimensiones', title: 'Fuego cruzado', desc: 'Derrota a 2 blazes', ev: 'kill', target: 'blaze', n: 2, reward: [[I.DIAMOND, 4]], xp: 40 },
  { id: 'k_piglin', group: 'Dimensiones', title: 'Oro maldito', desc: 'Derrota a 3 piglins zombificados', ev: 'kill', target: 'piglin', n: 3, reward: [[I.GOLD, 8]], xp: 35 },
  { id: 'k_wskel', group: 'Dimensiones', title: 'Huesos negros', desc: 'Derrota a 2 esqueletos Wither', ev: 'kill', target: 'witherskeleton', n: 2, reward: [[I.DIAMOND, 4]], xp: 50 },
  { id: 'k_ghast', group: 'Dimensiones', title: 'Lágrimas de fuego', desc: 'Derrota a un Ghast', ev: 'kill', target: 'ghast', n: 1, reward: [[I.GOLD, 10]], xp: 50 },
  { id: 'k_shulker', group: 'Dimensiones', title: 'Caja sorpresa', desc: 'Derrota a 2 shulkers', ev: 'kill', target: 'shulker', n: 2, reward: [[I.PEARL, 2]], xp: 60 },
  { id: 'chests', group: 'Dimensiones', title: 'Cazatesoros', desc: 'Abre 3 cofres de fortalezas o ciudades del End', ev: 'chest', target: 'x', n: 3, reward: [[I.DIAMOND, 4], [I.GOLD, 8]], xp: 70 },
  { id: 'elytra', group: 'Dimensiones', title: '¡A volar!', desc: 'Consigue unos élitros (naves de las ciudades del End)', ev: 'collect', target: I.ELYTRA, n: 1, reward: [[I.STAR, 1]], xp: 120 },
  { id: 'd_end', group: 'Dimensiones', title: 'El fin de todo', desc: 'Entra al End (12 marcos con ojo de Ender)', ev: 'dim', target: 'end', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  // Jefes
  { id: 'b_storm', group: 'Jefes', title: 'Domador de la tormenta', desc: 'Derrota a la Tormenta Wither', ev: 'boss', target: 'storm', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_dragon', group: 'Jefes', title: '¿El final?', desc: 'Derrota al Ender Dragon', ev: 'boss', target: 'dragon', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_wither', group: 'Jefes', title: 'Más allá de los huesos', desc: 'Derrota al Wither', ev: 'boss', target: 'wither', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_warden', group: 'Jefes', title: 'Silencio absoluto', desc: 'Derrota al Warden', ev: 'boss', target: 'warden', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_guardian', group: 'Jefes', title: 'La mirada del océano', desc: 'Derrota al Guardián Ancestral', ev: 'boss', target: 'guardian', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_ravager', group: 'Jefes', title: 'Contra la embestida', desc: 'Derrota al Devastador', ev: 'boss', target: 'ravager', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_evoker', group: 'Jefes', title: 'Colmillos y vex', desc: 'Derrota al Invocador', ev: 'boss', target: 'evoker', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_ghast', group: 'Jefes', title: 'Devuélvesela', desc: 'Derrota al Ghast Gigante', ev: 'boss', target: 'ghast', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_slime', group: 'Jefes', title: 'Aplastado', desc: 'Derrota al Rey Slime', ev: 'boss', target: 'slimeking', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 150 },
  { id: 'b_hero', group: 'Jefes', title: 'Más allá del mito', desc: 'Derrota a Herobrine', ev: 'boss', target: 'herobrine', n: 1, reward: [[I.STAR, 2], [I.DIAMOND, 16]], xp: 250 },
  { id: 'b_colossus', group: 'Jefes', title: 'Hierro contra hierro', desc: 'Derrota al Gólem Colosal', ev: 'boss', target: 'colossus', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 160 },
  { id: 'b_creepert', group: 'Jefes', title: 'Silencio… colosal', desc: 'Derrota al Creeper Titán', ev: 'boss', target: 'creepertitan', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 160 },
  { id: 'b_blazek', group: 'Jefes', title: 'Rey de las llamas', desc: 'Derrota al Rey Blaze', ev: 'boss', target: 'blazeking', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 160 },
  { id: 'b_piglink', group: 'Jefes', title: 'Corona de oro', desc: 'Derrota al Rey Piglin', ev: 'boss', target: 'piglinking', n: 1, reward: [[I.STAR, 2], [I.DIAMOND, 10]], xp: 180 },
  { id: 'b_endert', group: 'Jefes', title: 'No mires a los ojos', desc: 'Derrota al Enderman Titán', ev: 'boss', target: 'endertitan', n: 1, reward: [[I.STAR, 2], [I.DIAMOND, 12]], xp: 200 },
  { id: 'b_voidl', group: 'Jefes', title: 'Al borde del vacío', desc: 'Derrota al Señor del Vacío', ev: 'boss', target: 'voidlord', n: 1, reward: [[I.STAR, 2], [I.DIAMOND, 12]], xp: 200 },
  { id: 'b_goku', group: 'Jefes', title: '¡Es más de 9000!', desc: 'Derrota a Goku', ev: 'boss', target: 'goku', n: 1, reward: [[I.STAR, 2], [I.DIAMOND, 12]], xp: 250 },
  { id: 'b_burns', group: 'Jefes', title: 'Excelente…', desc: 'Derrota al Sr. Burns', ev: 'boss', target: 'burns', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 180 },
  { id: 'b_impostor', group: 'Jefes', title: 'Eyectado', desc: 'Derrota al Impostor Supremo', ev: 'boss', target: 'impostor', n: 1, reward: [[I.STAR, 1], [I.DIAMOND, 8]], xp: 180 },
  { id: 'k_impostor', group: 'Cazador', title: 'Sospechoso', desc: 'Derrota a 3 impostores', ev: 'kill', target: 'impostor', n: 3, reward: [[I.GOLD, 8]], xp: 40 },
  { id: 'k_saiba', group: 'Cazador', title: 'Semillas del Saiyajin', desc: 'Derrota a 2 saibamen', ev: 'kill', target: 'saibaman', n: 2, reward: [[I.SENZU, 1]], xp: 40 },
  { id: 'd_balls', group: 'Dimensiones', title: '¡Sal, Shenron!', desc: 'Reúne las 7 Bolas de Dragón', ev: 'collect', target: I.DBALL, n: 7, reward: [[I.DIAMOND, 6]], xp: 300 },
  { id: 'p_brew', group: 'Aprendiz', title: 'Alquimista', desc: 'Prepara una poción de curación en el soporte de pociones', ev: 'craft', target: 180, n: 1, reward: [[I.GOLD, 4]], xp: 60 },
  { id: 'p_ench', group: 'Aprendiz', title: 'Mago', desc: 'Encanta un objeto en la mesa de encantamientos', ev: 'enchant', target: 'x', n: 1, reward: [[I.LAPIS, 6]], xp: 80 },
  { id: 'p_lapis', group: 'Aprendiz', title: 'Azul profundo', desc: 'Consigue 6 lapislázuli', ev: 'collect', target: I.LAPIS, n: 6, reward: [[I.DIAMOND, 2]], xp: 40 },
  { id: 'master', group: 'Jefes', title: '★ LEYENDA DE LOS JEFES ★', desc: 'Derrota a los 19 jefes (y crossovers)', ev: 'bossall', target: null, n: 19, reward: [[I.STAR, 5], [I.DIAMOND, 32], [I.GOLD, 32]], xp: 500 },
];

export class Quests {
  constructor(hooks) { this.h = hooks; this.progress = {}; this.done = {}; this.bosses = new Set(); } // hooks: reward(items), toast, xp, sound
  event(ev, target, n = 1) {
    for (const q of QUESTS) {
      if (this.done[q.id] || q.ev !== ev || (q.target !== null && q.target !== target)) continue;
      this.progress[q.id] = Math.min(q.n, (this.progress[q.id] || 0) + n);
      if (this.progress[q.id] >= q.n) this.complete(q);
    }
    if (ev === 'boss') {
      this.bosses.add(target);
      const m = QUESTS.find((q) => q.id === 'master');
      if (!this.done.master) { this.progress.master = this.bosses.size; if (this.bosses.size >= m.n) this.complete(m); }
    }
  }
  complete(q) {
    this.done[q.id] = true; this.progress[q.id] = q.n;
    this.h.reward(q.reward); this.h.xp(q.xp); this.h.sound('craft');
    this.h.toast(q.id === 'master' ? '🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes' : `✔ Misión completada: ${q.title}`);
  }
  active(max = 3) { return QUESTS.filter((q) => !this.done[q.id]).slice(0, max); }
  total() { return QUESTS.length; }
  completed() { return QUESTS.filter((q) => this.done[q.id]).length; }
  toJSON() { return { progress: this.progress, done: this.done, bosses: [...this.bosses] }; }
  load(o) { if (o) { this.progress = o.progress || {}; this.done = o.done || {}; this.bosses = new Set(o.bosses || []); } }
}

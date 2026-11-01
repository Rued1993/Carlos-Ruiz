/**
 * Reto diario: misión generada a partir de la fecha (igual para todos los jugadores ese día).
 */
'use strict';

function dateSeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
function dailyDef() {
  const seed = dateSeed(),
    r = (k, a, b) => a + Math.floor(hash(seed, k, 11) * (b - a + 1)),
    kind = seed % 3;
  const id = 'D' + seed;
  if (kind === 0)
    return {
      id,
      name: 'Reto: Caza de impostores',
      mode: 'classic',
      cfg: { nImp: 2, role: 'crew', sabFast: true },
      par: 420 + r(1, 0, 120),
      limit: 840,
      desc: 'Hoy hay dos impostores y los sabotajes no paran. Repara y vota con cabeza.',
      goals: [
        { k: 'fix', need: r(2, 1, 2), text: 'Repara sabotajes' },
        { k: 'ejectImp', need: 2, text: 'Expulsa a los 2 impostores' },
      ],
    };
  if (kind === 1) {
    const kills = r(3, 18, 32);
    return {
      id,
      name: 'Reto: Marea zombi',
      mode: 'zombie',
      cfg: { waves: 4, escape: false, weapons: ['pistola'], ammo: 70 },
      par: 280 + r(4, 0, 80),
      limit: 700,
      desc: 'Empiezas con una pistola. Aguanta cuatro oleadas y llévate por delante a cuantos puedas.',
      goals: [
        { k: 'zkill', need: kills, text: `Elimina a ${kills} zombis` },
        { k: 'wave', need: 4, text: 'Sobrevive 4 oleadas' },
      ],
    };
  }
  const wood = r(5, 14, 24);
  return {
    id,
    name: 'Reto: Cocina de campaña',
    mode: 'sandbox',
    cfg: {},
    par: 420 + r(6, 0, 120),
    limit: 900,
    desc: 'Consigue madera, monta un horno, caza y cocina carne antes de que acabe el tiempo.',
    goals: [
      { k: 'item:madera', need: wood, text: `Recoge ${wood} de madera` },
      { k: 'craft:horno', need: 1, text: 'Fabrica un horno' },
      { k: 'animal', need: 3, text: 'Caza 3 animales' },
      { k: 'cook', need: 2, text: 'Cocina 2 carnes' },
    ],
  };
}

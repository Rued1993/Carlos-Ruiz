/**
 * Guardado, niveles, capítulos de la historia y guiones de las cinemáticas.
 */
'use strict';

const SAVE = (() => {
  const d = { story: 0, stars: {}, music: true, quality: 1 };
  try {
    Object.assign(d, JSON.parse(localStorage.getItem('nebula7') || '{}'));
  } catch (e) {}
  return d;
})();
function saveGame() {
  try {
    localStorage.setItem('nebula7', JSON.stringify(SAVE));
  } catch (e) {}
}
let CAMP = null,
  CUT = null,
  BRIEF = null;
const MODE_ICON = { classic: '🕵', zombie: '🧟', sandbox: '⛏' },
  MODE_NAME = { classic: 'Impostor', zombie: 'Zombis', sandbox: 'Mundo cubo' };
const ALLCREW = [
  'Rojo',
  'Azul',
  'Verde',
  'Rosa',
  'Naranja',
  'Amarillo',
  'Negro',
  'Blanco',
  'Morado',
];

const LEVELS = [
  {
    id: 'L1',
    name: 'Primer Turno',
    mode: 'classic',
    cfg: { nImp: 1, role: 'crew' },
    par: 150,
    desc: 'Tu primer día de trabajo en la nave. Haz las tareas que te asignaron mientras vigilas que nadie actúe raro.',
    goals: [{ k: 'task', need: 4, text: 'Completa 4 tareas' }],
  },
  {
    id: 'L2',
    name: 'Mano Dura',
    mode: 'classic',
    cfg: { nImp: 1, role: 'crew' },
    par: 260,
    limit: 600,
    desc: 'Hay un impostor a bordo. Reúne pistas, convoca una reunión y vota con cabeza: un error cuesta caro.',
    goals: [{ k: 'ejectImp', need: 1, text: 'Expulsa al impostor' }],
  },
  {
    id: 'L3',
    name: 'Doble Cara',
    mode: 'classic',
    cfg: { nImp: 2, role: 'crew' },
    par: 420,
    limit: 900,
    desc: 'Esta vez son dos. Se cubren entre ellos y votan juntos. Necesitarás testigos.',
    goals: [{ k: 'ejectImp', need: 2, text: 'Expulsa a los 2 impostores' }],
  },
  {
    id: 'L4',
    name: 'Sangre Fría',
    mode: 'classic',
    cfg: { nImp: 1, role: 'imp' },
    par: 200,
    limit: 480,
    desc: 'Cambio de bando: eres el impostor. Usa las ventilaciones, no dejes testigos y que no te pillen.',
    goals: [{ k: 'pkill', need: 4, text: 'Elimina a 4 tripulantes' }],
  },
  {
    id: 'L5',
    name: 'Apagón',
    mode: 'classic',
    cfg: { nImp: 2, role: 'crew', sabFast: true },
    par: 320,
    limit: 720,
    desc: 'Los impostores no paran de sabotear. Mantén la nave a flote y sigue con tus tareas.',
    goals: [
      { k: 'task', need: 3, text: 'Completa 3 tareas' },
      { k: 'fix', need: 2, text: 'Repara 2 sabotajes' },
    ],
  },
  {
    id: 'L6',
    name: 'Primera Noche',
    mode: 'zombie',
    cfg: { waves: 2, escape: false },
    par: 140,
    desc: 'Los zombis llegan en oleadas. En la primera no tienes arma: corre. En la segunda recibirás una pistola.',
    goals: [{ k: 'wave', need: 2, text: 'Sobrevive 2 oleadas' }],
  },
  {
    id: 'L7',
    name: 'Cazador',
    mode: 'zombie',
    cfg: { waves: 5, escape: false, weapons: ['pistola'], ammo: 80 },
    par: 230,
    limit: 600,
    desc: 'Empiezas armado. Limpia el pasillo: cada zombi que cae es uno menos.',
    goals: [{ k: 'zkill', need: 15, text: 'Elimina 15 zombis' }],
  },
  {
    id: 'L8',
    name: 'Evacuación',
    mode: 'zombie',
    cfg: { waves: 3, escape: true },
    par: 290,
    desc: 'Resiste tres oleadas y corre a la cápsula de escape de Navegación antes de que te alcancen.',
    goals: [
      { k: 'wave', need: 3, text: 'Sobrevive 3 oleadas' },
      { k: 'escape', need: 1, text: 'Escapa en la cápsula' },
    ],
  },
  {
    id: 'L9',
    name: 'El Alfa',
    mode: 'zombie',
    cfg: { waves: 2, boss: true, escape: false, weapons: ['pistola', 'escopeta'], ammo: 70 },
    par: 200,
    desc: 'El primer infectado ha mutado. Es enorme, aguanta muchos disparos y golpea fuerte. Mantén la distancia.',
    goals: [{ k: 'boss', need: 1, text: 'Derrota al Alfa' }],
  },
  {
    id: 'L10',
    name: 'Leñador',
    mode: 'sandbox',
    cfg: {},
    par: 260,
    desc: 'Un mundo de cubos. Tala árboles, fabrica tablones, una mesa de trabajo y un hacha.',
    goals: [
      { k: 'item:madera', need: 12, text: 'Recoge 12 de madera' },
      { k: 'craft:mesa', need: 1, text: 'Fabrica una mesa' },
      { k: 'craft:hacha', need: 1, text: 'Fabrica un hacha' },
    ],
  },
  {
    id: 'L11',
    name: 'Mi Casa',
    mode: 'sandbox',
    cfg: {},
    par: 480,
    desc: 'Construye un refugio y alúmbralo. Cuando oscurezca saldrán zombis: aguanta hasta el amanecer.',
    goals: [
      { k: 'place', need: 25, text: 'Coloca 25 bloques' },
      { k: 'place:antorcha', need: 3, text: 'Coloca 3 antorchas' },
      { k: 'night', need: 1, text: 'Sobrevive una noche' },
    ],
  },
  {
    id: 'L12',
    name: 'Explorador',
    mode: 'sandbox',
    cfg: {},
    par: 420,
    desc: 'Hay cofres escondidos y vetas de carbón por todo el mapa. Sal a explorar.',
    goals: [
      { k: 'chest', need: 4, text: 'Abre 4 cofres' },
      { k: 'item:carbon', need: 5, text: 'Consigue 5 de carbón' },
    ],
  },
];
const CHAPTERS = [
  {
    id: 'S1',
    name: 'Despertar',
    mode: 'classic',
    cfg: { nImp: 1, role: 'crew' },
    par: 420,
    intro: 'prologo',
    outro: 'c1_out',
    desc: 'La Nébula-7 despierta con los sistemas en llamas. Alguien los saboteó.',
    goals: [
      { k: 'task', need: 3, text: 'Repara 3 sistemas de la nave' },
      { k: 'ejectImp', need: 1, text: 'Expulsa al saboteador' },
    ],
  },
  {
    id: 'S2',
    name: 'Contagio',
    mode: 'zombie',
    cfg: { waves: 2, escape: true },
    par: 240,
    intro: 'c2_in',
    outro: 'c2_out',
    desc: 'La esquirla del Cubo ha infectado a la tripulación. Huye hasta la cápsula.',
    goals: [
      { k: 'wave', need: 2, text: 'Sobrevive 2 oleadas' },
      { k: 'escape', need: 1, text: 'Llega a la cápsula de escape' },
    ],
  },
  {
    id: 'S3',
    name: 'Planeta Cubo',
    mode: 'sandbox',
    cfg: {},
    par: 600,
    intro: 'c3_in',
    outro: 'c3_out',
    desc: 'Un mundo hecho de bloques. Construye una baliza para pedir rescate.',
    goals: [
      { k: 'item:madera', need: 8, text: 'Recoge 8 de madera' },
      { k: 'craft:mesa', need: 1, text: 'Fabrica una mesa de trabajo' },
      { k: 'craft:hacha', need: 1, text: 'Fabrica un hacha' },
      { k: 'place:antorcha', need: 4, text: 'Enciende 4 antorchas (la baliza)' },
      { k: 'night', need: 1, text: 'Sobrevive hasta el amanecer' },
    ],
  },
  {
    id: 'S4',
    name: 'El Traidor',
    mode: 'classic',
    cfg: { nImp: 2, role: 'crew', sabFast: true },
    par: 600,
    intro: 'c4_in',
    outro: 'c4_out',
    desc: 'De vuelta en la nave, dos impostores se esconden entre los supervivientes.',
    goals: [
      { k: 'fix', need: 1, text: 'Repara un sabotaje' },
      { k: 'ejectImp', need: 2, text: 'Expulsa a los 2 impostores' },
    ],
  },
  {
    id: 'S5',
    name: 'El Núcleo',
    mode: 'zombie',
    cfg: { waves: 3, boss: true, escape: true, weapons: ['pistola', 'escopeta'], ammo: 90 },
    par: 360,
    intro: 'c5_in',
    outro: 'final',
    desc: 'El Cubo ha conectado con el reactor. Derrota al Alfa y escapa.',
    goals: [
      { k: 'boss', need: 1, text: 'Derrota al Alfa' },
      { k: 'escape', need: 1, text: 'Escapa de la nave' },
    ],
  },
];
const CUTS = {
  prologo: [
    {
      w: 'NARRADOR',
      bg: 'space',
      cast: [],
      t: 'Año 2187. La nave de exploración Nébula-7 se dirige hacia una anomalía que los astrónomos llaman… El Cubo.',
    },
    {
      w: 'NARRADOR',
      t: 'Un objeto perfecto: seis caras, trescientos metros de lado, y una señal que nadie logra descifrar.',
    },
    {
      w: 'NOVA',
      bg: 'ship',
      cast: ['NOVA'],
      t: 'Buenos días, tripulación. Soy NOVA, la inteligencia de la nave. Han pasado cuatrocientos doce días de criosueño. Les recomiendo no moverse bruscamente.',
    },
    {
      w: 'NOVA',
      bg: 'alarm',
      fx: 'shake',
      t: 'Corrección: les recomiendo moverse YA. He detectado un sabotaje en los sistemas vitales.',
    },
    {
      w: 'Azul',
      bg: 'ship',
      cast: ['Rojo', 'Azul', 'Verde', 'Negro'],
      t: '¡Rojo! Eres el único ingeniero despierto. Repara los sistemas: yo me encargo de que nadie haga una tontería.',
    },
    {
      w: 'Negro',
      t: 'Los sensores dicen que el saboteador está entre nosotros. Una sola persona.',
    },
    { w: 'Rojo', t: 'Entonces trabajemos… y mantengamos los ojos bien abiertos.' },
  ],
  c1_out: [
    {
      w: 'Verde',
      bg: 'ship',
      cast: ['Verde', 'Rojo', 'Azul'],
      t: 'El impostor llevaba algo en la mano, Rojo. Una esquirla que brillaba como los píxeles del Cubo.',
    },
    {
      w: 'NOVA',
      bg: 'alarm',
      cast: ['NOVA'],
      fx: 'flash',
      t: 'Análisis completado. La esquirla emite una frecuencia que reescribe la biología. Recomiendo… correr.',
    },
    { w: 'Azul', bg: 'ship', cast: ['Azul', 'Rojo'], t: '¿Qué quiere decir «correr»?' },
    {
      w: 'NARRADOR',
      bg: 'infected',
      cast: ['Zombi', 'Zombi2'],
      fx: 'shake',
      t: 'En la esclusa, el cuerpo del saboteador se levantó. Y no estaba solo.',
    },
    { w: 'Zombi', t: 'Cuuuubo… cuuuuubo…' },
  ],
  c2_in: [
    {
      w: 'Negro',
      bg: 'infected',
      cast: ['Negro', 'Rojo', 'Zombi'],
      fx: 'shake',
      t: '¡Se están contagiando! ¡Todo el que toca la esquirla se convierte!',
    },
    {
      w: 'Rosa',
      bg: 'ship',
      cast: ['Rosa', 'Rojo'],
      t: 'Hay una cápsula de escape en Navegación. Yo la preparo; tú aguanta, Rojo.',
    },
    {
      w: 'Rojo',
      t: 'Primera regla: no dejar que me toquen. Segunda regla: buscar algo con lo que defenderme.',
    },
  ],
  c2_out: [
    {
      w: 'Rosa',
      bg: 'ship',
      cast: ['Rosa', 'Rojo', 'Azul', 'Naranja'],
      t: '¡Todos adentro! ¡Despegamos!',
    },
    {
      w: 'NOVA',
      bg: 'space',
      cast: ['NOVA'],
      t: 'Cápsula expulsada. Destino automático: la superficie del Cubo. Probabilidad de supervivencia: prefiero no decirla.',
    },
    {
      w: 'Rojo',
      bg: 'space',
      cast: ['Rojo', 'Azul'],
      t: '¿La superficie… del Cubo? ¡Ni siquiera debería tener superficie!',
    },
  ],
  c3_in: [
    {
      w: 'NARRADOR',
      bg: 'planet',
      cast: [],
      fx: 'flash',
      t: 'La cápsula se estrelló en un mundo imposible: colinas cuadradas, árboles de troncos perfectos, un sol rectangular.',
    },
    {
      w: 'Naranja',
      cast: ['Naranja', 'Amarillo', 'Rojo'],
      t: 'Mi cerebro dice que esto es un videojuego.',
    },
    { w: 'Amarillo', t: 'Entonces yo soy el personaje cómico. Es un papel que me va.' },
    {
      w: 'NOVA',
      cast: ['NOVA', 'Rojo'],
      t: 'Señal débil de la Nébula-7. Si encienden una baliza luminosa, podrán localizarnos. Necesitan madera, una mesa de trabajo y antorchas.',
    },
    {
      w: 'NOVA',
      t: 'Un consejo: no salgan de noche sin luz. Los infectados también cruzaron el portal.',
    },
  ],
  c3_out: [
    {
      w: 'NARRADOR',
      bg: 'planet',
      cast: ['Rojo', 'Azul', 'Verde', 'Rosa', 'Morado'],
      fx: 'flash',
      t: 'Al amanecer, la baliza brilló en lo alto… y alguien del grupo sonrió demasiado.',
    },
    { w: 'Morado', t: 'Perfecto. Todo según lo previsto.' },
    { w: 'Rojo', t: '¿Morado? ¿Qué quieres decir con «previsto»?' },
  ],
  c4_in: [
    {
      w: 'NOVA',
      bg: 'ship',
      cast: ['NOVA'],
      t: 'Baliza recibida. La Nébula-7 está en órbita. Transportando supervivientes a bordo.',
    },
    {
      w: 'Negro',
      bg: 'alarm',
      cast: ['Negro', 'Rojo', 'Azul'],
      fx: 'shake',
      t: 'Los infectados no se contagian solos. Hay dos impostores entre nosotros, estoy seguro.',
    },
    { w: 'Azul', t: 'Pues a buscarlos. Y esta vez, votemos con pruebas.' },
  ],
  c4_out: [
    {
      w: 'Azul',
      bg: 'ship',
      cast: ['Azul', 'Rojo', 'Verde'],
      t: 'Dos menos. Pero el Cubo sigue llamando… Siento su pulso en la nave.',
    },
    {
      w: 'NOVA',
      bg: 'alarm',
      cast: ['NOVA'],
      fx: 'shake',
      t: 'El Cubo se ha conectado al núcleo del reactor. Si no lo destruyen, reescribirá la realidad entera.',
    },
  ],
  c5_in: [
    {
      w: 'Rojo',
      bg: 'alarm',
      cast: ['Rojo', 'Azul'],
      t: 'Es mi turno. Si el núcleo cae, todo termina.',
    },
    { w: 'Alfa', bg: 'infected', cast: ['Alfa'], fx: 'shake', t: 'CUUUBO… SOY… EL CUBO…' },
    {
      w: 'NOVA',
      cast: ['NOVA', 'Rojo'],
      t: 'El infectado original ha mutado. Le dejo las armas de la armería, Rojo. Úselas bien.',
    },
  ],
  final: [
    {
      w: 'NOVA',
      bg: 'space',
      cast: ['NOVA'],
      fx: 'flash',
      t: 'Núcleo neutralizado. La anomalía se desvanece… Bienvenido a casa, Rojo.',
    },
    {
      w: 'Azul',
      cast: ['Rojo', 'Azul', 'Verde', 'Rosa', 'Naranja', 'Amarillo', 'Negro', 'Blanco'],
      t: 'Tripulación a salvo. Gracias por no dejar que el Cubo nos reescribiera.',
    },
    { w: 'Amarillo', t: 'Yo lo dije: soy el personaje cómico. Y el cómico siempre sobrevive.' },
    {
      w: 'NARRADOR',
      bg: 'space',
      cast: [],
      t: 'Pero lejos de allí, en la oscuridad, un diminuto cubo vuelve a brillar…',
    },
    { w: 'NARRADOR', t: 'FIN… ¿o continuará?' },
  ],
};
function voiceFor(w) {
  const i = COLORS.findIndex(c => c[1] === w);
  return { id: i >= 0 ? i : w === 'NOVA' ? 6 : w === 'NARRADOR' ? 7 : 8 };
}
function speakerColor(w) {
  const i = COLORS.findIndex(c => c[1] === w);
  return i >= 0
    ? COLORS[i][0]
    : {
        NOVA: '#40e0ff',
        NARRADOR: '#ffd180',
        Zombi: '#8fbf6a',
        Zombi2: '#8fbf6a',
        Alfa: '#ff6a5a',
      }[w] || '#fff';
}

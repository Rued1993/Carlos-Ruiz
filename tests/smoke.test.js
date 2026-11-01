#!/usr/bin/env node
/**
 * Pruebas de humo de extremo a extremo (Playwright + Chromium).
 * Cargan el juego real, recorren menús, modos, misiones y cinemáticas, y fallan ante cualquier
 * error de consola o de página.
 *
 *   node tests/smoke.test.js            # prueba dist/nebula7.html
 *   TARGET=dev node tests/smoke.test.js # prueba index.html (módulos sueltos)
 */
const path = require('path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const file = process.env.TARGET === 'dev' ? 'index.html' : 'dist/nebula7.html';
const url = 'file://' + path.join(root, file);

let failed = 0;
const check = (name, cond, extra = '') => {
  console.log(`${cond ? '  ✔' : '  ✘'} ${name}${cond ? '' : '  ' + extra}`);
  if (!cond) failed++;
};

(async () => {
  console.log(`Probando ${file}`);
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage({ viewport: { width: 800, height: 500 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => m.type() === 'error' && errors.push(m.text().slice(0, 200)));
  const ev = (fn, arg) => page.evaluate(fn, arg);
  const wait = ms => page.waitForTimeout(ms);
  const until = (expr, ms = 20000) =>
    page.waitForFunction(expr, null, { timeout: ms }).then(
      () => true,
      () => false
    );

  await page.goto(url);
  await wait(1200);

  console.log('Menús');
  check('arranca en el menú con vista 3D', (await ev(() => scene + ':' + view3d)) === 'menu:true');
  await ev(() => {
    scene = 'levels';
  });
  await wait(300);
  await ev(() => openBrief(LEVELS[8], 'level', 8));
  check('briefing del nivel 9', (await ev(() => scene)) === 'brief');
  check(
    'niveles: sólo el primero está desbloqueado',
    (await ev(() => levelUnlocked(0) && !levelUnlocked(1))) === true
  );

  console.log('Modos de juego (150 pasos de simulación cada uno)');
  for (const mode of ['classic', 'zombie', 'sandbox']) {
    const ok = await ev(m => {
      gmode = m;
      newGame();
      G.intro = 0;
      for (let i = 0; i < 150; i++) {
        updatePlayer(0.05);
        updateWorld(0.05);
      }
      return scene === 'play' && G.mode === m;
    }, mode);
    await wait(500); // deja renderizar algunos frames 3D
    check(`modo ${mode} arranca y simula`, ok);
  }

  console.log('Roles de misión');
  check(
    'nivel 1: el jugador es tripulante',
    await ev(() => (launchMission(LEVELS[0]), !G.player.imp))
  );
  check(
    'nivel 4: el jugador es impostor',
    await ev(() => (launchMission(LEVELS[3]), G.player.imp))
  );
  check(
    'nivel 3: hay 2 impostores',
    await ev(() => (launchMission(LEVELS[2]), G.ps.filter(p => p.imp).length === 2))
  );

  console.log('Motor de misiones');
  await ev(() => {
    CAMP = { kind: 'level', idx: 9, def: LEVELS[9] };
    launchMission(LEVELS[9]);
    G.intro = 0;
    mevent('item:madera', 12);
    mevent('craft:mesa');
    mevent('craft:hacha');
  });
  await until(() => scene === 'mend');
  check(
    'misión de Mundo cubo se completa por eventos',
    (await ev(() => scene + ':' + G.M.ok)) === 'mend:true'
  );
  check('las estrellas se guardan', (await ev(() => SAVE.stars.L10 >= 1)) === true);
  check('el siguiente nivel se desbloquea', (await ev(() => levelUnlocked(10))) === true);

  console.log('Jefe zombi');
  await ev(() => {
    CAMP = { kind: 'level', idx: 8, def: LEVELS[8] };
    launchMission(LEVELS[8]);
    G.intro = 0;
    G.wave.state = 'run';
    startWave(2);
  });
  check('el jefe aparece en la última oleada', await ev(() => !!G.zs.find(z => z.boss)));
  await ev(() => {
    G.zs.find(z => z.boss).hp = 0;
    for (let i = 0; i < 12; i++) updZombie(0.05);
  });
  await until(() => scene === 'mend');
  check(
    'derrotar al jefe completa la misión',
    (await ev(() => scene + ':' + G.M.ok)) === 'mend:true'
  );

  console.log('Historia y cinemáticas');
  await ev(() => startStory(0));
  check('capítulo 1 abre la cinemática', (await ev(() => scene + ':' + CUT.id)) === 'cut:prologo');
  await wait(600);
  const pages = await ev(() => CUT.pages.length);
  await ev(() => {
    while (CUT && scene === 'cut') cutAdvance();
  });
  check(
    `recorre las ${pages} páginas y lanza la misión`,
    (await ev(() => scene + ':' + G.M.def.id)) === 'play:S1'
  );
  await ev(() => {
    G.intro = 0;
    mevent('task', 3);
    mevent('ejectImp');
  });
  await until(() => scene === 'mend');
  check('completar el capítulo 1 desbloquea el 2', (await ev(() => SAVE.story >= 1)) === true);

  console.log('Pausa y calidad');
  await ev(() => {
    launchMission(LEVELS[0]);
    G.intro = 0;
  });
  await page.keyboard.press('p');
  check('P pausa la partida', (await ev(() => scene)) === 'pause');
  await page.keyboard.press('p');
  check('P la reanuda', (await ev(() => scene)) === 'play');
  await ev(() => {
    SAVE.quality = 0;
  });
  await wait(400);
  await ev(() => {
    SAVE.quality = 1;
  });

  console.log('Fallback 2D');
  await ev(() => {
    view3d = false;
  });
  await wait(400);
  check('la vista 2D sigue dibujando', (await ev(() => scene)) === 'play');

  check('sin errores de consola ni de página', errors.length === 0, errors.slice(0, 3).join(' | '));
  await browser.close();
  console.log(failed ? `\n${failed} prueba(s) fallaron` : '\nTodas las pruebas pasaron');
  process.exit(failed ? 1 : 0);
})();

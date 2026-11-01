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

  console.log('Jugabilidad: sprint, recarga, enemigos y botín');
  check(
    'correr gasta resistencia y se recupera',
    await ev(() => {
      gmode = 'classic';
      newGame();
      G.intro = 0;
      keys.w = keys.shift = true;
      for (let i = 0; i < 30; i++) updatePlayer(0.05);
      const gastada = G.stam < 100 && G.player.sprinting;
      keys.w = keys.shift = false;
      for (let i = 0; i < 80; i++) updatePlayer(0.05);
      return gastada && G.stam > 90;
    })
  );
  const rec = await ev(() => {
    gmode = 'zombie';
    newGame();
    G.intro = 0;
    G.weps.pistola = true;
    G.wep = 'pistola';
    G.ammo = 30;
    G.wave.state = 'wait';
    G.wave.t = -999;
    shoot(G.player.x + 100, G.player.y);
    const tras1 = G.mags.pistola; // 11 si cargó 12 y disparó una vez
    for (let i = 0; i < 11; i++) {
      G.cd = 0;
      shoot(G.player.x + 100, G.player.y);
    }
    G.cd = 0;
    shoot(G.player.x + 100, G.player.y); // cargador vacío -> recarga
    const recargando = G.reloadT > 0;
    for (let i = 0; i < 40; i++) updZombie(0.05);
    return { tras1, recargando, mag: G.mags.pistola, reserva: G.ammo };
  });
  check('el cargador de la pistola es de 12', rec.tras1 === 11);
  check(
    'al vaciarse el cargador se recarga solo',
    rec.recargando && rec.mag === 12 && rec.reserva === 6,
    JSON.stringify(rec)
  );
  const bomba = await ev(() => {
    G.wave.state = 'wait';
    G.wave.t = -999;
    const p = G.player,
      hp0 = G.hp;
    G.zs = [
      {
        x: p.x + 20,
        y: p.y,
        hp: 50,
        max: 50,
        sp: 0,
        bomb: true,
        step: 0,
        cd: 0,
        path: [],
        pt: 99,
        stuck: 0,
        face: 1,
      },
    ];
    for (let i = 0; i < 5; i++) updZombie(0.05);
    return { dano: hp0 - G.hp, quedan: G.zs.length, puntos: G.score };
  });
  check(
    'el zombi bomba explota y hace daño sin dar puntos',
    bomba.dano > 0 && bomba.quedan === 0 && bomba.puntos === 0,
    JSON.stringify(bomba)
  );
  const botin = await ev(() => {
    const oldRandom = Math.random;
    Math.random = () => 0;
    G.zs = [
      {
        x: G.player.x + 300,
        y: G.player.y,
        hp: 0,
        max: 10,
        sp: 0,
        step: 0,
        cd: 9,
        path: [],
        pt: 99,
        stuck: 0,
        face: 1,
        tank: true,
      },
    ];
    updZombie(0.05);
    Math.random = oldRandom;
    return {
      drops: G.drops.length,
      kills: G.kills,
      puntos: G.score,
      color: zColor({ tank: true }),
    };
  });
  check(
    'un zombi abatido suma puntos y puede soltar botín',
    botin.drops === 1 && botin.kills === 1 && botin.puntos >= 10,
    JSON.stringify(botin)
  );
  check(
    'la dificultad difícil endurece a los zombis',
    await ev(() => {
      SAVE.difficulty = 1;
      G.wave.n = 1;
      G.zs = [];
      spawnZ();
      const normal = G.zs[0].hp;
      SAVE.difficulty = 2;
      spawnZ();
      const dificil = G.zs[1].hp;
      SAVE.difficulty = 1;
      return dificil > normal;
    })
  );

  console.log('Mundo cubo: hambre, animales y horno');
  const sb = await ev(() => {
    gmode = 'sandbox';
    newGame();
    G.intro = 0;
    const animales = G.animals.length;
    const a = G.animals[0];
    hitAnimal(a, 999);
    const carne = G.inv.carne;
    G.inv.carbon = 2;
    sbCook(5, 5);
    const asada = G.inv.asada;
    G.food = 5;
    sbEat();
    const comida = G.food;
    G.food = 20;
    for (let i = 0; i < 100; i++) updSurvival(1); // 100 s
    const hambre = G.food < 20;
    return {
      animales,
      carne,
      asada,
      comida,
      hambre,
      horno: HOTBAR.includes('horno'),
      furnace: OSOLID.has(O_FURNACE),
    };
  });
  check('hay animales al empezar', sb.animales >= 10, JSON.stringify(sb));
  check('cazar un animal da carne cruda', sb.carne >= 1);
  check('el horno cocina carne con carbón', sb.asada >= 1);
  check('comer restaura hambre', sb.comida >= 8);
  check('el hambre baja con el tiempo', sb.hambre);
  check('el horno es un bloque colocable y sólido', sb.horno && sb.furnace);

  console.log('Mando y postprocesado');
  const gp = await ev(() => {
    const botones = Array.from({ length: 17 }, () => ({ pressed: false, value: 0 }));
    botones[7] = { pressed: true, value: 1 };
    navigator.getGamepads = () => [{ connected: true, axes: [0.9, 0, 0, 0], buttons: botones }];
    gmode = 'zombie';
    newGame();
    G.intro = 0;
    pollGamepad(0.016);
    return { on: pad.on, lx: pad.lx, fire: pad.fire };
  });
  check(
    'el mando se detecta y el gatillo dispara',
    gp.on && gp.lx > 0.5 && gp.fire,
    JSON.stringify(gp)
  );
  await ev(() => {
    navigator.getGamepads = () => [];
    SAVE.quality = 2;
  });
  await wait(1500);
  check('el postprocesado (bloom + MSAA) sigue activo', (await ev(() => PFX.ok)) === true);
  await ev(() => {
    SAVE.quality = 1;
  });

  console.log('Zombis: subfusil, tienda, granadas y escupidores');
  const zx = await ev(() => {
    gmode = 'zombie';
    newGame();
    G.intro = 0;
    G.wave.state = 'break';
    G.wave.t = -999;
    G.cash = 1000;
    const antes = G.cash;
    SHOP.find(i => i.id === 'smg').buy(G);
    const smg = !!G.weps.subfusil && G.wep === 'subfusil';
    G.cash -= 250;
    SHOP.find(i => i.id === 'dmg').buy(G);
    const dmg = dmgMul();
    SHOP.find(i => i.id === 'mag').buy(G);
    const mag = magSize('subfusil');
    SHOP.find(i => i.id === 'armor').buy(G);
    openShop();
    const enTienda = scene === 'shop';
    scene = 'play';
    G.ammo = 120;
    G.cd = 0;
    G.wave.state = 'wait';
    shoot(G.player.x + 100, G.player.y);
    const cd = G.cd;
    const hp0 = G.hp;
    hurtPlayer(20);
    const armor = hp0 - G.hp; // 20 * 0.8 = 16
    return { antes, smg, dmg, mag, enTienda, cd, armor };
  });
  check(
    'se compra el subfusil y las mejoras en la tienda',
    zx.smg && zx.dmg > 1.19 && zx.mag === 45 && zx.enTienda,
    JSON.stringify(zx)
  );
  check('el subfusil dispara a ráfagas rápidas', zx.cd < 0.1);
  check('la armadura reduce el daño recibido', zx.armor === 16, JSON.stringify(zx));
  const gz = await ev(() => {
    G.wave.state = 'wait';
    G.wave.t = -999;
    G.zs = [
      {
        x: G.player.x + 60,
        y: G.player.y,
        hp: 100,
        max: 100,
        sp: 0,
        step: 0,
        cd: 9,
        path: [],
        pt: 99,
        stuck: 0,
        face: 1,
      },
    ];
    G.gren = 1;
    throwGrenade();
    const lanzada = G.grs.length === 1;
    for (let i = 0; i < 40; i++) updZombie(0.05);
    return { lanzada, zhp: G.zs[0] ? G.zs[0].hp : 0, quedan: G.grs.length };
  });
  check(
    'la granada explota y daña a los zombis',
    gz.lanzada && gz.quedan === 0 && gz.zhp < 100,
    JSON.stringify(gz)
  );
  const sp = await ev(() => {
    G.hp = 100;
    G.wave.state = 'wait';
    G.wave.t = -999;
    G.zs = [
      {
        x: G.player.x + 200,
        y: G.player.y,
        hp: 60,
        max: 60,
        sp: 0,
        step: 0,
        cd: 9,
        path: [],
        pt: 99,
        stuck: 0,
        face: 1,
        spit: true,
        spitT: 0,
      },
    ];
    for (let i = 0; i < 40; i++) updZombie(0.05);
    return { hp: G.hp };
  });
  check('el escupidor lanza ácido y hiere desde lejos', sp.hp < 100, JSON.stringify(sp));

  console.log('Cosméticos, logros y reto diario');
  const cos = await ev(() => {
    const hats = HATS.map((_, i) => makeHat(i).children.length);
    SAVE.hat = 2;
    SAVE.visor = 3;
    const crew = makeCrew('#c51111', false, SAVE.hat, SAVE.visor);
    const count = o => {
        let n = 0;
        o.traverse(() => n++);
        return n;
      },
      tieneSombrero = count(crew) > count(makeCrew('#c51111', false, 0, 0));
    SAVE.hat = 0;
    SAVE.visor = 0;
    return { hats, tieneSombrero, bot: cosmeticsFor({ isP: false, id: 4 }).length };
  });
  check(
    'los 7 sombreros se construyen y se añaden al modelo',
    cos.hats.slice(1).every(n => n > 0) && cos.tieneSombrero && cos.bot === 2,
    JSON.stringify(cos)
  );
  const ach = await ev(() => {
    SAVE.ach = {};
    SAVE.stats = {};
    mevent('zkill');
    const primero = !!SAVE.ach.sangre;
    mevent('zkill', 99);
    return { primero, cien: !!SAVE.ach.exterminador, cola: ACH_Q.length };
  });
  check(
    'los logros se desbloquean con las estadísticas',
    ach.primero && ach.cien && ach.cola >= 2,
    JSON.stringify(ach)
  );
  const dd = await ev(() => {
    const a = dailyDef(),
      b = dailyDef();
    return {
      igual: JSON.stringify(a) === JSON.stringify(b),
      modo: a.mode,
      id: a.id,
      objetivos: a.goals.length,
    };
  });
  check(
    'el reto diario es determinista y válido',
    dd.igual && /^D\d{8}$/.test(dd.id) && dd.objetivos >= 2,
    JSON.stringify(dd)
  );

  console.log('Mundo cubo: cama, brotes y clima');
  const ex = await ev(() => {
    gmode = 'sandbox';
    newGame();
    G.intro = 0;
    // brote -> árbol
    const tx = SPAWN.x + 12,
      ty = SPAWN.y;
    GR[ty * WW + tx] = G_GRASS;
    OB[ty * WW + tx] = 0;
    OB[ty * WW + tx] = O_SAPLING;
    G.saplings.push({ tx, ty, t: 0 });
    growSaplings(50);
    const arbol = OB[ty * WW + tx] === O_LOG && TREES.has(ty * WW + tx);
    // cama
    G.sbT = CYCLE * 0.7;
    G.dark = 0.86;
    sbSleep(SPAWN.x, SPAWN.y + 4);
    const durmio = G.sbT % CYCLE > CYCLE * 0.9 && !!G.respawn;
    // clima
    G.weather.target = 1;
    G.weather.t = 999;
    for (let i = 0; i < 200; i++) updWeather(0.1);
    return {
      arbol,
      durmio,
      lluvia: G.weather.rain > 0.5,
      receta: RECIPES.some(r => r.out && r.out[0] === 'cama'),
    };
  });
  check('un brote crece hasta ser un árbol', ex.arbol, JSON.stringify(ex));
  check('dormir en una cama salta la noche y fija el reaparecer', ex.durmio && ex.receta);
  check('el clima puede ponerse a llover', ex.lluvia);
  await wait(1200); // deja renderizar con lluvia
  check(
    'el audio se inicializa y los efectos no fallan',
    await ev(() => {
      audioInit();
      try {
        sfx.shot('pistola', 1, 1);
        sfx.explosion();
        sfx.step(true);
        sfx.growl(0, 0, true);
        musicTick();
        return true;
      } catch (e) {
        return false;
      }
    })
  );

  console.log('Gráficos: entorno, viento, haz y postproceso');
  await ev(() => {
    SAVE.quality = 2;
    gmode = 'sandbox';
    newGame();
    G.intro = 0;
  });
  await wait(2500);
  const gx = await ev(() => ({
    env: !!R3.scene.environment,
    sway: !!R3.sb.leaf.material.userData.uTime,
    montanas: R3.sb.mount.count > 10,
    post: PFX.active === true,
  }));
  check(
    'el mundo cubo tiene entorno HDR, viento y montañas',
    gx.env && gx.sway && gx.montanas,
    JSON.stringify(gx)
  );
  check(
    'el postprocesado final (grado, aberración, viñeta) está activo',
    gx.post,
    JSON.stringify(gx)
  );
  await ev(() => {
    gmode = 'classic';
    newGame();
    G.intro = 0;
  });
  await wait(2500);
  const sx2 = await ev(() => ({
    beam: !!R3.beam && R3.beam.visible,
    dust: R3.dust.geometry.attributes.position.count,
    env: !!R3.scene.environment,
  }));
  check(
    'la nave tiene haz de linterna, polvo y reflejos',
    sx2.beam && sx2.dust > 100 && sx2.env,
    JSON.stringify(sx2)
  );
  await ev(() => {
    SAVE.quality = 1;
  });

  console.log('Personajes y HUD rediseñados');
  const dz = await ev(() => {
    const crew = makeCrew('#c51111', false, 3, 1),
      zomb = makeCrew('#8a3030', true),
      pets = [1, 2, 3].map(i => makePet(i).children.length);
    const u = crew.userData;
    return {
      piezas: (() => {
        let n = 0;
        crew.traverse(() => n++);
        return n;
      })(),
      suit: u.suit.length,
      garras: zomb.userData.rig.armR.hand.children.length >= 4,
      mascotas: pets.every(n => n > 0),
      iconos: [
        'heart',
        'bolt',
        'shield',
        'bullet',
        'grenade',
        'pistola',
        'subfusil',
        'megaphone',
        'drumstick',
        'sun',
        'moon',
        'rain',
      ].every(n => typeof ICONS[n] === 'function'),
    };
  });
  check(
    'el modelo rediseñado tiene cuerpo, visor, mochila y piernas',
    dz.piezas >= 40 && dz.suit === 3 && dz.garras,
    JSON.stringify(dz)
  );
  check(
    'las 3 mascotas y los iconos vectoriales existen',
    dz.mascotas && dz.iconos,
    JSON.stringify(dz)
  );
  const hu = await ev(() => {
    gmode = 'zombie';
    newGame();
    G.intro = 0;
    SAVE.pet = 2;
    return true;
  });
  await wait(1500);
  check(
    'la mascota sigue al jugador',
    await until(
      () =>
        !!R3.pet && Math.hypot(R3.pet.position.x - G.player.x, R3.pet.position.z - G.player.y) < 80
    ),
    String(hu)
  );
  await ev(() => {
    SAVE.pet = 0;
    HUDS.hurt = { a: 1, t: 0.5 };
    HUDS.hitMark = 0.1;
  });
  await wait(600);
  check('el HUD con indicador de daño y marca de impacto se dibuja sin errores', true);

  console.log('Articulación, emotes y ambiente');
  const rig = await ev(() => {
    const c = makeCrew('#c51111', false, 0, 0),
      u = c.userData,
      r = u.rig;
    const has = ['torso', 'upper', 'armL', 'armR', 'legL', 'legR', 'pack', 'hold'].every(
      k => !!r[k]
    );
    const joints = !!(r.armL.sh && r.armL.el && r.armL.hand && r.legL.hip && r.legL.knee);
    // al correr, rodillas y codos se doblan y las piernas se desfasan
    for (let i = 0; i < 60; i++)
      animateCrew(u, { t: i * 0.016, phase: i * 0.3, speed: 1, sprint: 1 }, 0.016);
    const run = {
      knee: Math.abs(r.legL.knee.rotation.x) + Math.abs(r.legR.knee.rotation.x),
      hips: r.legL.hip.rotation.x * r.legR.hip.rotation.x,
      lean: r.torso.rotation.x,
    };
    // pose de apuntar
    for (let i = 0; i < 60; i++)
      animateCrew(
        u,
        { t: i * 0.016, phase: 0, speed: 0, aim: true, wep: 'pistola', twist: 0.5 },
        0.016
      );
    const aim = { arm: r.armR.sh.rotation.x, twist: r.torso.rotation.y };
    return { has, joints, run, aim };
  });
  check(
    'el personaje tiene torso, brazos y piernas articulados',
    rig.has && rig.joints,
    JSON.stringify(rig)
  );
  check(
    'al correr se doblan las rodillas, las piernas van en oposición y el torso se inclina',
    rig.run.knee > 0.2 && rig.run.hips <= 0 && rig.run.lean > 0.08,
    JSON.stringify(rig.run)
  );
  check(
    'al apuntar el brazo se eleva y el torso gira',
    rig.aim.arm < -1.2 && Math.abs(rig.aim.twist - 0.5) < 0.1,
    JSON.stringify(rig.aim)
  );
  const emo = await ev(() => {
    gmode = 'classic';
    newGame();
    G.intro = 0;
    doEmote(1);
    return { i: G.emote.i, t: G.emote.t };
  });
  check('los emotes se activan', emo.i === 1 && emo.t > 2, JSON.stringify(emo));
  await ev(() => {
    SAVE.quality = 2;
    gmode = 'sandbox';
    newGame();
    G.intro = 0;
  });
  await wait(2500);
  const amb = await ev(() => ({
    glow: !!R3.sb.glow,
    fly: R3.sb.fly.count === 18,
    sol: !!R3.sb.sky.material.uniforms.sunDir,
    abedul: [...TREES.values()].some(t => treeKind(t) === 1) && R3.sb.o[14].count > 0,
  }));
  check(
    'hay mariposas, luciérnagas, cielo con sol y abedules',
    amb.glow && amb.fly && amb.sol && amb.abedul,
    JSON.stringify(amb)
  );
  await ev(() => {
    SAVE.quality = 1;
  });

  console.log('Efectos y potenciadores');
  await ev(() => {
    gmode = 'zombie';
    newGame();
    G.intro = 0;
    scene = 'play';
  });
  await wait(600);
  const fxr = await ev(() => {
    const out = {};
    G.drops.push({ x: G.player.x, y: G.player.y, type: 'rafaga', t: 14 });
    G.drops.push({ x: G.player.x, y: G.player.y, type: 'escudo', t: 14 });
    G.stam = 100;
    return out;
  });
  await until(() => G.buffs.rapid > 0 && G.shield > 0);
  const fx2 = await ev(() => {
    const o = { rapid: G.buffs.rapid, shield: G.shield };
    const x0 = G.player.x,
      y0 = G.player.y;
    tryDash();
    o.inv = G.inv > 0;
    o.cd = G.dashCd > 1;
    shockwave3D(G.player.x, G.player.y, 100, '#fff');
    o.shocks = R3.shocks.length;
    const hp = G.hp;
    hurtPlayer(10, null);
    o.immune = G.hp === hp;
    slowmo(0.25, 1);
    o.slow = TIME.scale;
    popup(G.player.x, G.player.y, 'x', '#fff');
    o.pops = POPS.length;
    o.x0 = x0 + y0;
    return o;
  });
  check(
    'potenciadores, esquiva con invulnerabilidad, onda de choque, cámara lenta y textos',
    fx2.rapid > 5 &&
      fx2.shield > 0 &&
      fx2.inv &&
      fx2.cd &&
      fx2.shocks >= 1 &&
      fx2.immune &&
      fx2.slow === 0.25 &&
      fx2.pops >= 1,
    JSON.stringify(fx2) + JSON.stringify(fxr)
  );
  check('la cámara lenta termina', await until(() => TIME.scale === 1));

  console.log('Minijuegos nuevos');
  const mg = await ev(() => {
    gmode = 'classic';
    newGame();
    G.intro = 0;
    let ok = 0;
    openTask('keypad', 'k', '#', () => {});
    G.task.entry = G.task.code;
    updateTask(0.05);
    if (G.task.doneT > 0) ok++;
    openTask('simon', 's', '#', () => {});
    G.task.show = 0;
    G.task.len = 6;
    updateTask(0.05);
    if (G.task.doneT > 0) ok++;
    drawTask();
    G.task = null;
    scene = 'play';
    return { ok, types: STATIONS.map(s => s.type).join() };
  });
  check(
    'los minijuegos keypad y simon se completan',
    mg.ok === 2 && /keypad/.test(mg.types) && /simon/.test(mg.types),
    JSON.stringify(mg)
  );

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

/**
 * Desarrollo visual: mapas de entorno (reflejos IBL), luz de contorno (rim) para los personajes,
 * balanceo de hierba/hojas con el viento, haz de linterna volumétrico y polvo en suspensión.
 */
'use strict';

/** Mapa de entorno procedural: cúpula con degradado + paneles luminosos HDR, filtrado con PMREM. */
function makeEnv(kind) {
  R3.envCache = R3.envCache || {};
  if (R3.envCache[kind]) return R3.envCache[kind];
  const defs = {
    ship: {
      top: 0x0b121c,
      bot: 0x04060a,
      panels: [
        [0, 40, 0, 40, 4, 40, [1.2, 2.6, 3.4]],
        [30, 25, 30, 10, 10, 10, [3.6, 2.2, 1.3]],
        [-35, 20, -20, 6, 24, 6, [0.8, 1.6, 2.4]],
      ],
    },
    day: { top: 0x1b3f78, bot: 0x2c3c24, panels: [[28, 36, 18, 14, 14, 14, [2.4, 2, 1.4]]] },
    stage: {
      top: 0x04060e,
      bot: 0x0a1520,
      panels: [
        [0, 40, -10, 50, 3, 6, [1.5, 3.2, 4]],
        [-35, 10, 25, 6, 14, 6, [3.5, 1, 2.8]],
        [38, 14, 20, 6, 14, 6, [4, 2.4, 1]],
      ],
    },
  };
  const d = defs[kind],
    sc = new THREE.Scene();
  sc.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(60, 32, 16),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        uniforms: {
          top: { value: new THREE.Color(d.top) },
          bot: { value: new THREE.Color(d.bot) },
        },
        vertexShader:
          'varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader:
          'uniform vec3 top; uniform vec3 bot; varying float h; void main(){ gl_FragColor = vec4(mix(bot, top, smoothstep(-0.5, 0.8, h)), 1.0); }',
      })
    )
  );
  for (const [x, y, z, w, h, l, c] of d.panels) {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, l),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(c[0], c[1], c[2]) })
    );
    m.position.set(x, y, z);
    sc.add(m);
  }
  const pm = new THREE.PMREMGenerator(R3.renderer);
  const tex = pm.fromScene(sc, 0.02).texture;
  pm.dispose();
  R3.envCache[kind] = tex;
  return tex;
}

/** Añade un resplandor de contorno dependiente del ángulo de visión (rim light) a un material. */
function addRim(m, color, k) {
  m.onBeforeCompile = sh => {
    sh.uniforms.rimColor = { value: new THREE.Color(color) };
    sh.uniforms.rimK = { value: k };
    sh.fragmentShader = sh.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform vec3 rimColor;\nuniform float rimK;'
      )
      .replace(
        '#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\n totalEmissiveRadiance += rimColor * pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0) * rimK;'
      );
  };
  m.customProgramCacheKey = () => 'rim';
}

/** Balanceo por viento en el vértice (instanciado). `top` normaliza la altura local a 0..1. */
function addSway(m, amp, speed, top) {
  m.onBeforeCompile = sh => {
    sh.uniforms.uTime = { value: 0 };
    m.userData.uTime = sh.uniforms.uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float swPh = uTime * ${speed.toFixed(2)} + instanceMatrix[3].x * 0.05 + instanceMatrix[3].z * 0.07;
          float swK = clamp(${top}, 0.0, 1.0);
          transformed.x += sin(swPh) * ${amp.toFixed(2)} * swK;
          transformed.z += cos(swPh * 0.8) * ${amp.toFixed(2)} * 0.6 * swK;
        #endif`
      );
  };
  m.customProgramCacheKey = () => 'sway' + amp + speed + top;
}

/** Haz de linterna: cono aditivo con degradado, apuntando a +Z local. */
function makeBeam(color, len, radius) {
  const geo = new THREE.ConeGeometry(radius, len, 28, 1, true);
  geo.translate(0, -len / 2, 0);
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(
    geo,
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      fog: false,
      uniforms: {
        col: { value: new THREE.Color(color[0], color[1], color[2]) },
        len: { value: len },
        k: { value: 1 },
      },
      vertexShader:
        'varying float vz; varying vec3 vN; varying vec3 vV; uniform float len; void main(){ vz = position.z / len; vN = normalMatrix * normal; vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }',
      fragmentShader:
        'uniform vec3 col; uniform float k; varying float vz; varying vec3 vN; varying vec3 vV; void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - vz, 1.3) * pow(f, 1.6) * 0.34 * k; gl_FragColor = vec4(col * a, a); }',
    })
  );
  m.frustumCulled = false;
  return m;
}

/** Polvo flotando alrededor del jugador, más visible dentro del haz de la linterna. */
function fxDustInit(scene) {
  const N = 220,
    geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  R3.dustSeed = Array.from({ length: N }, () => [
    rnd(-380, 380),
    rnd(8, 120),
    rnd(-380, 380),
    Math.random() * 6.28,
  ]);
  R3.dust = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      size: 2.4,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false,
    })
  );
  R3.dust.frustumCulled = false;
  scene.add(R3.dust);
}
function fxDustUpdate(t) {
  if (!R3.dust) return;
  const p = G.player,
    pa = R3.dust.geometry.attributes.position,
    ca = R3.dust.geometry.attributes.color,
    fx = Math.cos(CAM.yaw),
    fz = Math.sin(CAM.yaw);
  R3.dustSeed.forEach((s, i) => {
    const x = p.x + s[0] + Math.sin(t * 0.3 + s[3]) * 14,
      y = s[1] + Math.sin(t * 0.5 + s[3] * 2) * 6,
      z = p.y + s[2] + Math.cos(t * 0.27 + s[3]) * 14,
      dx = x - p.x,
      dz = z - p.y,
      along = dx * fx + dz * fz,
      across = Math.abs(-dx * fz + dz * fx),
      lit = along > 20 && along < 520 && across < along * 0.28 + 10 ? 1 : 0.18,
      b = lit * (0.5 + 0.5 * Math.sin(t * 2 + s[3] * 5));
    pa.array[i * 3] = x;
    pa.array[i * 3 + 1] = y;
    pa.array[i * 3 + 2] = z;
    ca.array[i * 3] = 1.6 * b;
    ca.array[i * 3 + 1] = 1.45 * b;
    ca.array[i * 3 + 2] = 1.1 * b;
  });
  pa.needsUpdate = true;
  ca.needsUpdate = true;
}

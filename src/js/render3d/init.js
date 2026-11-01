/**
 * Inicialización del renderizador y reconstrucción de escena al cambiar de partida.
 */
'use strict';

function init3D() {
  const canvas = document.getElementById('gl');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.setSize(W, H, false);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const camera = new THREE.PerspectiveCamera(62, W / H, 4, 5000);
  R3 = {
    renderer,
    camera,
    scene: null,
    forG: null,
    ents: new Map(),
    bodies: new Map(),
    blood: new Map(),
    w: W,
    h: H,
    t: 0,
    dt: 0.016,
    aimUntil: 0,
  };
}
function rebuild3D() {
  R3.ents.clear();
  R3.bodies.clear();
  R3.blood.clear();
  R3.dropM = null;
  R3.animalM = null;
  R3.grM = null;
  R3.spitP = null;
  R3.q = null;
  const scene = new THREE.Scene();
  R3.scene = scene;
  R3.forG = G;
  R3.L = {};
  CAM.yaw = -Math.PI / 2;
  CAM.elev = G.mode === 'sandbox' ? 0.78 : 0.62;
  CAM.dist = G.mode === 'sandbox' ? 260 : 250;
  if (G.mode === 'sandbox') buildSandbox3D(scene);
  else buildClassic3D(scene);
  const N = 700,
    pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  pg.setAttribute('color', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  pg.setDrawRange(0, 0);
  R3.pts = new THREE.Points(
    pg,
    new THREE.PointsMaterial({
      size: 5,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    })
  );
  R3.pts.frustumCulled = false;
  scene.add(R3.pts);
  fxInit(scene);
}

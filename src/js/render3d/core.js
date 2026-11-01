/**
 * Capa 3D (three.js): estado, cámara orbital, materiales y helpers de geometría.
 */
'use strict';

let view3d = true,
  R3 = null,
  look = null;
const CAM = { yaw: -Math.PI / 2, elev: 0.62, dist: 225 };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function mat(color, o) {
  return new THREE.MeshStandardMaterial(
    Object.assign({ color, roughness: 0.7, metalness: 0.1 }, o || {})
  );
}
function bx(w, h, d, color, x, y, z, o) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, o));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}
function cyl(rt, rb, h, color, x, y, z, o) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, 32), mat(color, o));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}
function mkLabel(text, color) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const x = c.getContext('2d');
  x.fillStyle = 'rgba(0,0,0,.55)';
  x.beginPath();
  x.roundRect(8, 10, 240, 44, 22);
  x.fill();
  x.font = 'bold 27px system-ui';
  x.fillStyle = color || '#fff';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(text, 128, 33);
  const t = new THREE.CanvasTexture(c);
  t.encoding = THREE.sRGBEncoding;
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false, fog: false })
  );
  s.scale.set(42, 10.5, 1);
  s.renderOrder = 10;
  return s;
}
function glTex(c, pixel, repeat) {
  const t = new THREE.CanvasTexture(c);
  t.encoding = THREE.sRGBEncoding;
  if (pixel) {
    t.magFilter = t.minFilter = THREE.NearestFilter;
  } else t.anisotropy = 8;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

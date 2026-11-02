// Modelo del jugador (visible en tercera persona), con animación de caminar y golpear.
import * as THREE from 'three';
import { iconTexture } from './icons.js';

const lam = (c, map) => new THREE.MeshLambertMaterial(map ? { color: c, map } : { color: c });
function tex(draw) {
  const c = document.createElement('canvas'); c.width = c.height = 8; draw(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace; return t;
}
function limb(w, h, d, mats, x, y, z) {
  const piv = new THREE.Group(); piv.position.set(x, y, z);
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats); m.position.y = -h / 2; piv.add(m); return piv;
}

export class PlayerModel {
  constructor(scene) {
    const skin = '#e0ac8c', hair = '#3a2412', shirt = 0x2aa5b8, pants = 0x3a3f9c, shoe = 0x555560;
    const face = tex((x) => {
      x.fillStyle = skin; x.fillRect(0, 0, 8, 8);
      x.fillStyle = hair; x.fillRect(0, 0, 8, 2); x.fillRect(0, 2, 1, 2); x.fillRect(7, 2, 1, 2);
      x.fillStyle = '#fff'; x.fillRect(1, 3, 2, 1); x.fillRect(5, 3, 2, 1);
      x.fillStyle = '#3a56c8'; x.fillRect(2, 3, 1, 1); x.fillRect(5, 3, 1, 1);
      x.fillStyle = '#a0603c'; x.fillRect(3, 5, 2, 1);
    });
    const hairT = tex((x) => { x.fillStyle = hair; x.fillRect(0, 0, 8, 8); });
    const sideT = tex((x) => { x.fillStyle = skin; x.fillRect(0, 0, 8, 8); x.fillStyle = hair; x.fillRect(0, 0, 8, 2); });
    const backT = tex((x) => { x.fillStyle = hair; x.fillRect(0, 0, 8, 8); });
    const skinM = lam(0xe0ac8c);
    this.group = new THREE.Group();
    const g = new THREE.Group(); this.group.add(g);
    // cabeza (pivote en el cuello)
    this.head = new THREE.Group(); this.head.position.set(0, 1.5, 0);
    const hm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), [lam(0xffffff, sideT), lam(0xffffff, sideT), lam(0xffffff, hairT), skinM, lam(0xffffff, face), lam(0xffffff, backT)]);
    hm.position.y = 0.25; this.head.add(hm); g.add(this.head);
    // torso, piernas, brazos
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.75, 0.25), lam(shirt)); torso.position.y = 1.125; g.add(torso);
    this.legL = limb(0.25, 0.75, 0.25, lam(pants), -0.125, 0.75, 0); this.legR = limb(0.25, 0.75, 0.25, lam(pants), 0.125, 0.75, 0);
    this.legL.children[0].material = lam(pants);
    g.add(this.legL, this.legR);
    this.armL = limb(0.22, 0.72, 0.22, [lam(shirt), lam(shirt), lam(shirt), skinM, lam(shirt), lam(shirt)], -0.36, 1.48, 0);
    this.armR = limb(0.22, 0.72, 0.22, [lam(shirt), lam(shirt), lam(shirt), skinM, lam(shirt), lam(shirt)], 0.36, 1.48, 0);
    g.add(this.armL, this.armR);
    // ítem en la mano derecha
    this.itemMat = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, alphaTest: 0.1 });
    this.item = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.55), this.itemMat);
    this.item.position.set(0, -0.68, 0.22); this.item.rotation.set(0, 0, 0.0); this.armR.add(this.item);
    this.item.visible = false; this.heldId = -1;
    this.t = 0;
    scene.add(this.group);
    this.group.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.group.visible = false;
  }
  setHeld(id) {
    if (id === this.heldId) return;
    this.heldId = id;
    this.item.visible = !!id;
    if (id) { this.itemMat.map = iconTexture(id); this.itemMat.needsUpdate = true; }
  }
  update(dt, player, swing, mining) {
    this.group.position.copy(player.pos);
    this.group.rotation.y = player.yaw + Math.PI;
    const speed = Math.hypot(player.vel.x, player.vel.z);
    const walking = speed > 0.3 && (player.onGround || player.inWater);
    this.t += dt * (walking ? 4 + speed * 1.2 : 0);
    const sw = walking ? Math.sin(this.t) * 0.9 : 0;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    this.armL.rotation.x = -sw * 0.8;
    // brazo derecho: balanceo o golpe
    let arm = sw * 0.8;
    if (swing > 0) arm = -Math.sin(Math.min(1, swing) * Math.PI) * 1.8 - 0.5;
    else if (this.heldId) arm = -0.5 + sw * 0.3;
    this.armR.rotation.x = arm;
    this.head.rotation.x = -player.pitch;
    // idle: respiración suave
    const idle = Math.sin(performance.now() / 700) * 0.02;
    this.armL.rotation.z = -0.04 - idle; this.armR.rotation.z = 0.04 + idle;
    if (player.flying) this.group.rotation.x = 0;
  }
}

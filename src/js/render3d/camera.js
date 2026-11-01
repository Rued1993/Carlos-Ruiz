/**
 * Cámara en tercera persona y punto de apuntado.
 */
'use strict';

function updCamera3D() {
  const p = G.player,
    c = R3.camera,
    d = CAM.dist,
    cp = Math.cos(CAM.elev),
    sp = Math.sin(CAM.elev),
    fx = Math.cos(CAM.yaw),
    fz = Math.sin(CAM.yaw),
    rx = -fz,
    rz = fx;
  let sx = 0,
    sy = 0;
  if (G.shake > 0) {
    sx = rnd(-1, 1) * G.shake * 10;
    sy = rnd(-1, 1) * G.shake * 10;
  }
  c.position.set(p.x - fx * d * cp + rx * 30 + sx, 38 + sp * d + sy, p.y - fz * d * cp + rz * 30);
  c.lookAt(p.x + fx * 95 + rx * 30, 16, p.y + fz * 95 + rz * 30);
}
function aimPoint() {
  const c = R3 && R3.camera,
    p = G.player;
  if (!c) return { x: p.x + Math.cos(CAM.yaw) * 120, y: p.y + Math.sin(CAM.yaw) * 120 };
  const o = c.position,
    v = new THREE.Vector3();
  c.getWorldDirection(v);
  let t = v.y < -0.01 ? (20 - o.y) / v.y : 600;
  t = Math.min(t, 1200);
  return { x: o.x + v.x * t, y: o.z + v.z * t };
}

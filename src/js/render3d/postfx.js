/**
 * Postprocesado 3D: antialiasing MSAA + bloom (resplandor) + tonemapping ACES.
 *
 * La escena se renderiza a un objetivo HDR (half-float). Un paso de brillo extrae las zonas
 * muy luminosas (emisivos, antorchas, visores, balas), se desenfocan a media y cuarta
 * resolución y se suman antes del tonemapping final a pantalla.
 * Calidad Baja: sin postproceso. Media: bloom + MSAA x2. Alta: bloom + MSAA x4.
 */
'use strict';

const PFX = { ok: true, active: false, key: '', threshold: 0.95, strength: 1, hurt: 0, sprint: 0 };

const PFX_VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const PFX_BRIGHT = `
  uniform sampler2D tDiffuse; uniform float uThreshold; varying vec2 vUv;
  void main(){
    vec3 c = texture2D(tDiffuse, vUv).rgb;
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float k = smoothstep(uThreshold, uThreshold + 0.6, l);
    gl_FragColor = vec4(c * k, 1.0);
  }`;
const PFX_BLUR = `
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main(){
    vec3 s = texture2D(tDiffuse, vUv).rgb * 0.227027;
    s += texture2D(tDiffuse, vUv + uDir * 1.3846).rgb * 0.3162162; s += texture2D(tDiffuse, vUv - uDir * 1.3846).rgb * 0.3162162;
    s += texture2D(tDiffuse, vUv + uDir * 3.2308).rgb * 0.0702703; s += texture2D(tDiffuse, vUv - uDir * 3.2308).rgb * 0.0702703;
    gl_FragColor = vec4(s, 1.0);
  }`;
const PFX_COMP = `
  uniform sampler2D tScene; uniform sampler2D tBloomH; uniform sampler2D tBloomQ;
  uniform float uStrength; uniform float uTime; uniform float uHurt; uniform float uSprint;
  uniform float uSat; uniform float uContrast; varying vec2 vUv;
  float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main(){
    vec2 c = vUv - 0.5;
    float d = dot(c, c);
    float ab = (0.0006 + 0.003 * uSprint + 0.007 * uHurt) * d * 4.0;
    vec3 col;
    col.r = texture2D(tScene, vUv + c * ab).r;
    col.g = texture2D(tScene, vUv).g;
    col.b = texture2D(tScene, vUv - c * ab).b;
    col += (texture2D(tBloomH, vUv).rgb * 0.55 + texture2D(tBloomQ, vUv).rgb * 0.85) * uStrength;
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(vec3(l), col, uSat);
    col = max((col - 0.18) * uContrast + 0.18, 0.0);
    float vig = smoothstep(0.9, 0.22, length(c) * 1.25);
    col *= mix(1.0, vig, 0.55 + 0.3 * uHurt);
    col = mix(col, col * vec3(1.5, 0.5, 0.45), uHurt * smoothstep(0.15, 0.85, length(c) * 1.4));
    col += (rnd(vUv * vec2(1920.0, 1080.0) + uTime) - 0.5) * 0.022;
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <encodings_fragment>
  }`;

function pfxMat(frag, uniforms) {
  return new THREE.ShaderMaterial({
    vertexShader: PFX_VERT,
    fragmentShader: frag,
    uniforms,
    depthTest: false,
    depthWrite: false,
  });
}
function pfxTarget(w, h, samples, depth) {
  return new THREE.WebGLRenderTarget(Math.max(2, w | 0), Math.max(2, h | 0), {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: !!depth,
    samples: samples || 0,
  });
}
function pfxEnsure() {
  const r = R3.renderer,
    size = new THREE.Vector2();
  r.getDrawingBufferSize(size);
  const key = size.x + 'x' + size.y + ':' + SAVE.quality;
  if (PFX.key === key) return;
  if (PFX.rt) Object.values(PFX.rt).forEach(t => t.dispose());
  const w = size.x,
    h = size.y,
    ms = SAVE.quality >= 2 ? 4 : 2;
  PFX.rt = {
    scene: pfxTarget(w, h, ms, true),
    h1: pfxTarget(w / 2, h / 2),
    h2: pfxTarget(w / 2, h / 2),
    q1: pfxTarget(w / 4, h / 4),
    q2: pfxTarget(w / 4, h / 4),
  };
  if (!PFX.quad) {
    PFX.scene = new THREE.Scene();
    PFX.cam = new THREE.Camera();
    PFX.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
    PFX.quad.frustumCulled = false;
    PFX.scene.add(PFX.quad);
    PFX.bright = pfxMat(PFX_BRIGHT, { tDiffuse: { value: null }, uThreshold: { value: 0.95 } });
    PFX.blur = pfxMat(PFX_BLUR, {
      tDiffuse: { value: null },
      uDir: { value: new THREE.Vector2() },
    });
    PFX.comp = pfxMat(PFX_COMP, {
      tScene: { value: null },
      tBloomH: { value: null },
      tBloomQ: { value: null },
      uStrength: { value: 1 },
      uTime: { value: 0 },
      uHurt: { value: 0 },
      uSprint: { value: 0 },
      uSat: { value: 1.08 },
      uContrast: { value: 1.06 },
    });
  }
  PFX.key = key;
}
function pfxPass(material, target) {
  PFX.quad.material = material;
  R3.renderer.setRenderTarget(target);
  R3.renderer.render(PFX.scene, PFX.cam);
}
function pfxBlur(src, tmp, w, h) {
  PFX.blur.uniforms.tDiffuse.value = src.texture;
  PFX.blur.uniforms.uDir.value.set(1 / w, 0);
  pfxPass(PFX.blur, tmp);
  PFX.blur.uniforms.tDiffuse.value = tmp.texture;
  PFX.blur.uniforms.uDir.value.set(0, 1 / h);
  pfxPass(PFX.blur, src);
}
/** Renderiza `scene` con la cámara dada aplicando (si procede) el postprocesado. */
function postRender(scene, camera) {
  const r = R3.renderer;
  if (!PFX.ok || SAVE.quality === 0) {
    PFX.active = false;
    r.setRenderTarget(null);
    r.render(scene, camera);
    return;
  }
  try {
    pfxEnsure();
    const rt = PFX.rt,
      size = new THREE.Vector2();
    r.getDrawingBufferSize(size);
    r.setRenderTarget(rt.scene);
    r.render(scene, camera);
    PFX.bright.uniforms.tDiffuse.value = rt.scene.texture;
    PFX.bright.uniforms.uThreshold.value = PFX.threshold;
    pfxPass(PFX.bright, rt.h1);
    pfxBlur(rt.h1, rt.h2, size.x / 2, size.y / 2);
    // cuarto de resolución: copia reducida del resultado y nuevo desenfoque más ancho
    PFX.blur.uniforms.tDiffuse.value = rt.h1.texture;
    PFX.blur.uniforms.uDir.value.set(1 / size.x, 0);
    pfxPass(PFX.blur, rt.q1);
    pfxBlur(rt.q1, rt.q2, size.x / 4, size.y / 4);
    PFX.comp.uniforms.tScene.value = rt.scene.texture;
    PFX.comp.uniforms.tBloomH.value = rt.h1.texture;
    PFX.comp.uniforms.tBloomQ.value = rt.q1.texture;
    PFX.comp.uniforms.uStrength.value = PFX.strength;
    PFX.comp.uniforms.uTime.value = (performance.now() % 10000) / 1000;
    PFX.comp.uniforms.uHurt.value = PFX.hurt;
    PFX.comp.uniforms.uSprint.value = PFX.sprint;
    PFX.active = true;
    pfxPass(PFX.comp, null);
  } catch (e) {
    console.error('Postprocesado desactivado:', e);
    PFX.ok = false;
    r.setRenderTarget(null);
    r.render(scene, camera);
  }
}

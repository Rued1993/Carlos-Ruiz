/**
 * Postprocesado 3D: antialiasing MSAA + bloom (resplandor) + tonemapping ACES.
 *
 * La escena se renderiza a un objetivo HDR (half-float). Un paso de brillo extrae las zonas
 * muy luminosas (emisivos, antorchas, visores, balas), se desenfocan a media y cuarta
 * resolución y se suman antes del tonemapping final a pantalla.
 * Calidad Baja: sin postproceso. Media: bloom + MSAA x2. Alta: bloom + MSAA x4.
 */
'use strict';

const PFX = { ok: true, key: '', threshold: 0.95, strength: 1 };

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
  uniform float uStrength; varying vec2 vUv;
  void main(){
    vec3 c = texture2D(tScene, vUv).rgb;
    c += (texture2D(tBloomH, vUv).rgb * 0.55 + texture2D(tBloomQ, vUv).rgb * 0.85) * uStrength;
    gl_FragColor = vec4(c, 1.0);
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
    pfxPass(PFX.comp, null);
  } catch (e) {
    console.error('Postprocesado desactivado:', e);
    PFX.ok = false;
    r.setRenderTarget(null);
    r.render(scene, camera);
  }
}

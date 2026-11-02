// Edición «limpia» (para tiendas de apps): sin crossovers y sin nombres de otras franquicias.
// Se compila con:  npm run build:clean   (modo «clean»). La edición normal no cambia nada.
export const CLEAN = !!(import.meta.env && import.meta.env.MODE === 'clean');

// [expresión, reemplazo (minúsculas)] — de lo más específico a lo más general
const DICT = [
  ['ender dragon', 'dragón del vacío'], ['enderman titán', 'espectro titán'], ['endermite', 'larva del vacío'], ['enderman', 'espectro'],
  ['ojo(s)? de ender', 'ojo$1 del vacío'], ['perla(s)? de ender', 'perla$1 del vacío'], ['ender', 'vacío'],
  ['netherita', 'ónix'], ['nether', 'inframundo'], ['End', 'vacío', 'cs'],
  ['tormenta wither', 'tormenta marchita'], ['esqueleto(s)? wither', 'esqueleto$1 marchito$1'], ['wither', 'marchito'],
  ['warden', 'centinela'], ['herobrine', 'fantasma blanco'], ['piglin', 'porcino'], ['blaze', 'llamarada'], ['ghast', 'medusa'],
  ['shulker', 'cápsula'], ['phantom', 'espíritu'], ['hoglin', 'jabalí'], ['slime', 'gelatina'], ['creeper', 'detonador'],
  ['evoker', 'hechicero'], ['invocador', 'hechicero'], ['devastador', 'arrasador'], ['guardián ancestral', 'guardián marino'],
  ['vex', 'duende'], ['bloque de comandos', 'núcleo de mando'], ['arena de almas', 'arena espectral'], ['cubo(s)? de magma', 'bola$1 de magma'],
  ['shenlong', 'el Dragón de los deseos'], ['esfera(s)? del dragón', 'esfera$1 del deseo'], ['bola(s)? de dragón', 'esfera$1 del deseo'],
  ['semilla(s)? del ermitaño', 'fruto$1 dorado$1'], ['cerveza duff', 'refresco'], ['dona rosquilla', 'rosquilla'],
  ['\\s*\\(ps4[^)]*\\)', ''], ['ps4 / dualshock 4 / dualsense', 'mandos compatibles'],
];
const RULES = DICT.map(([src, to, f]) => [new RegExp('(?<![\\p{L}])(' + src + ')(?![\\p{L}])', f === 'cs' ? 'gu' : 'giu'), to]);
function fit(m, to) {
  if (m.length > 1 && m === m.toUpperCase()) return to.toUpperCase();
  if (/^\p{Lu}\p{L}*(\s\p{Lu}\p{L}*)+$/u.test(m)) return to.replace(/(^|\s)(?!(?:del|de|la|el|los|las)\s)(\p{L})/gu, (_, a, c) => a + c.toUpperCase()); // «Tormenta Wither» → «Tormenta Marchita»
  return m[0] !== m[0].toLowerCase() ? to[0].toUpperCase() + to.slice(1) : to;
}
export function clean(s) {
  if (!CLEAN || typeof s !== 'string' || !s) return s;
  let out = s;
  for (const [re, to] of RULES) out = out.replace(re, (m, ...g) => fit(m, to.replace(/\$(\d)/g, (_, i) => g[+i] || '')));
  return out;
}
// Mantiene limpio todo el texto que aparece en pantalla (menús, paneles, avisos)
export function watchDom() {
  if (!CLEAN) return;
  const walk = (n) => {
    if (n.nodeType === 3) { const c = clean(n.nodeValue); if (c !== n.nodeValue) n.nodeValue = c; return; }
    if (n.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(n.tagName)) return;
    for (const a of ['title', 'placeholder']) if (n.hasAttribute(a)) { const c = clean(n.getAttribute(a)); if (c !== n.getAttribute(a)) n.setAttribute(a, c); }
    n.childNodes.forEach(walk);
  };
  walk(document.body); document.title = clean(document.title);
  new MutationObserver((ms) => { for (const m of ms) { if (m.type === 'characterData') walk(m.target); else m.addedNodes.forEach(walk); } }).observe(document.body, { subtree: true, childList: true, characterData: true });
}

# Nébula-7: El Cubo

Juego en 3D (tercera persona) de impostores, zombis y cubos. Sin servidor ni dependencias en
tiempo de ejecución: canvas 2D para HUD/menús + [three.js](https://threejs.org) r149 para el 3D.

[![CI](../../actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)

## Jugar

- **Un solo archivo:** abre `dist/nebula7.html` con doble clic.
- **Versión de desarrollo:** abre `index.html` (carga los módulos de `src/` por separado).

## Modos

| Modo | Descripción |
|---|---|
| **Historia** | 5 capítulos con cinemáticas, voz y jefe final (`src/js/campaign/`). |
| **Niveles** | 12 retos con objetivos y 3 estrellas por tiempo. |
| **Partida libre** | Impostor clásico, Supervivencia Zombi o Mundo cubo (tipo Minecraft). |

### Controles

| Acción | Teclado y ratón | Mando |
|---|---|---|
| Mover / cámara | `WASD` / ratón (clic para capturarlo) o flechas | stick izq. / stick der. |
| Correr (gasta resistencia) | `Shift` | L3 |
| Usar / interactuar | `E` | A |
| Disparar · picar / atacar | clic izq. o `Espacio` | RT |
| Recargar (zombi) · reportar (clásico) · colocar (cubo) | `R` · `R` · clic der. o `F` | X |
| Cambiar arma · matar (impostor) · comer (cubo) | `Tab` / `1-4` · `Q` · `G` | B |
| Granada · tienda (zombi) | `G` · `B` | cruceta ↓ · Y |
| Crafteo (cubo) · ventilación (impostor) | `C` · `V` | Y |
| Sabotaje (impostor) | `F` | cruceta ↑ |
| Pausa y ajustes | `P` | Start |

Ajustes (en pausa y en el menú): calidad gráfica, dificultad, sensibilidad, campo de visión,
música y vista 3D/2D.

### Novedades

- **Zombis:** cargadores con recarga, subfusil, granadas, tienda entre oleadas (daño, cargadores,
  armadura, munición…), zombis *tanque*, *bomba* y *escupidor*, botín, puntos con combo y récord.
- **Mundo cubo:** hambre, animales, horno y carne asada, cama (duerme de noche), brotes que crecen
  hasta ser árboles, lluvia con tormentas, cielo con sol, luna, estrellas y nubes.
- **HUD:** kit propio (paneles de cristal, iconos vectoriales, barras con estela de daño, botones circulares con tecla y recarga, mira dinámica con marca de impacto e indicador de dirección del daño, minimapa con cono de visión).
- **Personajes:** cuerpo en forma de judía con oclusión horneada, visor de cristal con marco y reflejos, mochila redondeada con tira de luz, botas, zombis con garras, ojos brillantes y heridas, Alfa con púas, y 3 mascotas que te siguen.
- **Meta-juego:** armario (7 sombreros, 5 visores y 3 mascotas), 18 logros con estadísticas, reto diario y
  contador de FPS.
- **Audio:** motor Web Audio con reverb, efectos con estéreo según la posición y música adaptativa
  distinta por ambiente (menú, cinemática, nave, sabotaje, zombis, día y noche). Volúmenes ajustables.
- **Gráficos:** postprocesado HDR (MSAA, bloom, gradación de color, aberración cromática, viñeta de
  daño y grano), reflejos con mapas de entorno, luz de contorno en los personajes, haz de linterna
  volumétrico y polvo, suelo con detalle de juntas y remaches, hierba y hojas que se mecen con el
  viento, montañas en el horizonte, fogonazo, trazadoras, escombros 3D y zombis que caen.

## Estructura

```
index.html            entrada de desarrollo (generada)
dist/nebula7.html     versión de un solo archivo (generada)
build.py              genera ambas a partir de src/manifest.json
vendor/three.min.js   three.js r149
src/
  manifest.json       ORDEN de carga de los módulos (única fuente de verdad)
  styles/main.css
  js/
    core/             arranque, utilidades, audio (sfx), música, voz, ajustes, estado, entrada, mando, bucle
    data/             datos estáticos (mapa de la nave)
    game/             lógica del modo clásico: acciones, sabotajes, reuniones, bots, update
    modes/            modos independientes: zombie (+extras), sandbox (+supervivencia)
    campaign/         guardado, niveles/historia, misiones, logros, reto diario, cinemáticas, escenario 3D
    render2d/         dibujo 2D (personajes, mundo, textura del mapa)
    render3d/         capa three.js: init, escenas, modelos, cosméticos, cámara, sincronización, postfx, efectos
    ui/               pantallas (menús, reunión, minijuegos, final, pausa, resultado)
tests/smoke.test.js   pruebas de extremo a extremo (Playwright)
tools/lint.js         linter con análisis entre archivos
```

### Arquitectura

- **Scripts clásicos con ámbito global compartido** (no módulos ES) para que el juego funcione con
  doble clic desde `file://`. El orden de carga está en `src/manifest.json`; los archivos sólo
  pueden usar a nivel de carga lo definido *antes*; dentro de funciones, cualquier cosa.
- **Estado único:** `G` es la partida en curso (`G.mode` = `classic` | `zombie` | `sandbox`) y
  `scene` es la pantalla actual (`menu`, `play`, `meeting`, `cut`, `pause`, `mend`…).
- **Bucle:** `core/main-loop.js` → actualiza según `scene` y dibuja. Cada modo expone su
  `updX`/`drawX`; el render 3D se engancha en `drawWorld()` y, si falla, cae a 2D.
- **Misiones:** `campaign/missions.js`. El juego emite eventos con `mevent('clave', n)`
  (`task`, `ejectImp`, `zkill`, `item:madera`, `place:antorcha`…); las misiones sólo declaran
  objetivos (`campaign/data.js`) y el motor los cuenta, calcula estrellas y guarda en `localStorage`.
- **Render 3D:** el mundo de juego es 2D (x, y); `render3d/` lo proyecta a three.js (x→X, y→Z).
  La lógica nunca depende de three.js.

### Añadir contenido

- **Nivel:** añade un objeto a `LEVELS` en `campaign/data.js` (modo, `cfg`, objetivos, `par`).
- **Capítulo/cinemática:** `CHAPTERS` y `CUTS` en el mismo archivo.
- **Nuevo evento de objetivo:** llama a `mevent('mi_evento')` donde ocurra y úsalo como `k`.
- **Nuevo archivo:** créalo en `src/js/…` y añádelo a `src/manifest.json` en el orden correcto.

## Desarrollo

```bash
npm install          # eslint, prettier, playwright
npm run format       # prettier
npm run lint         # linter entre archivos (0 errores esperados)
npm test             # build + pruebas de humo en Chromium
python3 build.py     # sólo regenerar index.html y dist/nebula7.html
```

Las pruebas necesitan Chromium de Playwright (`npx playwright install chromium`).

## Publicar en GitHub

1. Crea un repositorio vacío en GitHub y sube el proyecto:

   ```bash
   git init -b main
   git add .
   git commit -m "Nébula-7: El Cubo"
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` ejecuta `.github/workflows/pages.yml`, que construye el juego y lo publica en
   `https://TU_USUARIO.github.io/TU_REPO/`. El workflow `ci.yml` pasa el linter, el formato y las
   pruebas de humo en cada push y pull request.

Alternativa sin Actions: **Source: Deploy from a branch → main / (root)**; funciona porque el
`index.html` de la raíz carga los módulos por rutas relativas.

## Licencia

MIT (ver `LICENSE`). three.js se incluye bajo su propia licencia MIT.

# Minecraft Web

Juego de bloques estilo Minecraft que corre en el navegador (JavaScript + Three.js + Vite). Sin imágenes ni sonidos externos: texturas, iconos y audio se generan por código.

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # versión de producción en dist/
```

## Qué incluye

- **Mundo:** terreno infinito por chunks, 3 biomas (llanura, desierto, nieve), océanos y playas, árboles, cactus, **cuevas** y **minerales** (carbón, hierro, oro, diamante) y lecho de roca.
- **Iluminación:** luz del cielo y oclusión ambiental por vértice (las cuevas son oscuras), **ciclo día/noche** con sol, luna, estrellas y nubes.
- **Agua:** nadar, ahogarse, niebla y tinte azul bajo el agua.
- **Supervivencia:** vida, hambre, daño por caída, regeneración, muerte y reaparición, tiempos de minado según herramienta y nivel, durabilidad.
- **Inventario y crafteo:** inventario de 36 ranuras, rejilla 2x2 y mesa de crafteo 3x3, recetas de herramientas (madera, piedra, hierro, diamante), tablones, palos, mesa, cristal, ladrillos.
- **Mobs:** cerdos y vacas (sueltan comida), zombis (atacan, se queman al sol) y creepers (explotan y destruyen bloques); aparecen de noche y en cuevas.
- **Horno y antorchas:** el horno funde mena de hierro/oro, cobble, arena, troncos y cocina la carne (usa carbón o madera como combustible); las antorchas dan luz cálida real que se propaga y no se apaga de noche.
- **Cámaras:** primera persona, tercera persona por detrás y por delante (tecla **V**), con modelo de jugador animado.
- **Interfaz:** menú rediseñado, HUD con corazones/comida/burbujas en pixel-art, ajustes de render, campo de visión, sensibilidad y volumen (se guardan).
- **Clima:** lluvia y tormentas aleatorias (nieve en el bioma nevado) con rayos y trueno, viento que mece las hojas y empuja al jugador, cielo oscuro y sonido de lluvia/viento. Tecla **T** para cambiar el clima.
- **5 jefes** (panel **B** para invocarlos al instante, o el bloque de comandos para la Tormenta Wither):
  - **Tormenta Wither**: rayo tractor, cráneos explosivos, devora bloques y su bloque de comandos es el punto débil.
  - **Ender Dragon**: vuela en círculos, pica en picado y lanza aliento; sus 4 cristales lo curan y hay que destruirlos.
  - **Wither**: cráneos que envenenan; con poca vida se acoraza y te persigue.
  - **Warden**: golpes devastadores y explosión sónica; oscurece la pantalla.
  - **Guardián Ancestral**: láser con carga que causa fatiga de minería; sus espinas devuelven daño.
- **Misiones (M):** 17 misiones (aprendiz, caza y jefes), con recompensas y XP; derrota a los 5 jefes para el logro final.
- **Más mobs:** oveja, gallina, esqueleto (con arco), araña y enderman (se enfada si lo miras y se teletransporta).
- **HUD y gráficos:** minimapa circular con mobs y jefes, nivel y XP, efectos de estado, rastreador de misiones, corazones/comida pixel-art, cielo con degradado y brillo solar, agua con oleaje, grietas al picar, hojas mecidas por el viento y antialiasing.
- **Creativo:** bloques infinitos, rotura instantánea, vuelo y paleta con todos los bloques e ítems.
- **Guardado automático** en el navegador (IndexedDB) y sonido procedural.

## Controles

| Acción | Tecla |
|---|---|
| Mover / saltar / correr | WASD / Espacio / Shift |
| Nadar arriba | Espacio |
| Romper / atacar (mantener) | Clic izquierdo |
| Colocar / comer / abrir mesa | Clic derecho |
| Elegir ranura | 1-9 o rueda |
| Inventario | E |
| Invocar jefes y mobs / Misiones | B / M |
| Datos de depuración | F3 |
| Cambiar clima (despejado/lluvia/tormenta) | T |
| Cambiar cámara (1ª / 3ª detrás / 3ª delante) | V |
| Tirar ítem | Q (supervivencia) |
| Volar | F (creativo; Espacio sube, Q baja) |
| Cambiar creativo/supervivencia | G |

## Estructura

- `src/main.js` – bucle, entrada, minería, combate, guardado, menús
- `src/world.js` – chunks, generación, mallado con luz y AO, raycast
- `src/player.js` – física, agua, vida/hambre
- `src/mobs.js` – modelos, IA y aparición de mobs
- `src/blocks.js` – bloques, ítems, herramientas y recetas
- `src/ui.js` / `src/inventory.js` – HUD, inventario y crafteo
- `src/playermodel.js` – modelo del jugador para tercera persona
- `src/boss.js` / `src/bosses.js` – jefes
- `src/quests.js` – misiones
- `src/sky.js`, `src/atlas.js`, `src/icons.js`, `src/audio.js`, `src/save.js`, `src/entities.js`, `src/noise.js`

## Hoja de ruta

- [ ] Agua que fluye, lava
- [ ] Cultivos, camas, armaduras y arcos
- [ ] Estructuras (aldeas, minas), más biomas
- [ ] Multijugador

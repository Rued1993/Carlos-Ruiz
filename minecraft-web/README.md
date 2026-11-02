# Minecraft Web

Juego de bloques estilo Minecraft que corre en el navegador (JavaScript + Three.js + Vite). Sin imágenes ni sonidos externos: texturas, iconos y audio se generan por código.

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # versión de producción en dist/
```

## Qué incluye

- **Mundo enorme (128 de alto, sin límites):** océanos profundos, cordilleras de hasta ~120 bloques con cumbres nevadas, ríos, selva, bosques, desierto, tundra, cuevas, minerales y **pueblos** con casas, pozo y caminos. Distancia de render hasta 16 chunks.
- **Dimensiones:**
  - **El Nether:** cavernas inmensas, mar de lava, piedra luminosa, arena de almas, brasas flotando, **piglins zombificados** y **blazes**. 1 bloque = 8 del Overworld.
  - **El End:** isla flotante de piedra del End, 10 pilares de obsidiana con cristales, endermans y el **Ender Dragon** al entrar; al vencerlo se abre el portal de salida.
  - **Portales:** obsidiana (8 adoquines + 1 diamante = 2) en un marco 4x5, y se enciende con el **encendedor** (hierro + carbón). Para el End: 12 marcos (8 obsidiana + 1 diamante = 4) con **ojos de Ender** (perla + carbón). También puedes viajar al instante desde el panel **B**.
- **Varias partidas guardadas:** cada mundo con nombre, semilla opcional, miniatura, nivel y tiempo jugado; autoguardado, guardado manual, renombrar, borrar y **exportar/importar** a archivo `.mcw`. Las partidas antiguas se migran solas.
- **10 jefes** (panel **B** para invocarlos al instante): Tormenta Wither, Ender Dragon, Wither, Warden, Guardián Ancestral, **Devastador, Invocador, Ghast Gigante, Herobrine y Rey Slime**, cada uno con fases y mecánicas propias (cristales que curan, bolas de fuego que se devuelven a golpes, colmillos y vex, ondas expansivas…).
- **Misiones (M):** 22 misiones; derrota a los 10 jefes para el logro final.
- **Gráficos hiperrealistas** (4 calidades en el menú de pausa): iluminación física con **sombras reales** de sol y luna, texturas HD con **mapas de relieve**, tonemapping cinematográfico, **bloom**, corrección de color, MSAA, antorchas con luz emisiva, agua con oleaje y reflejos del sol, tinte de vegetación por clima, cielo con degradado y niebla.
- **Mobs:** cerdo, vaca, oveja, gallina, zombi, esqueleto (arco), araña, creeper, enderman y slime.
- **Supervivencia, crafteo, horno, antorchas, clima con tormentas y rayos, minimapa, XP y efectos de estado.**
- **Creativo:** bloques infinitos, vuelo y paleta con todo.

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
- `src/save.js` – partidas múltiples, exportar/importar
- `src/sky.js`, `src/atlas.js`, `src/icons.js`, `src/audio.js`, `src/save.js`, `src/entities.js`, `src/noise.js`

## Hoja de ruta

- [ ] Agua que fluye, lava
- [ ] Cultivos, camas, armaduras y arcos
- [ ] Minas, templos y más estructuras
- [ ] Fortalezas del Nether, ciudades del End y elitros
- [ ] Multijugador

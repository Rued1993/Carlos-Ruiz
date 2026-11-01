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
- `src/sky.js`, `src/atlas.js`, `src/icons.js`, `src/audio.js`, `src/save.js`, `src/entities.js`, `src/noise.js`

## Hoja de ruta

- [ ] Agua que fluye, lava
- [ ] Más mobs (esqueletos, arañas), cultivos, camas
- [ ] Estructuras (aldeas, minas), más biomas
- [ ] Multijugador

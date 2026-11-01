# Minecraft Web

Juego de bloques estilo Minecraft que corre en el navegador (JavaScript + Three.js + Vite).

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # versión de producción en dist/
```

## Controles

| Acción | Tecla |
|---|---|
| Mover | WASD |
| Saltar | Espacio |
| Correr | Shift |
| Volar (on/off) | F (Espacio sube, Q baja) |
| Romper / colocar bloque | Clic izq. / Clic der. |
| Elegir bloque | 1-8 o rueda del ratón |

## Estructura

- `src/world.js` – chunks, generación de terreno y árboles, mallado, raycast de vóxeles
- `src/player.js` – movimiento, gravedad y colisiones AABB
- `src/atlas.js` – texturas generadas por código (sin imágenes)
- `src/blocks.js` – definición de bloques
- `src/noise.js` – ruido con semilla

## Hoja de ruta

- [x] Terreno por chunks, árboles, romper/colocar bloques
- [ ] Agua y cuevas
- [ ] Guardado del mundo
- [ ] Ciclo día/noche
- [ ] Inventario y crafteo
- [ ] Mobs

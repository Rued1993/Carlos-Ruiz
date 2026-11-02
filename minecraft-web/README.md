# VoxelLands

Juego de bloques (voxels) que corre en el navegador (JavaScript + Three.js + Vite). Sin imágenes ni sonidos externos: texturas, iconos y audio se generan por código.

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
- **Estructuras de dimensión:** **fortalezas del Nether** (sala central de 17x17, cuatro puentes con arcos y barandillas, torres con entresuelo, cofres; dentro aparecen esqueletos Wither y blazes) y **ciudades del End** (torres de purpur con escaleras y ventanas, cofres y una **nave voladora con élitros**; dentro aparecen shulkers). Los **cofres** se abren con clic derecho y dan botín único.
- **Élitros:** con ellos en la mano, salta y pulsa saltar otra vez en el aire para planear; apunta con la cámara para dirigir el vuelo.
- **Mando (PS4 DualShock 4 / DualSense):** funciona por USB o Bluetooth con la API Gamepad del navegador. Stick izquierdo mover, derecho mirar, R2 romper/atacar, L2 usar, ✕ saltar, △ inventario, L1/R1 ranuras… Cursor virtual y cruceta para menús e inventario, vibración, y un panel (tecla **P** o botón en la pausa) para ajustar sensibilidad, zona muerta, curva, invertir Y y **reasignar cualquier botón**, con probador en vivo.
- **Varias partidas guardadas:** cada mundo con nombre, semilla opcional, miniatura, nivel y tiempo jugado; autoguardado, guardado manual, renombrar, borrar y **exportar/importar** a archivo `.mcw`. Las partidas antiguas se migran solas.
- **19 jefes** (panel **B** para invocarlos al instante): Tormenta Wither, Ender Dragon, Wither, Warden, Guardián Ancestral, Devastador, Invocador, Ghast Gigante, Herobrine, Rey Slime y los nuevos **Gólem Colosal, Creeper Titán** (Overworld), **Rey Blaze, Rey Piglin** (Nether) y **Enderman Titán, Señor del Vacío** (End). Cada uno con fases y mecánicas propias: ondas de choque que hay que saltar, explosiones colosales, grietas del vacío, bolas de fuego que se devuelven a golpes, cristales que curan…
- **Misiones (M):** misiones de aprendizaje, caza, dimensiones y jefes; derrota a los 19 jefes para el logro final.
- **Gráficos** (5 calidades en el menú de pausa, de **Clásico (píxel)** —texturas 16 px sin suavizar, caras planas, estilo Minecraft original— a **Ultra hiperrealista**): iluminación física con **sombras reales** de sol y luna, texturas HD con **mapas de relieve**, tonemapping cinematográfico, **bloom**, corrección de color, MSAA, antorchas con luz emisiva, agua con oleaje y reflejos del sol, tinte de vegetación por clima, cielo con degradado y niebla.
- **Mobs:** cerdo, vaca, oveja, gallina, zombi, esqueleto (arco), araña, creeper, enderman y slime. **Nether:** piglin zombificado, blaze, cubo de magma, esqueleto Wither, Ghast y Hoglin. **End:** enderman, Shulker (balas que te hacen levitar), Endermite y Phantom.
- **Niveles de herramientas y armaduras como en Minecraft:** madera, piedra, oro, hierro, diamante y **netherita** (diamante + lingote de netherita; el lingote = restos antiguos fundidos + oro). Armaduras de cuero, oro, hierro, diamante y netherita en 4 ranuras (casco, peto, grebas, botas) con durabilidad y reducción de daño; se equipan con clic derecho.
- **Más estructuras:** pirámides del desierto (7 cofres), templos de la selva, iglús, puestos de saqueadores y ruinas; aldeas ampliadas con herrería, iglesia con campanario, biblioteca, farolas y más casas. Las casas tienen **tejado de escaleras**, **puerta de madera** (clic derecho para abrir) y un **jardín vallado**. Los **aldeanos** viven en las casas y comercian (clic derecho).
- **Crossovers:** **Among Us** (tripulantes de colores, impostores que se teletransportan, **Impostor Supremo**), **Los Simpson** (Homer, Bart, Marge, Lisa, Maggie, Flanders, perros y el jefe **Sr. Burns**) y **Dragon Ball** (saibamen explosivos, el jefe **Goku** con Kamehameha, Super Saiyajin y Genki Dama, semillas del ermitaño y las **7 Bolas de Dragón** que invocan a Shenlong para pedir un deseo).
- **Modo One Block:** botón del menú. Un mundo vacío con un solo bloque que se regenera al romperlo, con fases (Llanura → Bosque y cueva → Desierto y nieve → Mina profunda → Nether → End → Caos crossover), mobs, recompensas y jefes por hitos.
- **Pociones y encantamientos:**
  - **Pociones** (soporte de pociones: 1 soporte = 3 cobbles + polvo de blaze): botella de cristal (3 cristales en V) + **verruga del Nether** (arena de almas, fortalezas) + ingrediente. Curación (manzana), regeneración (oro), rapidez (hierro), fuerza (polvo de blaze de los blazes), resistencia al fuego (crema de magma de los cubos de magma), salto (cuero) y visión nocturna (piedra luminosa). Se beben con clic derecho y devuelven la botella.
  - **Encantamientos** (mesa de encantamientos: libro + 2 diamantes + 4 obsidiana; libro = 3 cuero): cuestan niveles de XP y **lapislázuli** (nueva mena bajo tierra). Eficiencia, Fortuna, Irrompibilidad, Filo, Aspecto ígneo, Protección y Caída de pluma, con brillo violeta en el inventario.
- **Móvil / Android (controles táctiles):** joystick flotante a la izquierda (empujarlo del todo = correr), a la derecha **arrastrar = mirar, toque corto = usar/colocar, mantener = romper/atacar**, y botones de saltar, picar, usar, correr, volar/descender (creativo), inventario, misiones, cámara y chat. Botón ✕ para cerrar paneles e inventario (con «Tocar: todo/1 unidad» para dividir pilas). Extras: pantalla completa y bloqueo horizontal, pantalla siempre encendida, vibración al romper o recibir daño, pausa automática al cambiar de app, ajustes ligeros por defecto y **bajada automática de distancia/calidad** si los FPS son bajos. **Autoajuste a cualquier pantalla:** los menús hacen scroll cuando no caben, el menú de pausa se reparte en dos columnas en móvil horizontal, y los paneles (inventario, misiones, comercio…) se escalan solos; la app instalada gira con el móvil (vertical y horizontal). Se activa solo en pantallas táctiles (o con `?touch`); se cambia en el menú de pausa.
- **App instalable (PWA):** manifest, icono y *service worker*. Tras la primera visita funciona **sin conexión** (menos el multijugador) y puedes instalarla como app con el botón «📲 Instalar como app» del menú (o desde el navegador: Chrome/Edge/Android «Instalar», iOS «Añadir a pantalla de inicio»). Se abre a pantalla completa y se actualiza sola cuando hay red.
- **Multijugador:** servidor WebSocket incluido (`server/server.js`). El servidor guarda la semilla y **todos los bloques editados** (en `server/world.json`); cada cliente genera el terreno y recibe los cambios. Se ven los demás jugadores (modelo con nombre y objeto en la mano, también por dimensión), **chat** (Enter), hora del día compartida y el mundo persiste entre sesiones. Los mobs, jefes y clima son locales a cada jugador.
  - Arrancar: `npm install` y `npm run server` (variables opcionales: `PORT=8080 SEED=1234 MODE=creative MAX_PLAYERS=16`).
  - Conectar: en el menú, «Multijugador» → `ws://IP:8080` y tu nombre. En red local abre el juego con `npm run dev` (http). La versión de GitHub Pages es https: allí hace falta un servidor `wss://` (por ejemplo, exponer el puerto con un túnel de Cloudflare/ngrok); `ws://localhost` también funciona.
- **Bloques con forma:** **losas** (mitad inferior o superior según dónde apuntes; dos losas iguales hacen el bloque completo), **escaleras** (se orientan hacia donde miras; de madera, adoquín, ladrillo y arenisca), **vallas** que se conectan entre sí y con bloques, y **puertas** de dos bloques que se abren con clic derecho. Colisión por cajas parciales: subes losas y escalones sin saltar. Recetas en la mesa de crafteo (3 losas → 6, patrón en L → 4 escaleras, 2×3 tablones → 3 puertas…).
- **Web Workers:** la generación del terreno y el mallado de chunks se hacen en hilos aparte (la carga en el hilo principal baja de ~80 ms a ~7 ms por fotograma al avanzar). Añade `?noworker` a la URL para volver al modo síncrono.
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
- [ ] Bastiones piglin, fragmentos de armadura y más estructuras
- [ ] Multijugador

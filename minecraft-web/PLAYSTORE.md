# Publicar VoxelLands en Google Play (guía)

El juego ya es una PWA (manifest, iconos, service worker, modo sin conexión). Para Google Play se empaqueta como **Trusted Web Activity (TWA)**.

## 0. Requisitos
1. **Cuenta de desarrollador de Google Play** (25 USD, pago único; verificación de identidad).
2. **Dominio en la raíz con HTTPS.** Play exige `https://TU-DOMINIO/.well-known/assetlinks.json`, y en GitHub Pages un sitio de proyecto (`usuario.github.io/Repo/`) no puede servir esa ruta. Opciones:
   - Crear un repositorio llamado **`TU-USUARIO.github.io`** y publicar ahí el contenido de la carpeta raíz de este repositorio (`index.html`, `assets/`, `icons/`, `sw.js`, `manifest.webmanifest`, `privacy.html`). Dominio: `https://TU-USUARIO.github.io/`.
   - O un dominio propio apuntando a GitHub Pages.
3. Verificar que en esa dirección el juego carga, se puede instalar y funciona sin conexión (Lighthouse › PWA).

## 1. Generar el paquete
- Entra en <https://www.pwabuilder.com>, pega la dirección del juego y elige **Android › Google Play**. Descarga el `.aab` y la **clave de firma** (guárdala: sin ella no podrás actualizar).
- (Alternativa: `npx @bubblewrap/cli init --manifest=https://TU-DOMINIO/manifest.webmanifest` y `bubblewrap build`.)

## 2. Digital Asset Links
Crea `.well-known/assetlinks.json` en la raíz del dominio (en un sitio Pages hace falta un archivo `.nojekyll` para que se sirva la carpeta oculta):
```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.tudominio.voxellands",
    "sha256_cert_fingerprints": ["AA:BB:...:HUELLA_SHA256_DE_TU_CLAVE"]
  }
}]
```
La huella sale de PWABuilder/Bubblewrap (y, si usas «Play App Signing», de Play Console › Integridad de la app).

## 3. Ficha en Play Console
- Nombre: VoxelLands · icono 512×512 (`icons/icon-512.png`) · gráfico de funciones 1024×500 · 2-8 capturas.
- **Política de privacidad:** `https://TU-DOMINIO/privacy.html` (ya incluida).
- Cuestionario de contenido: violencia de fantasía; sin compras ni anuncios; sin recopilación de datos.
- Cuentas personales nuevas: prueba cerrada con ≥12 testers durante 14 días antes de pasar a producción.

## 4. Antes de enviar: usa la edición limpia ✔
El repositorio incluye una **edición limpia** lista para la tienda en la carpeta `clean/` (se genera con `npm run build:clean`, salida en `dist-clean/`). Para publicarla, copia el contenido de `clean/` como raíz de tu sitio (`TU-USUARIO.github.io`) en lugar de la edición normal. Qué cambia respecto a la normal:
- **Sin crossovers:** fuera Among Us, Los Simpson y Dragon Ball (mobs, jefes Impostor Supremo, Sr. Burns y Goku, y sus misiones).
- **Nombres propios:** Creeper → Detonador, Enderman → Espectro, Ender Dragon → Dragón del Vacío, Wither → Marchito, Warden → Centinela, Herobrine → Fantasma blanco, Piglin → Porcino, Blaze → Llamarada, Ghast → Medusa, Shulker → Cápsula, Nether → Inframundo, End → Vacío, netherita → ónix…; las esferas del dragón pasan a «esferas del deseo».
- **Rediseño visual** de mobs y jefes: nuevos colores y adornos propios (coronas de cristal, púas, halos, órbitas luminosas).
- Sin menciones a PS4 ni a otras marcas.

Limitación honesta: el rediseño se apoya en los modelos de cubos originales (cambia colores y añade adornos), no son modelos nuevos desde cero. Si Google o un titular de derechos lo cuestionara, habría que rediseñarlos más a fondo.

## 5. Propiedad intelectual de la edición normal ⚠
Google revisa la marca y los derechos. Esta versión **ya no usa el nombre «Minecraft»**, pero el juego aún incluye personajes y referencias de otras franquicias que pueden provocar el rechazo o la retirada de la app:
- Criaturas con los nombres/diseños de Minecraft (Creeper, Enderman, Ender Dragon, Wither, Warden, Herobrine…).
- Crossovers: Among Us, Los Simpson (Homer, Bart, Marge…), Dragon Ball (Goku, Saibamen, Shenlong, Bolas de Dragón).

Para la versión de la tienda lo recomendable es **renombrar y rediseñar** esos mobs, jefes e ítems con personajes propios (o dejarlos solo en la versión web privada).

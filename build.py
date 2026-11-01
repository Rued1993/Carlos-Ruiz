#!/usr/bin/env python3
"""Genera los artefactos jugables a partir de src/manifest.json.

  index.html          -> entrada de desarrollo (carga cada módulo con <script src>)
  dist/nebula7.html   -> versión de un solo archivo (CSS + three.js + juego en línea)

Uso: python3 build.py
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent
TITLE = "Nébula-7: El Cubo"
BODY = '<canvas id="gl"></canvas><canvas id="c"></canvas>'


def read(rel):
    return (ROOT / rel).read_text(encoding="utf-8")


def page(head_extra, scripts):
    return (
        '<!DOCTYPE html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">\n'
        f"<title>{TITLE}</title>\n{head_extra}\n</head>\n<body>\n{BODY}\n{scripts}\n</body>\n</html>\n"
    )


def main():
    manifest = json.loads(read("src/manifest.json"))

    dev_scripts = '<script src="vendor/three.min.js"></script>\n' + "\n".join(
        f'<script src="{m}"></script>' for m in manifest
    )
    (ROOT / "index.html").write_text(
        page('<link rel="stylesheet" href="src/styles/main.css">', dev_scripts), encoding="utf-8"
    )

    game = "\n".join(f"/* ---- {m} ---- */\n{read(m)}" for m in manifest)
    inline = f"<script>{read('vendor/three.min.js')}</script>\n<script>\n{game}\n</script>"
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "nebula7.html").write_text(
        page(f"<style>\n{read('src/styles/main.css')}</style>", inline), encoding="utf-8"
    )
    print(f"OK: index.html (dev, {len(manifest)} módulos) y dist/nebula7.html (un solo archivo)")


if __name__ == "__main__":
    main()

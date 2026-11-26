# 🐶 Labrador de Escritorio

Mascota animada para Windows: un cachorro labrador negro estilo anime/Ghibli sentado frente a un pequeño teclado. La ventana no tiene bordes, tiene fondo transparente y permanece sobre el escritorio.

## Funciones

- Animación en bucle de escritura, parpadeo, movimiento de patitas y cola.
- Fondo transparente y ventana sin marco.
- Siempre visible (se puede desactivar desde el menú contextual).
- Se puede arrastrar por el escritorio.
- Clic izquierdo: el cachorro responde con una frase.
- Clic derecho: opciones para centrarlo, cambiar siempre visible o salir.
- Compilación automática para Windows mediante GitHub Actions.

## Probar en tu PC

Necesitás Node.js 24 o superior para ejecutar o compilar localmente.

```bash
npm install
npm start
```

## Generar los ejecutables

```bash
npm run dist
```

Los archivos aparecerán en la carpeta `dist/`: instalador Windows (NSIS) y versión portable. Se generan con nombres distintos para evitar que uno sobrescriba al otro. La compilación no intenta publicar automáticamente desde electron-builder; GitHub Actions guarda los ejecutables como artefacto y solo los adjunta a una Release cuando ejecutás el workflow sobre una etiqueta `v*`.

## Compilar desde GitHub (sin instalar herramientas en tu PC)

1. Creá un repositorio nuevo en GitHub, por ejemplo `labrador-escritorio`.
2. Subí todo el contenido de esta carpeta a la rama `main`.
3. Entrá en **Actions** y habilitá los workflows si GitHub lo solicita.
4. Elegí **Compilar Labrador para Windows** y presioná **Run workflow**.
5. Al terminar, abrí la ejecución y descargá el artefacto **Labrador-Escritorio-Windows**.

También se compila automáticamente con cada `push` a `main`. Para publicar una Release, creá y subí una etiqueta `v1.0.0`.

## Controles

- Arrastrar desde el pequeño tirador ⠿ que aparece al pasar el mouse: mover la mascota.
- Clic izquierdo sobre el cachorro: saludo aleatorio.
- Clic derecho: menú de opciones.

## Personalización

La animación está en `assets/labrador-sprite.png`. Los tiempos y movimientos se ajustan en `styles.css`; las frases se cambian en `renderer.js`.

## Nota

La mascota no captura teclas ni registra lo que escribís. El teclado dibujado forma parte de la ilustración.

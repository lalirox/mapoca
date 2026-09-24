# MAPOCA TELECOM

Sitio de ciberseguridad, infraestructura y tecnología. El build genera el formato de Vercel (Nitro). No hace falta base de datos ni variables de entorno.

## Publicar en Vercel desde GitHub

1. En Vercel, importa el repositorio `lalirox/mapoca`.
2. Framework Preset: **Other**.
3. Node.js: **22.x**.
4. Build Command: `npm run build`.
5. Deja vacía la carpeta de salida. Nitro escribe `.vercel/output` al terminar el build.
6. No configures `DATABASE_URL`. Esta página no guarda datos.

Cada push a `main` vuelve a desplegar.
DIseñado por Eduardo Carrillo tech para MApoca tech

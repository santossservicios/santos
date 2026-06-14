# Panel de Admin + Cloudinary — Guía de configuración

El sitio es estático (`index.html`) + funciones serverless en `/api`. El admin
sube fotos a Cloudinary y se muestran solas en la galería y en los modales de
servicios.

## 1) Crear cuenta de Cloudinary (gratis)
1. Entrá a https://cloudinary.com y creá una cuenta gratis.
2. En el **Dashboard** vas a ver: **Cloud name**, **API Key** y **API Secret**.

## 2) Cargar variables de entorno en Vercel
En Vercel → tu proyecto → **Settings → Environment Variables**, agregá (para
Production y Preview):

| Variable | Valor |
|---|---|
| `CLOUDINARY_CLOUD_NAME` | el Cloud name del dashboard |
| `CLOUDINARY_API_KEY` | la API Key |
| `CLOUDINARY_API_SECRET` | la API Secret |
| `ADMIN_PASSWORD` | la contraseña para entrar a `/admin` |
| `SESSION_SECRET` | una cadena larga al azar (firma la sesión) |

> Nunca pongas estos valores en el chat ni los subas al repo.

## 3) Deploy
Desde la carpeta del proyecto:
```
npx vercel deploy --prod --yes
```

## 4) Usar el admin
- Entrá a `https://TU-DOMINIO/admin` (no está linkeado en el sitio: solo vos
  sabés la dirección).
- Ingresá con la `ADMIN_PASSWORD`.
- Elegí la sección (Galería de Trabajos o un servicio), tocá **Subir fotos**,
  ordená con las flechas y borrá con la papelera.
- Las fotos aparecen automáticamente en la página pública.

## Probar en local (opcional)
Para correr las funciones en tu compu necesitás las credenciales:
```
npm install
npx vercel dev
```
(usa un archivo `.env` local con las mismas variables — ver `.env.example`).

## Cómo se organizan las fotos
- Galería de Trabajos → tag `trabajos`.
- Cada servicio → tag `servicio-<nombre>` (ej. `servicio-pintura`).
- El orden se guarda en el metadato `order` de cada imagen.

\# BackendIVD



API REST del sistema del \*\*Instituto Veracruzano del Deporte (IVD)\*\* — gestión de atletas, entrenadores, clubes, eventos, convocatorias y resultados deportivos del estado de Veracruz.



\## Tecnologías



\- \*\*Node.js\*\* con \*\*Express\*\*

\- \*\*PostgreSQL\*\* (a través de \[Supabase](https://supabase.com)) como base de datos

\- \*\*Supabase Auth\*\* para autenticación y manejo de sesiones

\- \*\*Cloudinary\*\* para almacenamiento de imágenes y documentos

\- \*\*Brevo\*\* para el envío de correos (confirmación de cuenta, recuperación de contraseña, notificaciones)

\- \*\*Zod\*\* para validación de datos de entrada

\- \*\*Helmet\*\*, \*\*CORS\*\* y \*\*express-rate-limit\*\* para seguridad básica de la API



\## Estructura del proyecto
src/

├── config/ # Conexión a la base de datos y cliente de Supabase

├── controllers/ # Lógica de cada endpoint

├── middlewares/ # Autenticación, verificación de roles, validación, límite de peticiones

├── models/ # Consultas a la base de datos

├── routes/ # Definición de rutas de la API

├── schemas/ # Esquemas de validación (Zod)

├── services/ # Envío de correos, limpieza de archivos en Cloudinary

├── utils/ # Funciones compartidas

└── app.js # Configuración de la aplicación Express

server.js # Punto de entrada



\## Instalación local



1\. Clona el repositorio e instala las dependencias:

```bash

&#x20;  git clone https://github.com/IVD2025/BackendIVD.git

&#x20;  cd BackendIVD

&#x20;  npm install

```



2\. Crea un archivo `.env` en la raíz con las siguientes variables:



```env

&#x20;  # Base de datos y autenticación (Supabase)

&#x20;  SUPABASE\_URL=

&#x20;  SUPABASE\_SERVICE\_ROLE\_KEY=

&#x20;  DATABASE\_URL=



&#x20;  # Almacenamiento de archivos (Cloudinary)

&#x20;  CLOUDINARY\_CLOUD\_NAME=

&#x20;  CLOUDINARY\_API\_KEY=

&#x20;  CLOUDINARY\_API\_SECRET=



&#x20;  # Envío de correos (Brevo)

&#x20;  BREVO\_API\_KEY=

&#x20;  EMAIL\_FROM\_NAME=

&#x20;  EMAIL\_FROM\_EMAIL=



&#x20;  # Puerto local (opcional, Render lo asigna solo en producción)

&#x20;  PORT=5000

```



&#x20;  > ⚠️ El archivo `.env` nunca debe subirse al repositorio — ya está incluido en `.gitignore`.



3\. Levanta el servidor en modo desarrollo (se reinicia solo al guardar cambios):

```bash

&#x20;  npm run dev

```



&#x20;  O en modo normal:

```bash

&#x20;  npm start

```



&#x20;  Por defecto corre en `http://localhost:5000`.



\## Endpoints principales



Todas las rutas viven bajo el prefijo `/api`:



| Ruta | Descripción |

|---|---|

| `/api/auth` | Registro, inicio de sesión, cierre de sesión |

| `/api/recuperar` | Recuperación de contraseña por correo |

| `/api/atletas` | Gestión de atletas |

| `/api/entrenador` / `/api/entrenadores` | Gestión de entrenadores |

| `/api/clubes` | Gestión de clubes |

| `/api/eventos` | Eventos y convocatorias |

| `/api/resultados` | Resultados de convocatorias |

| `/api/catalogos` | Catálogos (disciplinas, categorías, géneros) |

| `/api/notificaciones` | Notificaciones del sistema |

| `/api/contenido` | Contenido institucional (misión, visión, políticas) |

| `/api/perfil-empresa` | Datos públicos del Instituto (contacto, redes sociales) |

| `/api/admins` | Gestión de cuentas de administrador |



Prueba rápida de que el servidor está corriendo:


GET /api/test



\## Despliegue



El backend está desplegado en \*\*\[Render](https://render.com)\*\*, conectado directamente a este repositorio (rama `master`). Cualquier cambio subido a `master` se despliega automáticamente.



Las variables de entorno de producción se configuran en el dashboard de Render, en la sección \*\*Environment\*\* del servicio — no en un archivo `.env` (ese solo se usa en desarrollo local).



\## Seguridad



\- La autenticación se maneja completamente a través de Supabase Auth; este backend nunca almacena contraseñas.

\- Las rutas de escritura sensibles (crear/editar/eliminar clubes, eventos, resultados) están protegidas por rol mediante los middlewares `checkAdmin` / `checkAdminOClub`.

\- Las validaciones de negocio (elegibilidad de inscripción por edad y género, por ejemplo) se verifican tanto en el frontend como en el backend.



\---

Proyecto desarrollado para el \*\*Instituto Veracruzano del Deporte\*\*.


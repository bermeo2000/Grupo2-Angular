# 📘 Grupo2-Angular

Desarrollo de una interfaz básica en Angular para gestión de datos.  
Construcción de una aplicación frontend simple que permite *registrar, listar, editar y eliminar* elementos de la entidad

# 🚀 Instalación y ejecución del proyecto

## 1️⃣ Verificar Node.js 20 en adeante y NPM 11.6.2

bash
node -v
npm -v


---

## 2️⃣ Instalar Angular CLI

Instala Angular CLI globalmente:

bash
npm install -g @angular/cli


Verifica la instalación:

bash
ng version


---

## 3️⃣ Clonar el proyecto desde GitHub

bash
git clone https://github.com/bermeo2000/Grupo2-Angular.git
cd Grupo2-Angular


---

## 4️⃣ Instalar dependencias del proyecto

Dentro de la carpeta del proyecto, ejecuta:

bash
npm install


Esto descargará todas las librerías necesarias (Angular, RxJS, etc.).

---

## 5️⃣ Ejecutar la aplicación

bash
ng serve


Abre tu navegador en:

👉 http://localhost:4200

---

## 🛠️ Tecnologías utilizadas

* Angular
* TypeScript
* Node.js
* NPM

---

## 📌 Notas

* Asegúrate de tener Node.js instalado correctamente.
* Si tienes problemas con dependencias, intenta:

bash
npm install --force




---

## Restricciones didácticas

Para mantener la aplicación simple y enfocada en el aprendizaje:

- Usar Angular *standalone* o estructura tradicional.
- Usar *HttpClient* para las solicitudes HTTP.
- Formularios con *ngModel*.
- No se usa routing complejo.
- No se usar guards.
- No se usar autenticación.
- No se usar Angular Material.
- No se usar estados globales.

### Formulario de Estudiantes

Campos:

- Nombres
- Apellidos
- Correo

### Tabla de Estudiantes

Columnas:

- ID
- Nombres
- Apellidos
- Correo
- Acciones (Editar / Eliminar)

---

## Estructura de carpetas

```text
src/
├── app/
│   ├── components/           # Carpeta para componentes
│   ├── models/               # Interfaces y clases de datos
│   ├── services/             # Lógica de negocio y HttpClient
│   ├── app.component.css     # Estilos del componente principal
│   ├── app.component.html    # Template del componente principal
│   ├── app.component.spec.ts # Pruebas unitarias
│   ├── app.component.ts      # Lógica del componente principal
│   ├── app.config.server.ts  # Configuración para SSR (Server Side Rendering)
│   ├── app.config.ts         # Configuración global de la App
│   └── app.routes.ts         # Definición de rutas
├── environments/             # Variables de entorno (prod/dev)
├── index.html                # Archivo HTML principal
├── main.server.ts            # Punto de entrada para el servidor
├── main.ts                   # Punto de entrada principal de Angular
└── styles.css                # Estilos globales

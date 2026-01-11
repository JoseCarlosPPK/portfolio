# 💼 Portfolio Personal

Este es mi **portfolio personal**, desarrollado con **React** y **Vite**, y desplegado en **GitHub Pages** utilizando `gh-pages`.

El proyecto está diseñado para ser fácilmente mantenible, separando los datos del contenido en ficheros independientes que React consume.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧭 React Router DOM
- 🧹 ESLint & Prettier
- 📦 gh-pages

---

## 📁 Estructura del proyecto

El contenido del portfolio se gestiona mediante ficheros de datos (JS o JSON), lo que permite modificar la información sin tocar la lógica de React.

Ejemplos de ficheros:

- `about_me.js` → Información personal
- `projects.js` → Lista de proyectos
- `techs.js` → Tecnologías utilizadas
- `experience.js` → Experiencia profesional
- `education.js` → Formación

Estos ficheros son importados por los componentes de React para renderizar el contenido dinámicamente.

---

## 🛠️ Puesta en marcha en local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/JoseCarlosPPK/portfolio.git
cd portfolio
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 📦 Build del proyecto

Para generar la versión optimizada para producción:

```bash
npm run build
```

Esto creará la carpeta `dist/` con los archivos finales listos para desplegar.

---

## 🌍 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante `gh-pages`.

### Desplegar el portfolio

```bash
npm run deploy
```

Este comando:

- Ejecuta `npm run build`
- Publica el contenido de `dist/` en la rama `gh-pages`

---

## 🔗 URL del portfolio

👉 https://JoseCarlosPPK.github.io/portfolio

---

## ⚙️ Configuración relevante

Al trabajar con Vite, el archivo `vite.config.js` incluye:

- `base`: especifica la ruta base desde la que se sirve la aplicación. Garantiza que los assets generados durante el proceso de _build_ (scripts, estilos, imágenes, etc.) sean referenciados correctamente desde `index.html`.

---

## 📄 Licencia

Este proyecto está distribuido bajo la licencia **GPL-2.0**.

Esto significa que cualquier usuario puede:

- Usar el proyecto con fines personales o comerciales
- Estudiar y modificar el código fuente
- Redistribuir el proyecto o versiones modificadas

Siempre que:

- Se mantenga la misma licencia **GPL-2.0**
- Se reconozca la autoría original
- Se incluya el código fuente de las versiones distribuidas

Consulta el archivo `LICENSE` para más detalles.

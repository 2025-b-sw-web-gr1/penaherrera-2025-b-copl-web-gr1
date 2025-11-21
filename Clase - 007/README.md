# 🎮 Página Web de Fortnite con Pug

Proyecto de página web sobre el videojuego Fortnite desarrollado con **Express.js** y **Pug** como motor de plantillas alternativo a EJS.

## 📋 Características

- ✅ **Inicio**: Información general del juego con estadísticas
- ✅ **Modos de Juego**: Battle Royale, Zero Build, Creative y Save the World
- ✅ **Personajes y Skins**: Skins icónicas y colaboraciones (Marvel, Naruto, Star Wars, etc.)
- ✅ **Evolución del Mapa**: Historia visual del mapa a través de los capítulos
- ✅ **Eventos en Vivo**: Conciertos épicos y eventos importantes
- ✅ **Diseño Temático**: Colores característicos de Fortnite (azul, morado, neón)
- ✅ **Responsive**: Adaptable a todos los dispositivos

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript
- **Express.js**: Framework web para Node.js
- **Pug**: Motor de plantillas (alternativa a EJS)
- **CSS3**: Estilos con gradientes, animaciones y efectos neón
- **Google Fonts**: Tipografía personalizada

## 📁 Estructura del Proyecto

```
Clase - 007/
├── app.js              # Servidor Express y rutas
├── package.json        # Dependencias del proyecto
├── views/              # Plantillas Pug
│   ├── layout.pug      # Plantilla base
│   └── index.pug       # Página principal
└── public/             # Archivos estáticos
    ├── css/
    │   └── styles.css  # Estilos temáticos de Fortnite
    └── images/         # Imágenes (logos, capturas, skins)
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)

### Pasos de Instalación

1. **Navegar a la carpeta del proyecto:**

```cmd
cd "d:\EPN\2025-Sexto Semestre\Web\penaherrera-2025-b-copl-web-gr1\Clase - 007"
```

2. **Instalar las dependencias:**

```cmd
npm install
```

3. **Iniciar el servidor:**

```cmd
npm start
```

4. **Abrir en el navegador:**

```
http://localhost:3000
```

## 🎨 Diseño Visual

El diseño está inspirado en la estética de Fortnite con:

- **Paleta de colores**: Azul (#0d6ffd), Morado (#7c3aed), Cian (#00d9ff), Rosa (#ff00ff)
- **Efectos visuales**: Sombras neón, gradientes animados, transiciones suaves
- **Tipografía**: Fuentes impactantes similares al estilo del juego
- **Animaciones**: Efectos hover, pulsos y brillos característicos

## 📦 Dependencias

```json
{
  "express": "^4.18.2",
  "pug": "^3.0.2"
}
```

## 🎯 Secciones de la Página

### 1. Hero Section
Presentación impactante con título principal, botones de acción y estadísticas del juego.

### 2. Información General
Descripción del juego y sus características únicas (construcción, skins, mapa dinámico).

### 3. Modos de Juego
- **Battle Royale**: Modo clásico de 100 jugadores
- **Zero Build**: Battle Royale sin construcción
- **Creative**: Modo creativo para construir mundos
- **Save the World**: Modo cooperativo PvE

### 4. Personajes y Skins
Showcase de skins icónicas y colaboraciones con:
- Marvel (Iron Man, Thor, Spider-Man)
- Anime (Naruto, Dragon Ball)
- Star Wars (Darth Vader, Stormtroopers)
- Gaming (Kratos, Master Chief, Lara Croft)
- DC Comics (Batman, Superman)
- Música (Travis Scott, Ariana Grande)

### 5. Evolución del Mapa
Timeline visual mostrando la evolución del mapa desde el Capítulo 1 hasta el Capítulo 5.

### 6. Eventos en Vivo
Eventos históricos como:
- Conciertos de Travis Scott y Ariana Grande
- Evento del Agujero Negro
- Batalla contra Galactus
- The End eventos

### 7. Sistema de Temporadas
Información sobre Battle Pass, duración de temporadas y recompensas.

## 🌐 Características de Pug

Este proyecto utiliza Pug para demostrar:

- **Sintaxis limpia**: Sin etiquetas de cierre
- **Interpolación de variables**: `= variable` y `#{}` 
- **Iteraciones**: `each item in array`
- **Herencia de plantillas**: `extends layout` y `block content`
- **Mixins**: Componentes reutilizables

## 📝 Notas de Desarrollo

- El servidor corre por defecto en el puerto **3000**
- Las imágenes deben colocarse en `public/images/`
- Los estilos están organizados por secciones en `styles.css`
- Pug compila automáticamente a HTML en cada solicitud

## 🎓 Propósito Académico

Este proyecto fue desarrollado con fines educativos para la clase de Desarrollo Web, demostrando:
- Configuración de un servidor Express
- Uso de motores de plantillas alternativos (Pug vs EJS)
- Diseño responsive y moderno
- Organización de proyectos Node.js

## 📄 Licencia

Proyecto educativo. Fortnite y todos sus elementos visuales son propiedad de Epic Games, Inc.

---

**Desarrollado para la Clase 007 - Desarrollo Web**
**EPN - 2025**

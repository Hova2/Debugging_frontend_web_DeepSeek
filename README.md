# 🐛 Manual de Debugging para Principiantes

Bienvenido al manual definitivo para aprender **debugging web desde cero**. Este proyecto está estructurado como una serie de capítulos progresivos, con teoría, ejemplos interactivos y ejercicios prácticos diseñados para desarrolladores que desean dominar las técnicas de depuración en aplicaciones web.

## 🎯 Objetivo

Este manual te enseña cómo identificar, diagnosticar y resolver errores en aplicaciones web de manera efectiva, utilizando las herramientas y técnicas que utilizan los profesionales.

## 📁 Estructura del Proyecto

```
.
├── index.html                          # Página principal del manual
├── about.html                          # Información sobre el proyecto
├── README.md                           # Este archivo
├── css/                               # Estilos del proyecto
│   ├── styles.css                     # Estilos globales
│   └── chapters/                      # Estilos por capítulo
│       ├── chapter2.css
│       └── chapter3.css
│   └── components/                    # Estilos de componentes
│       ├── header.css
│       └── footer.css
├── js/                                # Scripts de JavaScript
│   ├── main.js                        # Lógica principal
│   ├── components/                    # Componentes JavaScript
│   │   ├── header.js
│   │   └── footer.js
│   └── utils/                         # Utilidades y helpers
│       └── helpers.js
└── pages/                             # Páginas de capítulos
    ├── capitulo2-elements.html        # Capítulo 2: Debugging de elementos DOM
    └── capitulo3-console.html         # Capítulo 3: Console debugging
```

## 📚 Capítulos

### Capítulo 1: Introducción al Debugging
Conceptos fundamentales, herramientas necesarias y primeros pasos con la consola del navegador.

### Capítulo 2: Debugging de Elementos DOM
Aprende a inspeccionar, manipular y depurar elementos HTML con las DevTools.

### Capítulo 3: Console Debugging
Domina el objeto `console` y sus métodos para registrar y depurar información en la consola.

## 🚀 Cómo Empezar

### Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VSCode recomendado)
- Conocimientos básicos de HTML, CSS y JavaScript

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/Debugging_frontend_web_DeepSeek.git
   cd Debugging_frontend_web_DeepSeek
   ```

2. **Abrir en el navegador**
   - Opción A: Abre `index.html` directamente en tu navegador
   - Opción B: Usa un servidor local (recomendado):
     ```bash
     python -m http.server 8000
     # O con Node.js:
     npx http-server
     ```
   
3. **Accede a la aplicación**
   - Navega a `http://localhost:8000` en tu navegador

## 💡 Características

- 📖 **Teoría progresiva**: Cada capítulo construye sobre los conocimientos anteriores
- 🎮 **Ejemplos interactivos**: Practica directamente en el navegador
- 🏋️ **Ejercicios prácticos**: Desafíos para consolidar lo aprendido
- 🎨 **Interfaz intuitiva**: Diseño limpio y fácil de navegar
- 🔧 **Código abierto**: Contribuye y mejora el contenido

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y componentes
- **Vanilla JavaScript**: Sin dependencias externas
- **DevTools del navegador**: Para debugging

## 📝 Convenciones

Este proyecto sigue las mejores prácticas:
- **Conventional Commits** para mensajes de commit
- **Código modular** para mantenibilidad
- **Nombres descriptivos** para variables y funciones

## 🤝 Contribuir

¿Quieres mejorar este manual? Las contribuciones son bienvenidas:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mi-mejora`)
3. Commit tus cambios (`git commit -m 'feat: descripción'`)
4. Push a la rama (`git push origin feature/mi-mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👤 Autor

Creado como recurso educativo para desarrolladores web en español.

---

**¿Listo para aprender?** Comienza con [index.html](index.html) 🚀

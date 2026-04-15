# 🚀 VocaIA - Plataforma de Orientación Vocacional con IA

## 📋 Descripción del Proyecto

**VocaIA** es una plataforma web moderna de orientación vocacional diseñada para estudiantes de primaria y secundaria. Utiliza inteligencia artificial para analizar intereses, habilidades y preferencias, recomendando carreras STEM personalizadas, rutas de aprendizaje y actividades prácticas.

### 🎯 Objetivo Principal
Ayudar a estudiantes a descubrir su vocación en campos STEM (Ciencia, Tecnología, Ingeniería y Matemáticas) a través de tests interactivos, asesoramiento personalizado y gamificación.

---

## ✨ Características Principales

### 1️⃣ **Test Interactivo Adaptable**
- 10 preguntas dinámicas adaptadas a la edad
- Formato visual con iconos e imágenes
- Indicador de progreso en tiempo real
- Retroalimentación inmediata

### 2️⃣ **Chatbot IA Educativo**
- Responde preguntas sobre carreras STEM
- Disponible 24/7
- Base de conocimiento extensible
- Recomendaciones personalizadas

### 3️⃣ **Sistema de Gamificación**
- 🏆 Logros desbloqueables (Primer Paso, Explorador, Campeón, etc.)
- 📊 Panel de progreso con niveles
- ⭐ Puntos y recompensas
- 🎖️ Medallas por alcanzar hitos

### 4️⃣ **Panel de Control Personal**
- Visualización de progreso
- Historial de tests
- Recomendaciones personalizadas
- Descargas de reportes

### 5️⃣ **Perfiles Vocacionales**
- 🤖 **Innovador Tecnológico** - Tecnología e IA
- 🔬 **Investigador Científico** - Ciencias puras
- 🏗️ **Constructor de Soluciones** - Ingeniería
- 📊 **Analista de Datos** - Datos y analítica

### 6️⃣ **Componentes Educativos**
- Información sobre carreras STEM
- Rutas de aprendizaje sugeridas
- Habilidades clave para cada carrera
- Oportunidades de prácticas

---

## 📁 Estructura del Proyecto

```
prototipo1/
├── index.html              # Página principal
├── test.html              # Test interactivo (10 preguntas)
├── chatbot.html           # Chatbot IA de orientación
├── dashboard.html         # Panel de progreso personal
├── css/
│   └── estilos.css        # Estilos responsivos
├── js/
│   └── main.js            # Funcionalidad principal
└── README.md              # Este archivo
```

---

## 🚀 Cómo Usar

### Instalación
1. Descargar o clonar el proyecto
2. No requiere instalación de dependencias (vanilla HTML/CSS/JS)
3. Abrir `index.html` en un navegador web moderno

### Uso de la Plataforma

#### 📖 Página de Inicio (`index.html`)
- Explicación de la plataforma
- Botón "Comenzar Test"
- Información sobre características
- Testimonios de estudiantes
- Links a recursos

#### ❓ Test Interactivo (`test.html`)
1. Completar 10 preguntas adaptadas
2. Ver recomendaciones personalizadas
3. Descargar resultados en PDF/TXT

#### 💬 Chatbot IA (`chatbot.html`)
1. Escribir preguntas sobre carreras
2. Hacer clic en preguntas sugeridas
3. Recibir respuestas personalizadas

#### 📊 Panel de Control (`dashboard.html`)
- Ver progreso y nivel actual
- Revisar logros desbloqueados
- Ver recomendaciones personalizadas
- Descargar reportes

---

## 🎓 Componentes del Sistema

### Componente Digital
✅ **Completado:**
- Interfaz web responsive
- Test interactivo con IA
- Chatbot educativo
- Panel de progreso
- Sistema de gamificación
- Avatares y elementos visuales

### Componente Operativo (Documentación para Implementación)
El sistema está diseñado para:
- **En el Colegio**: Uso en horas de tutoría o tecnología
- **Docentes**: Acompañan y revisan reportes
- **Padres**: Acceso a reportes de progreso
- **Seguimiento**: Evaluación trimestral del avance

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo, gradientes, animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **Font Awesome**: Iconografía
- **LocalStorage**: Persistencia de datos

---

## 📱 Características de Diseño

### Responsivo
✅ Funciona en:
- Desktops
- Tablets
- Dispositivos móviles

### Accesible
✅ Includes:
- Colores de alto contraste
- Navegación intuitiva
- Iconos descriptivos
- Textos claros

### Moderno
✅ Features:
- Gradientes atractivos
- Animaciones suaves
- Interfaz limpia
- Hover effects

---

## 🧠 Sistema de IA

### Motor de Análisis
El sistema de IA utiliza:
- **Análisis de respuestas**: Clasifica según patrones
- **Categorización**: Mapea a 4 perfiles vocacionales
- **Recomendación**: Sugiere carreras y rutas de aprendizaje

### Perfiles Identificados
```
Respuestas A → Tecnología (Innovador Tecnológico)
Respuestas B → Ciencias (Investigador Científico)
Respuestas C → Ingeniería (Constructor de Soluciones)
Respuestas D → Datos (Analista de Datos)
```

### Base de Conocimiento del Chatbot
- Preguntas sobre carreras STEM
- Información de mercado laboral
- Cursos y recursos educativos
- Habilidades requeridas

---

## 🎮 Sistema de Gamificación

### Logros Disponibles
| Logro | Requisito | Premio |
|-------|-----------|--------|
| 🎯 Primer Paso | Completar primer test | +10 pts |
| 🚀 Explorador | Explorar 3 carreras | +20 pts |
| 💡 Curiosidad | Hacer 5 preguntas al bot | +15 pts |
| ⭐ Persistencia | Completar 2 tests | +25 pts |
| 🏆 Campeón | Completar 5 tests | +50 pts |
| 📈 Centésimo | Responder 100 preguntas | +100 pts |

### Niveles
- Nivel 1: Iniciante (0-100 pts)
- Nivel 2: Explorador (100-250 pts)
- Nivel 3: Investigador (250-500 pts)
- Nivel 4: Maestro (500+ pts)

---

## 📊 Reportes y Datos

### Información Guardada Localmente
```javascript
{
  nombre: "",
  nivel: 0,
  progreso: 0,
  tests: [],
  logros: [],
  respuestas: [],
  conversaciones: []
}
```

### Reportes Generables
- ✅ Resultados del test
- ✅ Progreso general
- ✅ Recomendaciones personalizadas
- ✅ Historia de intentos

---

## 🔌 Extensiones Posibles

### Fase 2
- [ ] Autenticación de usuarios
- [ ] Backend con API real
- [ ] IA más avanzada (ML.js, TensorFlow.js)
- [ ] Conexión con universidades
- [ ] Sistema de cursos integrado
- [ ] Foro comunitario

### Fase 3
- [ ] Aplicación móvil nativa
- [ ] Integración con LMS (Moodle, Blackboard)
- [ ] Video chatbot interactivo
- [ ] Realidad aumentada para exploración de carreras
- [ ] Sistema de mentoría

---

## 📝 Instrucciones de Implementación en Colegios

### Paso 1: Instalación
1. Copiar archivos en servidor web del colegio
2. Configurar acceso desde aulas

### Paso 2: Capacitación de Docentes
- Tutorial de uso de la plataforma
- Interpretación de reportes
- Acompañamiento a estudiantes

### Paso 3: Uso en Clase
- Horas de tutoría: 1 sesión (15 min para test)
- Horas de tecnología: 2 sesiones (test + exploración)
- Seguimiento: Revisión mensual de progreso

### Paso 4: Reportes a Padres
- Envío de reportes trimestrales
- Conferencias basadas en perfiles
- Recomendaciones de acciones

---

## 🔐 Privacidad y Seguridad

- ✅ Datos almacenados localmente en navegador
- ✅ Sin envío de información a servidores (versión actual)
- ✅ Compatible con políticas GDPR (versión mejorada)
- ✅ Apto para menores de edad

---

## 📞 Contacto y Soporte

**Correo**: info@vocaia.com  
**Teléfono**: +51 XXX XXX XXX  
**Sitio Web**: vocaia.dev (próximamente)

---

## 📄 Licencia

Este proyecto es de código abierto. Libre para uso educativo.

---

## 🙏 Créditos

Desarrollado con ❤️ para estudiantes que buscan encontrar su vocación en STEM.

**Versión**: 1.0  
**Última Actualización**: Abril 2026

---

## 📊 Estadísticas del Proyecto

- 📄 Páginas: 4 principales
- 🎨 Componentes UI: 25+
- 🎯 Preguntas del Test: 10
- 🏆 Logros: 6
- 🤖 Perfiles IA: 4
- ⏱️ Tiempo promedio: 5-10 minutos

---

**¡Descubre tu vocación con VocaIA! 🚀**

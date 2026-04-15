// ==========================================
// FUNCIONES DE NAVEGACIÓN Y MODALES
// ==========================================

function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function iniciarTest() {
    const modal = document.getElementById('testModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function cerrarModal() {
    const modal = document.getElementById('testModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    const modal = document.getElementById('testModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ==========================================
// ANIMACIONES AL SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar tarjetas de características y perfiles
document.querySelectorAll('.feature-card, .perfil-card, .step, .testimonio-card').forEach(el => {
    observer.observe(el);
});

// ==========================================
// ANIMACIÓN DE FADE IN UP
// ==========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// CONTADOR DE ESTUDIANTES (Simulado)
// ==========================================

function animateCounter(target, duration = 2000) {
    const element = document.querySelector(target);
    if (!element) return;

    const finalValue = parseInt(element.textContent);
    const startValue = 0;
    const increment = finalValue / (duration / 16);
    let currentValue = startValue;

    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            element.textContent = finalValue.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(currentValue).toLocaleString();
        }
    }, 16);
}

// ==========================================
// GESTIÓN DE USUARIO Y LOCALSTORAGE
// ==========================================

const UserManager = {
    // Guardar datos del estudiante
    guardarEstudiante(datos) {
        localStorage.setItem('estudianteVocaIA', JSON.stringify(datos));
    },

    // Obtener datos del estudiante
    obtenerEstudiante() {
        const datos = localStorage.getItem('estudianteVocaIA');
        return datos ? JSON.parse(datos) : null;
    },

    // Guardar resultados del test
    guardarResultadosTest(resultados) {
        const estudiante = this.obtenerEstudiante() || {};
        estudiante.resultados = resultados;
        estudiante.fechaTest = new Date().toISOString();
        this.guardarEstudiante(estudiante);
    },

    // Obtener historial de tests
    obtenerHistorialTests() {
        const estudiante = this.obtenerEstudiante();
        return estudiante?.historialTests || [];
    },

    // Agregar logro desbloqueado
    desbloquearLogro(logro) {
        const estudiante = this.obtenerEstudiante() || {};
        if (!estudiante.logros) {
            estudiante.logros = [];
        }
        if (!estudiante.logros.includes(logro)) {
            estudiante.logros.push(logro);
            this.guardarEstudiante(estudiante);
            return true;
        }
        return false;
    },

    // Limpiar datos
    limpiarDatos() {
        localStorage.removeItem('estudianteVocaIA');
    }
};

// ==========================================
// SISTEMA DE GAMIFICACIÓN
// ==========================================

const GamificationSystem = {
    logros: {
        'primer-test': { nombre: 'Primer Paso', descripcion: 'Completar tu primer test' },
        'explorador': { nombre: 'Explorador', descripcion: 'Explorar 3 carreras diferentes' },
        'maestro-ia': { nombre: 'Maestro IA', descripcion: 'Hacer 5 preguntas al chatbot' },
        '100-preguntas': { nombre: 'Centésimo', descripcion: 'Responder 100 preguntas' },
        'multidisciplinario': { nombre: 'Multidisciplinario', descripcion: 'Obtener recomendaciones en 3+ campos' }
    },

    verificarYDesbloquearLogros(datos) {
        const logrosDesbloqueados = [];

        if (datos.primeraVez) {
            if (UserManager.desbloquearLogro('primer-test')) {
                logrosDesbloqueados.push(this.logros['primer-test']);
            }
        }

        return logrosDesbloqueados;
    },

    obtenerNivel(totalTests) {
        return Math.floor(totalTests / 2) + 1;
    },

    calcularProgreso(datos) {
        const maxPoints = 100;
        let points = 0;

        if (datos.testCompletado) points += 25;
        if (datos.chatbotInteracciones >= 5) points += 25;
        if (datos.cursosExplo) points += 25;
        if (datos.logrosDesbloqueados) points += datos.logrosDesbloqueados.length * 5;

        return Math.min(points, maxPoints);
    }
};

// ==========================================
// API SIMULADA DE IA
// ==========================================

const AIEngine = {
    // Simular análisis de respuestas del test
    analizarRespuestas(respuestas) {
        const perfiles = {
            tecnologia: 0,
            ciencias: 0,
            ingenieria: 0,
            datos: 0
        };

        // Lógica simple de clasificación (puede expandirse con IA real)
        respuestas.forEach((respuesta, index) => {
            if (respuesta === 'A') perfiles.tecnologia += 2;
            else if (respuesta === 'B') perfiles.ciencias += 2;
            else if (respuesta === 'C') perfiles.ingenieria += 2;
            else if (respuesta === 'D') perfiles.datos += 2;
        });

        // Encontrar perfil dominante
        const perfilDominante = Object.keys(perfiles).reduce((a, b) =>
            perfiles[a] > perfiles[b] ? a : b
        );

        return {
            perfilPrincipal: perfilDominante,
            puntajes: perfiles,
            recomendaciones: this.generarRecomendaciones(perfilDominante),
            carreras: this.recomendarCarreras(perfilDominante)
        };
    },

    // Generar respuestas del chatbot
    responderPregunta(pregunta) {
        const respuestas = {
            'tecnologia': [
                'Podrías explorar Ingeniería de Software, Desarrollo Web, o Ciberseguridad.',
                'Las habilidades en programación son muy demandadas. ¿Quieres conocer cursos?'
            ],
            'ciencias': [
                'Carreras como Biología, Química o Física son perfectas para ti.',
                'El trabajo de investigación científica es muy gratificante.'
            ],
            'ingenieria': [
                'Ingeniería Civil, Mecánica o Industrial son excelentes opciones.',
                'Los proyectos de construcción e innovación te encantarán.'
            ],
            'datos': [
                'Estadística, Data Science y Big Data son campos en crecimiento.',
                'Los analistas de datos son muy solicitados en el mercado actual.'
            ]
        };

        const clave = Object.keys(respuestas)[Math.floor(Math.random() * 4)];
        const respuestasList = respuestas[clave];
        return respuestasList[Math.floor(Math.random() * respuestasList.length)];
    },

    // Generar recomendaciones
    generarRecomendaciones(perfil) {
        const recomendaciones = {
            tecnologia: [
                'Aprende Python y JavaScript',
                'Estudia lógica de programación',
                'Practica con proyectos reales',
                'Únete a comunidades de desarrollo'
            ],
            ciencias: [
                'Profundiza en laboratorios',
                'Lee artículos científicos',
                'Participa en ferias de ciencias',
                'Conecta con investigadores'
            ],
            ingenieria: [
                'Aprende diseño asistido por computadora (CAD)',
                'Participa en competiciones de ingeniería',
                'Trabaja en proyectos prácticos',
                'Estudia normativas y estándares'
            ],
            datos: [
                'Domina Excel y SQL',
                'Aprende análisis estadístico',
                'Trabaja con bases de datos',
                'Realiza visualización de datos'
            ]
        };

        return recomendaciones[perfil] || [];
    },

    // Recomendar carreras específicas
    recomendarCarreras(perfil) {
        const carreras = {
            tecnologia: [
                'Ingeniería de Software',
                'Desarrollo Web y Aplicaciones',
                'Ciberseguridad',
                'Robótica'
            ],
            ciencias: [
                'Biología Marina',
                'Química Farmacéutica',
                'Física Aplicada',
                'Biotecnología'
            ],
            ingenieria: [
                'Ingeniería Civil',
                'Ingeniería Mecánica',
                'Ingeniería Industrial',
                'Ingeniería Eléctrica'
            ],
            datos: [
                'Data Science',
                'Análisis de Datos',
                'Big Data',
                'Machine Learning'
            ]
        };

        return carreras[perfil] || [];
    }
};

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('VocaIA iniciado correctamente');
    
    // Inicializar localStorage si no existe
    if (!UserManager.obtenerEstudiante()) {
        UserManager.guardarEstudiante({
            primeraVez: true,
            fechaRegistro: new Date().toISOString()
        });
    }
});

// ==========================================
// EXPORTAR PARA OTROS MÓDULOS
// ==========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        UserManager,
        GamificationSystem,
        AIEngine
    };
}

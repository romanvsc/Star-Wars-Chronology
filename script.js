// Configuración del audio de fondo
document.addEventListener('DOMContentLoaded', function() {
    const backgroundAudio = document.querySelector('.background-audio');
    if (backgroundAudio) {
        backgroundAudio.volume = 0.15;
        
        // Crear botón de mute
        createAudioControlButton();
        
        // Configurar continuidad del audio
        setupAudioContinuity(backgroundAudio);
        
        // Restaurar estado de mute
        const isMuted = localStorage.getItem('starwars-audio-muted') === 'true';
        if (isMuted) {
            backgroundAudio.muted = true;
            updateMuteButtonState(true);
        }
    }
});

// Crear botón de control de audio
function createAudioControlButton() {
    const audioButton = document.createElement('button');
    audioButton.className = 'audio-control-btn';
    audioButton.innerHTML = '🔊';
    audioButton.title = 'Silenciar/Activar audio';
    
    audioButton.addEventListener('click', toggleAudioMute);
    document.body.appendChild(audioButton);
}

// Alternar silencio del audio
function toggleAudioMute() {
    const backgroundAudio = document.querySelector('.background-audio');
    const audioButton = document.querySelector('.audio-control-btn');
    
    if (backgroundAudio) {
        const newMutedState = !backgroundAudio.muted;
        backgroundAudio.muted = newMutedState;
        
        // Guardar estado en localStorage
        localStorage.setItem('starwars-audio-muted', newMutedState.toString());
        
        // Actualizar apariencia del botón
        updateMuteButtonState(newMutedState);
    }
}

// Actualizar estado visual del botón de mute
function updateMuteButtonState(isMuted) {
    const audioButton = document.querySelector('.audio-control-btn');
    if (audioButton) {
        if (isMuted) {
            audioButton.innerHTML = '🔇';
            audioButton.classList.add('muted');
            audioButton.title = 'Activar audio';
        } else {
            audioButton.innerHTML = '🔊';
            audioButton.classList.remove('muted');
            audioButton.title = 'Silenciar audio';
        }
    }
}

// Configurar continuidad del audio entre páginas
function setupAudioContinuity(audioElement) {
    // Restaurar tiempo de reproducción guardado
    const savedTime = localStorage.getItem('starwars-audio-time');
    if (savedTime && !isNaN(parseFloat(savedTime))) {
        audioElement.addEventListener('loadeddata', function() {
            audioElement.currentTime = parseFloat(savedTime);
        });
    }
    
    // Guardar tiempo de reproducción cada segundo
    setInterval(() => {
        if (audioElement && !audioElement.paused) {
            localStorage.setItem('starwars-audio-time', audioElement.currentTime.toString());
        }
    }, 1000);
    
    // Guardar tiempo antes de cambiar de página
    window.addEventListener('beforeunload', () => {
        if (audioElement && !audioElement.paused) {
            localStorage.setItem('starwars-audio-time', audioElement.currentTime.toString());
        }
    });
}

// Estructura de datos reorganizada por categorías ABY, BY, DBY
const starWarsTimeline = {
    aby: {
        title: "ABY (Antes de la Batalla de Yavin)",
        items: [
            "Historias de los Jedi (Temporada 1 Episodio 2, 3 y 1)",
            "Episodio I: La Amenaza Fantasma",
            "Historias de los Jedi (Temporada 1 Episodio 4) (pasa al mismo tiempo que La Amenaza Fantasma)",
            "Episodio II: El Ataque de los Clones",
            // Clone Wars Episodes
            "2x16: El Gato y el Ratón",
            "1x16: El Enemigo Oculto",
            "1x00: La Película de The Clone Wars",
            "3x01: Cadetes Clon",
            "3x03: Líneas de Suministro",
            "1x01: Emboscada",
            "1x02: Malevolencia Ascendente",
            "1x03: Sombra de la Malevolencia",
            "1x04: Destruir la Malevolencia",
            "1x05: Reclutas",
            "1x06: Caída de un Droide",
            "1x07: Duelo de los Droides",
            "1x08: Jedi Bombad",
            "1x09: Capa de Oscuridad",
            "1x10: Guarida de Grievous",
            "1x11: Dooku Capturado",
            "1x12: El General Gungan",
            "1x13: Choque Jedi",
            "1x14: Defensores de la Paz",
            "1x15: Intrusión",
            "1x17: Virus Sombra Azul",
            "1x18: Misterio de Mil Lunas",
            "1x19: Tormenta sobre Ryloth",
            "1x20: Inocentes de Ryloth",
            "1x21: Libertad en Ryloth",
            "2x01: Robo del Holocrón",
            "2x02: Carga de la Perdición",
            "2x03: Hijos de la Fuerza",
            "2x17: Cazarrecompensas",
            "2x18: La Bestia Zillo",
            "2x19: La Bestia Zillo Contraataca",
            "2x04: Espía del Senado",
            "2x05: Aterrizaje en Punto Lluvia",
            "2x06: Fábrica de Armas",
            "2x07: Legado de Terror",
            "2x08: Invasores Cerebrales",
            "2x09: Intriga de Grievous",
            "2x10: El Desertor",
            "2x11: Sable de Luz Perdido",
            "2x12: La Conspiración de Mandalore",
            "2x13: Viaje de Tentación",
            "2x14: Duquesa de Mandalore",
            "2x20: Trampa Mortal",
            "2x21: R2 Regresa a Casa",
            "2x22: Persecución Letal",
            "3x05: Corrupción",
            "3x06: La Academia",
            "3x07: Asesino",
            "3x02: Soldados ARC",
            "3x04: Esfera de Influencia",
            "3x08: Planes Malvados",
            "1x22: Crisis de Rehenes",
            "3x09: Caza de Ziro",
            "3x10: Héroes en Ambos Lados",
            "3x11: Búsqueda de la Paz",
            "2x15: Asesinatos en el Senado",
            "3x12: Hermanas de la Noche",
            "3x13: Monstruo",
            "3x14: Brujas de la Niebla",
            "3x15: Señores Supremos",
            "3x16: Altar de Mortis",
            "3x17: Fantasmas de Mortis",
            "3x18: La Ciudadela",
            "3x19: Contraataque",
            "3x20: Rescate de la Ciudadela",
            "3x21: Padawan Perdido",
            "3x22: Caza Wookiee",
            "4x01: Guerra del Agua",
            "4x02: Ataque Gungan",
            "4x03: Prisioneros",
            "4x04: Guerrero Sombra",
            "4x05: Misión de Misericordia",
            "4x06: Droides Nómadas",
            "4x07: Oscuridad en Umbara",
            "4x08: El General",
            "4x09: Plan de Disidencia",
            "4x10: Matanza de Krell",
            "4x11: Secuestrados",
            "4x12: Esclavos de la República",
            "4x13: Escape de Kadavo",
            "4x14: Un Amigo en Necesidad",
            "4x15: Engaño",
            "4x16: Amigos y Enemigos",
            "4x17: La Caja",
            "4x18: Crisis en Naboo",
            "4x19: Masacre",
            "4x20: Recompensa",
            "4x21: Hermanos",
            "4x22: Venganza",
            "5x02: Una Guerra en Dos Frentes",
            "5x03: Corredores de Frente",
            "5x04: La Guerra Suave",
            "5x05: Puntos de Inflexión",
            "5x06: La Reunión",
            "5x07: Una Prueba de Fuerza",
            "5x08: En Camino al Rescate",
            "5x09: Un Vínculo Necesario",
            "5x10: Armas Secretas",
            "5x11: Un Día Soleado en el Vacío",
            "5x12: Desaparecidos en Acción",
            "5x13: Punto Sin Retorno",
            "5x01: Avivamiento",
            "5x14: Eminencia",
            "5x15: Sombras de Razón",
            "5x16: La Anarquía",
            "5x17: Sabotaje",
            "5x18: El Jedi que Sabía Demasiado",
            "5x19: Para Atrapar a un Jedi",
            "5x20: El Jedi Equivocado",
            "6x01: Lo Desconocido",
            "6x02: Conspiración",
            "6x03: Fugitivo",
            "6x04: Órdenes",
            "6x05: Un Viejo Amigo",
            "6x06: El Ascenso de Clovis",
            "6x07: Crisis en el Corazón",
            "6x08: Los Desaparecidos",
            "6x09: Los Desaparecidos Pt. II",
            "6x10: El Perdido",
            "6x11: Voces",
            "6x12: Destino",
            "6x13: Sacrificio",
            "7x05: Desaparecida con un Rastro",
            "7x06: Trato sin Trato",
            "7x07: Deuda Peligrosa",
            "7x08: Juntas de Nuevo",
            "7x01: El Lote Malo",
            "7x02: Un Eco Distante",
            "7x03: En las Alas de Keeradaks",
            "7x04: Asuntos Pendientes",
            "7x09: Viejos Amigos No Olvidados",
            "7x10: El Aprendiz Fantasma",
            "7x11: Destrozado",
            "7x12: Victoria y Muerte",
            "Episodio III: La Venganza de los Sith",
            "Historias del Imperio (Temporada 1 episodio 4 y 5)",
            "Historias de los Jedi (Temporada 1 Episodio 5 y 6)",
            "The Bad Batch",
            "Jedi Fallen Order (Videojuego)",
            "Solo: Una Historia de Star Wars",
            "Obi-Wan Kenobi",
            "Jedi Survivor (Videojuego)",
            "Historias del Imperio (Temporada 1 Episodio 2 y 6)",
            "Andor (Temporada 1)",
            "Star Wars Rebels",
            "Vader Immortal (Videojuego)",
            "Rogue One: Una Historia de Star Wars"
        ]
    },
    by: {
        title: "BY (Batalla de Yavin - Año 0)",
        items: [
            "Episodio IV: Una Nueva Esperanza"
        ]
    },
    dby: {
        title: "DBY (Después de la Batalla de Yavin)",
        items: [
            "Episodio V: El Imperio Contraataca",
            "Próximo Star Wars Outlaws (Videojuego)",
            "Episodio VI: El Retorno del Jedi",
            "Battlefront 2 (Videojuego)",
            "Squadrons (Videojuego)",
            "The Mandalorian (Temporada 1 y 2)",
            "El Libro de Boba Fett",
            "The Mandalorian (Temporada 3)",
            "Ahsoka",
            "Próximamente Skeleton Crew",
            "Próximamente: The Mandalorian y Grogu",
            "Resistencia (Temporada 1 excepto los últimos 2 episodios)",
            "Battlefront 2, Resurrection DLC (videojuego)",
            "Episodio VII: El Despertar de la Fuerza",
            "Resistencia (Últimos 2 episodios de la Temporada 1)",
            "Episodio VIII: Los Últimos Jedi",
            "Resistencia (Temporada 2)",
            "Episodio IX: El Ascenso de Skywalker",
            "Próximamente: Película 'Nueva Orden Jedi'"
        ]
    }
};

// Variables globales para el progreso
let totalItemsCount = 0;
let completedItemsCount = 0;
let categoryProgress = {
    aby: { completed: 0, total: 0 },
    by: { completed: 0, total: 0 },
    dby: { completed: 0, total: 0 }
};

/**
 * Muestra el indicador de guardado automático
 */
function showSaveIndicator() {
    const saveIndicator = document.getElementById('saveIndicator');
    saveIndicator.classList.add('show');
    
    // Ocultar después de 2 segundos
    setTimeout(() => {
        saveIndicator.classList.remove('show');
    }, 2000);
}

/**
 * Guarda el progreso en localStorage
 */
function saveProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progress = {};
    
    checkboxes.forEach((checkbox, index) => {
        progress[checkbox.id] = checkbox.checked;
    });
    
    localStorage.setItem('starWarsProgress', JSON.stringify(progress));
    showSaveIndicator();
}

/**
 * Carga el progreso desde localStorage
 */
function loadProgress() {
    const saved = localStorage.getItem('starWarsProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        
        Object.keys(progress).forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = progress[id];
                updateItemVisualState(checkbox);
            }
        });
        
        updateAllProgress();
    }
}

/**
 * Actualiza el estado visual de un elemento (tachado)
 */
function updateItemVisualState(checkbox) {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add('line-through-text');
    } else {
        label.classList.remove('line-through-text');
    }
}

/**
 * Actualiza el progreso total y de categorías
 */
function updateAllProgress() {
    // Resetear contadores
    completedItemsCount = 0;
    Object.keys(categoryProgress).forEach(cat => {
        categoryProgress[cat].completed = 0;
    });
    
    // Contar elementos completados
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completedItemsCount++;
            
            // Determinar categoría del checkbox
            const category = checkbox.id.split('-')[0];
            if (categoryProgress[category]) {
                categoryProgress[category].completed++;
            }
        }
    });
    

    
    // Actualizar progreso total (solo si los elementos existen)
    const totalProgress = totalItemsCount > 0 ? Math.round((completedItemsCount / totalItemsCount) * 100) : 0;
    
    const totalProgressElement = document.getElementById('totalProgress');
    if (totalProgressElement) {
        totalProgressElement.textContent = totalProgress;
    }
    
    const progressBarElement = document.getElementById('progressBar');
    if (progressBarElement) {
        progressBarElement.style.width = totalProgress + '%';
    }
    
    const completedItemsElement = document.getElementById('completedItems');
    if (completedItemsElement) {
        completedItemsElement.textContent = completedItemsCount;
    }
    
    const totalItemsElement = document.getElementById('totalItems');
    if (totalItemsElement) {
        totalItemsElement.textContent = totalItemsCount;
    }
    
    // Actualizar progreso por categoría
    Object.keys(categoryProgress).forEach(category => {
        const cat = categoryProgress[category];
        const progress = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
        
        // Actualizar elementos de progreso en las secciones (si existen)
        const progressElement = document.getElementById(`${category}-progress`);
        if (progressElement) {
            progressElement.textContent = progress;
        }
        
        // Actualizar elementos de progreso en la vista previa
        const previewProgressElement = document.getElementById(`${category}-preview-progress`);
        if (previewProgressElement) {
            previewProgressElement.textContent = progress;
        }
    });
}

/**
 * Genera una lista de elementos con checkboxes
 */
function createChecklistItems(items, categoryPrefix) {
    if (!items || !Array.isArray(items) || items.length === 0) {
        return '';
    }
    
    return items.map((item, index) => {
        const checkboxId = `${categoryPrefix}-${index}`;
        
        return `
            <div class="checklist-item">
                <input type="checkbox" id="${checkboxId}" onchange="handleCheckboxChange(this)">
                <label for="${checkboxId}">${item}</label>
            </div>
        `;
    }).join('');
}

/**
 * Inicializa la página principal (solo vista previa, no listas completas)
 */
function initTimeline() {
    // Solo configurar totales para la página principal (NO generar listas)
    Object.keys(starWarsTimeline).forEach(categoryKey => {
        const category = starWarsTimeline[categoryKey];
        
        // Actualizar totales de categoría
        categoryProgress[categoryKey].total = category.items.length;
        totalItemsCount += category.items.length;
    });
    
    // Configurar botón de reset
    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', resetProgress);
    }
    
    // Cargar progreso guardado
    loadProgress();
    
    // Actualizar progreso inicial
    updateAllProgress();
}

/**
 * Inicializa una sección individual
 */
function initSingleSection(sectionKey) {
    const category = starWarsTimeline[sectionKey];
    if (!category) {
        return;
    }
    
    const listContainer = document.getElementById(`${sectionKey}-list`);
    
    if (listContainer) {
        listContainer.innerHTML = createChecklistItems(category.items, sectionKey);
        
        // Actualizar totales de categoría
        categoryProgress[sectionKey].total = category.items.length;
        totalItemsCount = category.items.length;
        
        // Configurar progreso solo para esta sección
        Object.keys(categoryProgress).forEach(cat => {
            if (cat !== sectionKey) {
                categoryProgress[cat].total = 0;
            }
        });
    }
    
    // Cargar progreso guardado
    loadProgress();
    
    // Actualizar progreso específico de la sección
    updateSingleSectionProgress(sectionKey);
}

/**
 * Actualiza el progreso de una sección individual
 */
function updateSingleSectionProgress(sectionKey) {
    const checkboxes = document.querySelectorAll(`input[id^="${sectionKey}-"]`);
    let completed = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completed++;
        }
    });
    
    const total = starWarsTimeline[sectionKey].items.length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Actualizar elementos de progreso específicos de la sección
    const progressElement = document.getElementById(`${sectionKey}-progress`);
    if (progressElement) {
        progressElement.textContent = progress;
    }
    
    const completedElement = document.getElementById(`${sectionKey}-completed`);
    if (completedElement) {
        completedElement.textContent = completed;
    }
    
    const totalElement = document.getElementById(`${sectionKey}-total`);
    if (totalElement) {
        totalElement.textContent = total;
    }
    
    const percentageElement = document.getElementById(`${sectionKey}-percentage`);
    if (percentageElement) {
        percentageElement.textContent = progress;
    }
}

/**
 * Maneja el cambio en los checkboxes (versión mejorada para páginas individuales)
 */
function handleCheckboxChange(checkbox) {
    updateItemVisualState(checkbox);
    
    // Determinar si estamos en una página individual o en la principal
    const currentSection = checkbox.id.split('-')[0];
    const isMainPage = document.getElementById('progress-section') !== null;
    
    if (isMainPage) {
        updateAllProgress();
    } else {
        updateSingleSectionProgress(currentSection);
    }
    
    saveProgress();
}

/**
 * Reinicia todo el progreso
 */
function resetProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('starWarsProgress');
        
        // Desmarcar todos los checkboxes y quitar el tachado
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            updateItemVisualState(checkbox);
        });
        
        updateAllProgress();
        showSaveIndicator();
    }
}

/**
 * Navega a una sección específica
 */
function navigateToSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Actualizar botones de navegación
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`[data-category="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Hacer scroll suave a la sección
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Inicializar cuando se cargue la página
document.addEventListener('DOMContentLoaded', initTimeline); 
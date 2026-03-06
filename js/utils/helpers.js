// js/utils/helpers.js - Funciones auxiliares (ampliado)

const DebugHelpers = {
    // ... funciones anteriores ...
    
    // Nueva función para ejercicios del capítulo 2
    highlightElement: function(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const originalOutline = element.style.outline;
            element.style.outline = '3px solid #64ffda';
            element.style.outlineOffset = '2px';
            setTimeout(() => {
                element.style.outline = originalOutline;
            }, 2000);
        }
    },
    
    // Mostrar ayuda contextual según el elemento seleccionado
    showHint: function(message) {
        const hintBox = document.createElement('div');
        hintBox.style.position = 'fixed';
        hintBox.style.bottom = '20px';
        hintBox.style.right = '20px';
        hintBox.style.background = '#0a1929';
        hintBox.style.color = '#64ffda';
        hintBox.style.padding = '1rem';
        hintBox.style.borderRadius = '8px';
        hintBox.style.zIndex = '9999';
        hintBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        hintBox.style.fontFamily = 'Inter, sans-serif';
        hintBox.style.fontSize = '0.9rem';
        hintBox.style.maxWidth = '300px';
        hintBox.innerHTML = message;
        
        document.body.appendChild(hintBox);
        
        setTimeout(() => {
            hintBox.remove();
        }, 5000);
    },
    
    // Verificar si el usuario ha completado un ejercicio (opcional)
    checkExercise: function(exerciseId, condition) {
        const completed = JSON.parse(localStorage.getItem('exercises') || '{}');
        if (condition) {
            completed[exerciseId] = true;
            localStorage.setItem('exercises', JSON.stringify(completed));
            this.showHint('✅ ¡Ejercicio completado!');
        }
        return completed[exerciseId] || false;
    }
};

// Exponer globalmente
window.DebugHelpers = DebugHelpers;
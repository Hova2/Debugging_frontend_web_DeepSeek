// js/utils/helpers.js - Funciones auxiliares (ampliado)

const DebugHelpers = {
    // ... funciones anteriores ...
    
    // Formatear código para mostrarlo bonito
    formatCode: function(code) {
        return code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },

    // Detectar tipo de error (para ejercicios)
    detectErrorType: function(errorMessage) {
        if (errorMessage.includes('SyntaxError') || 
            errorMessage.includes('Unexpected token')) {
            return 'syntax';
        }
        if (errorMessage.includes('TypeError')) {
            return 'runtime';
        }
        if (errorMessage.includes('ReferenceError')) {
            return 'reference';
        }
        return 'logic';
    },

    // Guardar progreso del capítulo
    saveProgress: function(chapter, page) {
        const progress = JSON.parse(localStorage.getItem('debugProgress') || '{}');
        progress[chapter] = page;
        localStorage.setItem('debugProgress', JSON.stringify(progress));
    },

    // Obtener progreso
    getProgress: function() {
        return JSON.parse(localStorage.getItem('debugProgress') || '{}');
    },
    
    // Función para ejercicios de consola: crear un array de prueba
    crearEstudiantes: function() {
        return [
            { nombre: "Ana", nota: 85 },
            { nombre: "Luis", nota: 92 },
            { nombre: "Carlos", nota: 78 },
            { nombre: "Marta", nota: 95 }
        ];
    },
    
    // Función con bug para ejercitar
    calcularPromedioConBug: function(estudiantes) {
        let suma = 0;
        for (let i = 0; i < estudiantes.lenght; i++) { // Bug: lenght en lugar de length
            suma += estudiantes[i].nota;
        }
        return suma / estudiantes.length;
    },
    
    // Versión correcta
    calcularPromedio: function(estudiantes) {
        if (!estudiantes || estudiantes.length === 0) return 0;
        let suma = estudiantes.reduce((acc, est) => acc + est.nota, 0);
        return suma / estudiantes.length;
    }
};

// Exponer globalmente
window.DebugHelpers = DebugHelpers;
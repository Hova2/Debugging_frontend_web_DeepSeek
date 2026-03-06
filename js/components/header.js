// js/components/header.js - Comportamiento del header

class HeaderComponent {
    constructor() {
        this.header = document.getElementById('main-header');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        // Header se oculta al hacer scroll down, aparece al scroll up
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            if (currentScroll > this.lastScroll && currentScroll > 100) {
                this.header.style.transform = 'translateY(-100%)';
            } else {
                this.header.style.transform = 'translateY(0)';
            }
            
            this.lastScroll = currentScroll;
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HeaderComponent();
});
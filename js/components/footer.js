// js/components/footer.js - Comportamiento del footer

class FooterComponent {
    constructor() {
        this.footer = document.querySelector('.site-footer');
        this.init();
    }

    init() {
        // Mostrar año actual
        const yearSpan = document.createElement('span');
        yearSpan.className = 'current-year';
        yearSpan.textContent = new Date().getFullYear();
        
        const copyright = this.footer.querySelector('p:first-child');
        if (copyright) {
            copyright.innerHTML = copyright.innerHTML.replace('{year}', yearSpan.outerHTML);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FooterComponent();
});
import { ViewRenderer } from './views.js';

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.renderer = new ViewRenderer();
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        
        this.init();
    }

    init() {
        // Initial Render (Home)
        this.updateView('home');

        // Event Listeners
        this.setupNavigation();
        this.setupMobileMenu();
    }

    setupNavigation() {
        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                const viewName = link.getAttribute('data-link');
                this.updateView(viewName);
                
                // Close mobile menu if open
                this.navLinks.classList.remove('active');
            }
        });
    }

    setupMobileMenu() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                
                // Toggle Icon
                const icon = this.menuToggle.querySelector('i');
                if (this.navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark'); // or fa-times
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }

    updateView(viewName) {
        let contentHTML = '';
        
        if (viewName === 'home') {
            contentHTML = this.renderer.renderHome();
        } else {
            contentHTML = this.renderer.renderPage(viewName);
        }

        this.appElement.innerHTML = contentHTML;
        
        // Re-render math
        if (window.renderMathInElement) {
            renderMathInElement(this.appElement, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '\\(', right: '\\)', display: false}
                ]
            });
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

import { ViewRenderer } from './views/ViewRenderer.js';

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
            // Navigation
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                const viewName = link.getAttribute('data-link');
                this.updateView(viewName);
                
                // Close mobile menu if open
                this.navLinks.classList.remove('active');
                if (this.menuToggle) {
                    this.menuToggle.classList.remove('open');
                }
            }

            // Accordion (Q&A)
            const qaBtn = e.target.closest('.qa-question-btn');
            if (qaBtn) {
                const item = qaBtn.parentElement;
                item.classList.toggle('active');
                
                // Optional: Close others? (User didn't specify, but "accordion" usually implies one open. 
                // "Collapsible" allows multiple. I'll stick to collapsible for utility but exclusive looks more premium.
                // Reverting to simple toggle for now as per "foldable" request.)
            }
        });
    }

    setupMobileMenu() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                this.menuToggle.classList.toggle('open');
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

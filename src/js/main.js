import { ViewRenderer } from './views/ViewRenderer.js';
import { upcoming } from './data/index.js';

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.renderer = new ViewRenderer();
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        this.countdownInterval = null;
        
        this.init();
    }

    init() {
        // Initial Render (Home)
        this.updateView('home');

        // Event Listeners
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupThemeToggle();
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

    setupThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        toggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    updateView(viewName) {
        // Clear existing countdown interval
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }

        let contentHTML = '';
        
        if (viewName === 'home') {
            contentHTML = this.renderer.renderHome();
        } else {
            contentHTML = this.renderer.renderPage(viewName);
        }

        this.appElement.innerHTML = contentHTML;
        
        // Update navigation active state
        this.updateNavActiveState(viewName);
        
        // Start countdown if on home page
        if (viewName === 'home') {
            this.startCountdown();
        }
        
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

    updateNavActiveState(viewName) {
        const links = document.querySelectorAll('.nav-links a[data-link]');
        links.forEach(link => {
            if (link.getAttribute('data-link') === viewName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    startCountdown() {
        const countdownElement = document.getElementById('countdown-timer');
        if (!countdownElement || !upcoming?.examDateTime) return;

        const targetDate = upcoming.examDateTime;

        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                countdownElement.innerHTML = `
                    <span class="countdown-ended">試験開始</span>
                `;
                clearInterval(this.countdownInterval);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div class="countdown-unit">
                    <span class="countdown-value">${String(days).padStart(2, '0')}</span>
                    <span class="countdown-text">日</span>
                </div>
                <span class="countdown-separator">:</span>
                <div class="countdown-unit">
                    <span class="countdown-value">${String(hours).padStart(2, '0')}</span>
                    <span class="countdown-text">時間</span>
                </div>
                <span class="countdown-separator">:</span>
                <div class="countdown-unit">
                    <span class="countdown-value">${String(minutes).padStart(2, '0')}</span>
                    <span class="countdown-text">分</span>
                </div>
                <span class="countdown-separator">:</span>
                <div class="countdown-unit">
                    <span class="countdown-value">${String(seconds).padStart(2, '0')}</span>
                    <span class="countdown-text">秒</span>
                </div>
            `;
        };

        // Initial update
        updateCountdown();
        
        // Update every second
        this.countdownInterval = setInterval(updateCountdown, 1000);
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

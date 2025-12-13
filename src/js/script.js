document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navUl.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Q&A Accordion
    const qaQuestions = document.querySelectorAll('.qa-question');
    qaQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
});

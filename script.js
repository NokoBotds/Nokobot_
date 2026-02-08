// 1. Gestion du scroll pour la barre de navigation
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(5, 7, 10, 0.95)';
        nav.style.padding = '15px 8%';
        nav.style.borderBottom = '1px solid rgba(0, 229, 255, 0.2)';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 8%';
        nav.style.borderBottom = 'none';
    }
});

// 2. Système de FAQ accordéon
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Ferme les autres FAQ ouvertes
        faqItems.forEach(otherItem => {
            if (otherItem !== item) otherItem.classList.remove('active');
        });
        // Bascule l'état actuel
        item.classList.toggle('active');
    });
});

// 3. Simulation d'achat
const buyButtons = document.querySelectorAll('.btn-buy');
buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`Copier dans le presse papier`);
    });
});
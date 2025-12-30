export function initMenu() {
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-list a');

if (!navToggle || !mainNav) return;

navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.textContent = isOpen ? '✖' : '☰';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
    });
});

document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.textContent = '☰';
        }
    });
}

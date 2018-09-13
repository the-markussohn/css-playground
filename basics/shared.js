const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    modal ? closeModal() : backdrop.classList.remove('open');
});

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}
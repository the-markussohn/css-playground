const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(btn => btn.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}));

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeModal();
});

modalNoButton.addEventListener('click', closeModal);
toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');

selectPlanButtons.forEach(btn => btn.addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
}));

modalNoButton.addEventListener('click', closeModal);
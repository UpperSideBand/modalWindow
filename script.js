'use strict';

// DOM links
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Functions
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Event Listeners
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});

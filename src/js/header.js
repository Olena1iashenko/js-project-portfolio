// Menu

const openMenu = document.querySelector('open-menu');

openMenu.addEventListener('click', openModal);

function openModal(event) {
  event.classList.toggle('hidden');
}

// Modal
const openModalBtn = document.querySelector('.open-modal');
const closeModaBtn = document.querySelector('.close-moda');

openModalBtn.addEventListener('click', openModal);
// closeModaBtn.addEventListener('click', closeModal);

// function openModal(event) {
//   event.classList.toggle('hidden');
// }

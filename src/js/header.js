// Menu

const openMenu = document.querySelector('.open-menu');
const openModalBtn = document.querySelector('.open-modal');
const closeModaBtn = document.querySelector('.close-moda');

openMenu.addEventListener('click', openModal);

function openModal(event) {
  // event.classList.toggle('hidden');

  console.log(event);
}
// Modal

openModalBtn.addEventListener('click', openModal);
// closeModaBtn.addEventListener('click', closeModal);

// function openModal(event) {
//   event.classList.toggle('hidden');
// }

// Menu open
const openMenu = document.querySelector('.header-menu-nav');
const boxItemsEl = document.querySelector('.menu-item-box');
const itemsEl = document.querySelector('.menu-item');

openMenu.addEventListener('click', onOpenMenu);

function onOpenMenu() {
  boxItemsEl.classList.toggle('hidden');
}

// Modal
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const mobileModal = document.querySelector('.mobile-modal-menu');
const mobileMenu = document.querySelector('.mobile-menu-list');
const mobileMenuItems = document.querySelector('.mobile-menu-item');
const mobileLink = document.querySelector('.mobile-modal-link');
console.dir(mobileLink);

openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  mobileModal.classList.toggle('hidden');
}

closeModalBtn.addEventListener('click', onClosedModal);

function onClosedModal() {
  mobileModal.classList.toggle('hidden');
}

mobileMenu.addEventListener('click', onMobileItemsClick);

function onMobileItemsClick() {
  mobileModal.classList.toggle('hidden');
}

mobileLink.addEventListener('click', onCloseLink);

function onCloseLink() {
  mobileModal.classList.toggle('hidden');
}

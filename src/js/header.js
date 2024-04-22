// Menu open
const openMenu = document.querySelector('.header-menu-nav');
const boxItemsEl = document.querySelector('.menu-item-box');
const itemsEl = document.querySelector('.menu-item');

openMenu.addEventListener('click', onOpenMenu);

function onOpenMenu() {
  boxItemsEl.classList.toggle('is-hidden');
}

itemsEl.addEventListener('click', onCloseItemClick);

function onCloseItemClick() {
  boxItemsEl.classList.toggle('is-hidden');
}

// Modal
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const mobileModal = document.querySelector('.mobile-modal-menu');
const mobileMenu = document.querySelector('.mobile-menu-list');
const mobileMenuItems = document.querySelector('.mobile-menu-item');
const mobileLink = document.querySelector('.mobile-modal-link');

openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  mobileModal.classList.toggle('is-hidden');
  document.body.classList.toggle('body-hidden');
  closeModalBtn.addEventListener('click', onClosedModal);
  mobileMenu.addEventListener('click', onMobileItemsClick);
  mobileLink.addEventListener('click', onCloseLink);
}

function onClosedModal() {
  mobileModal.classList.toggle('is-hidden');
  document.body.classList.toggle('body-hidden');
  closeModalBtn.removeEventListener('click', onClosedModal);
}

function onMobileItemsClick() {
  mobileModal.classList.toggle('is-hidden');
  document.body.classList.toggle('body-hidden');
  mobileMenu.removeEventListener('click', onMobileItemsClick);
}

function onCloseLink() {
  mobileModal.classList.toggle('is-hidden');
  document.body.classList.toggle('body-hidden');
  mobileLink.removeEventListener('click', onCloseLink);
}

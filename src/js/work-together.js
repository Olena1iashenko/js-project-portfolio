import axios from 'axios';
import iziToast from 'izitoast';
import errorIcon from '../img/icons.svg';

const formData = document.querySelector('.footer-form');
const emailInput = document.querySelector('#user-email');
const successMessage = document.querySelector('.input-success');
const commentInput = document.querySelector('#user-comment');
const errorMessage = document.querySelector('.input-error');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-btn');
const clickSubmitBtn = document.querySelector('.footer-btn');

const MAX_INPUT_LENGTH = 50;

function validateEmail(email) {
  const pattern = emailInput.getAttribute('pattern');
  const validRegex = new RegExp(pattern);
  return validRegex.test(email);
}

function validateComment(comment) {
  return comment.length >= 10;
}


commentInput.addEventListener('input', function(event) {
  const inputText = event.target.value;
  if (inputText.length > MAX_INPUT_LENGTH) {
    const trimmedText = inputText.substring(0, MAX_INPUT_LENGTH);
    event.target.value = trimmedText + '...';
  }
});

function showMessage(icon, message, bgColor) {
  iziToast.show({
    iconUrl: `${icon}#icon-x`,
    titleColor: 'White',
    titleSize: '24px',
    message: message,
    messageColor: 'White',
    messageSize: '16px',
    backgroundColor: bgColor,
    position: 'topRight',
    timeout: 3000,
  });
}

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function userForm(userData) {
  const body = {
    email: userData.email,
    comment: userData.comment
  };
  const ENDPOINT = '/requests';

  return axios.post(ENDPOINT, body);
}

function handleSuccess() {
  emailInput.classList.add('input-correct');
  emailInput.classList.remove('input-incorrect');

  successMessage.classList.remove('visually-hidden');
  errorMessage.classList.add('visually-hidden');
  successMessage.style.display = 'block';
  errorMessage.style.display = 'none';
}

function handleFailure() {
  emailInput.classList.remove('input-correct');
  emailInput.classList.add('input-incorrect');
  successMessage.classList.add('visually-hidden');
  errorMessage.classList.remove('visually-hidden');
  successMessage.style.display = 'none';
  errorMessage.style.display = 'block';
}

function afterFillSuccess() {
  emailInput.classList.remove('input-incorrect');
  emailInput.classList.add('input-correct');
  successMessage.classList.add('visually-hidden');
  errorMessage.classList.add('visually-hidden');
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';
}

function afterFillFailure() {
  emailInput.classList.remove('input-correct');
  emailInput.classList.add('input-incorrect');
  successMessage.classList.add('visually-hidden');
  errorMessage.classList.add('visually-hidden');
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';
}

function handleCloseModal() {
  document.body.classList.remove('backdrop-after');
  backdrop.classList.remove('backdrop-is-open');
  modalWindow.classList.remove('modal-is-open');
}

function handleOpenModal() {
  document.body.classList.add('backdrop-after');
  backdrop.classList.add('backdrop-is-open');
  modalWindow.classList.add('modal-is-open');
}

function closeModal(event) {
  if (
    event.target.classList.contains('backdrop') ||
    event.target.nodeName === 'svg' ||
    event.target.nodeName === 'BUTTON'
  ) {
    handleCloseModal();
    closeModalBtn.removeEventListener('click', closeModal);
  }
}

function onEscClose(event) {
  if (event.key === 'Escape') {
    handleCloseModal();
    document.removeEventListener('keydown', onEscClose);
  }
}

function onSubmitButton() {
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  if (!validateEmail(email)) {
    handleFailure();
  }

  if (!validateComment(comment)) {
    handleFailure();
  }
}

async function onSubmit(event) {
  event.preventDefault();

  try {
    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();

    if (email === '' || comment === '') {
      showMessage(errorIcon, 'Both fields are required. Please provide your email and comment before sending.', '#e74a3b');
      return;
    }

    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!validateComment(comment)) {
      throw new Error('Comment must be at least 10 characters long');
    }

    const response = await userForm({ email, comment });
    formData.reset();

    handleOpenModal();

    document.body.addEventListener('click', closeModal);
    window.addEventListener('keydown', onEscClose);
  } catch (error) {
    showMessage(errorIcon, error.message, '#e74a3b');
  }
}

function handleInputCheck() {
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  if (email === '' || comment === '') {
    return;
  }

  if (validateEmail(email)) {
    handleSuccess();
    setTimeout(afterFillSuccess, 2000);
  } else {
    handleFailure();
    setTimeout(afterFillFailure, 2000);
  }

  if (validateComment(comment)) {
    handleSuccess();
    setTimeout(afterFillSuccess, 2000);
  } else {
    handleFailure();
    setTimeout(afterFillFailure, 2000);
  }
}

formData.addEventListener('submit', onSubmit);
clickSubmitBtn.addEventListener('click', onSubmitButton);
emailInput.addEventListener('input', handleInputCheck);
commentInput.addEventListener('input', handleInputCheck);
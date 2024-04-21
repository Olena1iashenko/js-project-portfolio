
import axios from 'axios';
import iziToast from 'izitoast';
import errorIcon from '../img/icons.svg#icon-x';

//refs
const formData = document.querySelector('.footer-form');
const emailInput = document.querySelector('#user-email');
const emailMessage = document.querySelector('#email-message');
const commentInput = document.querySelector('#user-comment');
const commentMessage = document.querySelector('#comment-message');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-btn');
const clickSubmitBtn = document.querySelector('.footer-btn');


function validateEmail(email) {
  const pattern = emailInput.getAttribute('pattern');
  const validRegex = new RegExp(pattern);
  return validRegex.test(email);
}

function validateComment(comment) {
  return comment.length >= 10;
}


function showMessage(icon, message, bgColor) {
  iziToast.show({
    iconUrl: icon,
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

// Axios async function
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function userForm(userData) {
  const body = {
    email: userData.email,
    comment: userData.comment
  };
  const ENDPOINT = '/requests';

  return axios.post(ENDPOINT, body);
}


function handleSuccess(input, message) {
  input.classList.add('input-correct');
  message.classList.remove('input-error');
  message.classList.add('input-success');
  message.textContent = 'Success!';
}


function handleFailure(input, message) {
  input.classList.add('input-incorrect');
  message.classList.remove('input-success');
  message.classList.add('input-error');
  message.textContent = 'Please, try again!';
}


function afterFillSuccess(message) {
  message.classList.remove('correct-text');
}

function afterFillFailure(message) {
  message.classList.remove('incorrect-text');
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

  if (!validateEmail(email)) {
    handleFailure(emailInput, emailMessage); 
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

  if (email === '') {
    return;
  }

  if (validateEmail(email)) {
    handleSuccess(emailInput, emailMessage);
    setTimeout(() => afterFillSuccess(emailMessage), 2000);
  } else {
    handleFailure(emailInput, emailMessage);
    setTimeout(() => afterFillFailure(emailMessage), 2000);
  }
}


formData.addEventListener('submit', onSubmit);
clickSubmitBtn.addEventListener('click', onSubmitButton);
emailInput.addEventListener('input', handleInputCheck);
commentInput.addEventListener('input', handleInputCheck);
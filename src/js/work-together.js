import axios from 'axios';
import iziToast from 'izitoast';

const formData = document.querySelector('.footer-form');
const emailInput = document.querySelector('#user-email');
const successMessage = document.querySelector('.input-success');
const commentInput = document.querySelector('#user-comment');
const errorMessage = document.querySelector('.input-error');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-btn');
const clickSubmitBtn = document.querySelector('.footer-btn');



function validateEmail(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_\-]+?\.[a-zA-Z]{2,3}$/;
  const validRegex = new RegExp(pattern);
  return validRegex.test(email);
}
// function validateEmail(emailInput) {
//   const pattern = /^\w+(\.\w+)?@[a-zA-Z_\-]+?\.[a-zA-Z]{2,3}$/;
//   const validRegex = new RegExp(pattern);
//   return validRegex.test(emailInput);
// }

// const emailInputValue = document.getElementById('user-email').value.trim();
// const isValidEmail = validateEmail(emailInputValue);

// if (isValidEmail) {
//   console.log('Email is valid!');
// } else {
//   console.log('Email is not valid!');
// }

function validateComment(comment) {
  return comment.length >= 10;
}

function handleEmailInput(event) {
  const userData = event.target.value.trim();
  const width = window.innerWidth;
  if (userData.length > 27 && width <= 375) {
    event.target.value = userData.slice(0, 25) + '...';
  }
  if (userData.length > 19 && width > 375 && width < 768) {
    event.target.value = userData.slice(0, 17) + '...';
  }
  if (userData.length > 31 && width >= 768 && width < 1440) {
    event.target.value = userData.slice(0, 29) + '...';
  }
  if (userData.length > 44 && width >= 1440) {
    event.target.value = userData.slice(0, 42) + '...';
  }
}

function handleCommentsInput(event) {
  const userData = event.target.value.trim();
  const width = window.innerWidth;
  if (userData.length > 27 && width <= 375) {
    event.target.value = userData.slice(0, 25) + '...';
  }
  if (userData.length > 19 && width > 375 && width < 768) {
    event.target.value = userData.slice(0, 17) + '...';
  }
  if (userData.length > 31 && width >= 768 && width < 1440) {
    event.target.value = userData.slice(0, 29) + '...';
  }
  if (userData.length > 45 && width >= 1440) {
    event.target.value = userData.slice(0, 43) + '...';
  }
}

function showMessage(message, bgColor) {
  iziToast.show({
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

// function handleInputCheck() {
//   const email = emailInput.value.trim();
//   const comment = commentInput.value.trim();

//   if (email === '' || comment === '') {
//     return;
//   }

//   if (validateEmail(email)) {
//     handleSuccess();
//     setTimeout(afterFillSuccess, 2000);
//   } else {
//     handleFailure();
//     setTimeout(afterFillFailure, 2000);
//    }

//    if (validateComment(comment)) {
//      handleSuccess();
//     setTimeout(afterFillSuccess, 2000);
//    } else {
//      handleFailure();
//      setTimeout(afterFillFailure, 2000);
//   }
//  }
function handleInputCheck() {
   const email = emailInput.value.trim();

   if (email === '') {
     return;
  }

   if (validateEmail(email)) {
     handleSuccess(emailInput);
     setTimeout(() => afterFillSuccess(emailInput), 2000);
   } else {
    handleFailure(emailInput);
     setTimeout(() => afterFillFailure(emailInput), 2000);
  }
 }

formData.addEventListener('submit', onSubmit);
clickSubmitBtn.addEventListener('click', onSubmitButton);
emailInput.addEventListener('input', handleInputCheck);
// commentInput.addEventListener('input', handleInputCheck);
emailInput.addEventListener('input', handleEmailInput);
commentInput.addEventListener('input', handleCommentsInput);

commentInput.addEventListener('blur', handleInputCheck);

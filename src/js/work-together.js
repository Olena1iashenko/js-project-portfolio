// document.addEventListener("DOMContentLoaded", function() {
//     const emailInput = document.querySelector('.footer-form-input');
//     const commentInput = document.querySelector('.footer-form-message');

//     emailInput.addEventListener('input', function() {
//         let maxLength = parseInt(emailInput.getAttribute("maxlength"));
//         if (emailInput.value.length > maxLength) {
//             emailInput.value = emailInput.value.substring(0, maxLength);
//         }
//     });

//     const form = document.querySelector('.footer-form');
//     form.addEventListener("submit", onSubmit);

//     function onSubmit(event) {
//         event.preventDefault();

//         const minLength = parseInt(commentInput.getAttribute("minlength"));
//         if (commentInput.value.length < minLength) {
//             alert(`Comment must be at least ${minLength} characters long`);
//             return;
//         }

//         const formData = new FormData(event.target);
//         const formDataObject = {};
//         formData.forEach((value, key) => {
//             formDataObject[key] = value;
//         });

//         fetch("https://portfolio-js.b.goit.study/api/requests", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(formDataObject)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(data => {
//             form.reset();
//             showModal("Thank you for your interest in cooperation!");
//         })
//         .catch(error => {
//             alert("Error: We're sorry, something went wrong on our end. Please try again later or contact our support team");
//         });
//     }

//     function showModal(message) {
//         const modal = document.querySelector(".modal");
//         const closeButton = document.querySelector(".modal-button");
//         const backdrop = document.querySelector(".backdrop");

//         document.querySelector(".modal-caption").textContent = message;
//         document.querySelector(".modal-text").textContent = message;

//         modal.style.display = "block";

//         closeButton.addEventListener("click", closeModal);
//         backdrop.addEventListener("click", closeModal);
//         document.addEventListener("keydown", function(event) {
//             if (event.key === "Escape") {
//                 closeModal();
//             }
//         });
//     }

//     function closeModal() {
//         const modal = document.querySelector(".modal");
//         modal.style.display = "none";
//     }
// });


// Import
import axios from 'axios';
import iziToast from 'izitoast';
import errorIcon from '../img/icons.svg#icon-x';

// Refs
const formData = document.querySelector('.footer-form');
const emailInput = document.querySelector('.footer-form-input');
const commentInput = document.querySelector('.footer-form-message');
const message = document.querySelector('.input-email-text');
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

// IziToast function
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


function handleSuccess() {
  emailInput.classList.add('input-correct');
  message.classList.add('correct-text');
  message.textContent = 'Success!';
}


function handleFailure() {
  message.classList.add('incorrect-text');
  message.textContent = 'Invalid email, try again';
  emailInput.classList.add('input-incorrect');
}

//  fill functions
function afterFillSuccess() {
  message.classList.remove('correct-text');
  emailInput.classList.remove('input-correct');
}

function afterFillFailure() {
  message.classList.remove('incorrect-text');
  emailInput.classList.remove('input-incorrect');
}

//  modal functions
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
  if (!validateEmail(clickSubmitBtn.form.elements.email.value.trim())) {
    message.handleFailure();
  }
};

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
    handleSuccess();
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
    handleSuccess();
    setTimeout(afterFillSuccess, 2000);
  } else {
    handleFailure();
    setTimeout(afterFillFailure, 2000);
  }
}

// event listener 
formData.addEventListener('submit', onSubmit);


clickSubmitBtn.addEventListener('submit', onSubmitButton);


emailInput.addEventListener('input', handleInputCheck);

commentInput.addEventListener('input', handleInputCheck);

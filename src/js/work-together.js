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
import axios from 'axios';
import iziToast from 'izitoast';
import errorIcon from '../img/icons.svg#icon-x';

const formData = document.querySelector('.footer-form');
const emailInput = document.querySelector('.footer-form-input');
const commentInput = document.querySelector('.footer-form-message');
const message = document.querySelector('.input-email-text');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-btn');

function createUserComment(mail, comment) {
  return {
    email: mail,
    comment: comment,
    id: Date.now()
  };
}

const closeModal = event => {
    if (
        event.target.classList.contains('backdrop') ||
        event.target.nodeName === 'svg'
    ) {
        document.body.classList.remove('backdrop-after');
        backdrop.classList.remove('backdrop-is-open');
        modalWindow.classList.remove('modal-is-open');
        closeModalBtn.removeEventListener('click', closeModal);
    }
};
function onEscClose(event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    scrollUpBtn.classList.add('visible');
    document.body.classList.remove('backdrop-opened');
    backdrop.classList.remove('backdrop-is-open');
    modalWindow.classList.remove('modal-is-open');
    document.removeEventListener('keydown', onEscClose); 
  }
}
export function showMessage(icon, message, bgr) {
  iziToast.show({
    iconUrl: icon,
    titleColor: 'White',
    titleSize: '24px',
    message,
    messageColor: 'White',
    messageSize: '16px',
    backgroundColor: bgr,
    position: 'topRight',
    timeout: 3000,
  });
}

async function onSubmit(event) {
  try {
    event.preventDefault();
    document.body.classList.add('loading');
    const mail = emailInput.value;
    const comment = commentInput.value;
    
    if (comment.length < 10) {
      throw new Error('Comment must be at least 10 characters long');
    }

    await axios.post('/requests', createUserComment(mail, comment));
    event.target.reset();
    document.body.classList.add('backdrop-after');
    backdrop.classList.add('backdrop-is-open');
    modalWindow.classList.add('modal-is-open');
      closeModalBtn.addEventListener('click', closeModal);
       window.addEventListener('keydown', onEscClose);
  } catch (error) {
    showMessage(errorIcon, error.message, '#e74a3b');
  } finally {
    document.body.classList.remove('loading');
  }
}

function validateEmail(mail) {
  const pattern = emailInput.getAttribute('pattern');
  const validRegex = new RegExp(pattern);
  return validRegex.test(mail);
}

function handleInputCheck() {
  const mail = emailInput.value;
  if (mail === '') {
    return;
  }
  if (validateEmail(mail)) {
    message.classList.add('correct-text');
    emailInput.classList.add('input-correct');
    message.textContent = 'Success!';
    setTimeout(() => {
      message.classList.remove('correct-text');
      emailInput.classList.remove('input-correct');
    }, 2000);
  } else {
    message.classList.add('incorrect-text');
    message.textContent = 'Invalid email, try again';
    emailInput.classList.add('input-incorrect');
    setTimeout(() => {
      message.classList.remove('incorrect-text');
      emailInput.classList.remove('input-incorrect');
    }, 2000);
  }
}

formData.addEventListener('submit', onSubmit);
emailInput.addEventListener('blur', handleInputCheck);
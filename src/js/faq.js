import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


// const faqAccordion = document.querySelector('.faq-list');
// const accordion = new Accordion(faqAccordion, {
//     openOnInit: [0],
//     showMultiple: true,
//     onOpen: (currEl) => console.log('Open!', currEl)
// });

// const faqButtons = document.querySelectorAll('.faq-btn');

// faqButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const faqContent = button.nextElementSibling;
//     faqContent.classList.toggle('active');
//   });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const faqButtons = document.querySelectorAll('.faq-btn');
  
//     faqButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const faqContent = button.nextElementSibling;
//         const isActive = faqContent.classList.contains('active');
  
//         // Закриваємо всі активні блоки FAQ
//         faqButtons.forEach(btn => {
//           btn.nextElementSibling.classList.remove('active');
//         });
  
//         // Відкриваємо або закриваємо поточний блок FAQ
//         if (!isActive) {
//           faqContent.classList.add('active');
//         }
//       });
//     });
//   });
  
  const listEl = document.querySelector(".faq-list");
listEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  const target = event.target;
  if (target.nodeName !== "BUTTON") return;
  target.nextElementSibling.classList.toggle("active");
}
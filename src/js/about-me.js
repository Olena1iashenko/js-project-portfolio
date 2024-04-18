import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Accordion

const container = document.querySelector('.accordion-container');
console.log(container);
const accordion = new Accordion(container, {
    openOnInit: [0],
    showMultiple: true,
    onOpen: (currEl) => console.log('Open!', currEl)
});

// Swiper

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
//     autoplay: {
//     delay: 3000,
//   },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    // slidesPerView: 2,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
    //   slidesPerView: 3,
    //   spaceBetween: 0
    },
    // when window width is >= 640px
    1440: {
    //   slidesPerView: 6,
    //   spaceBetween: 40
    }
  }
});
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Accordion

const container = document.querySelector('.about-me-accordion-container');
const accordion = new Accordion(container, {
    openOnInit: [0],
    showMultiple: true,
});

// Swiper

const swiper = new Swiper('.about-me-swiper', {
  loop: true,
  // enabled: true,
  // onlyInViewport: true,
  // pageUpDown: true,
  slideClass: 'about-me-swiper-slide',
  navigation: {
    nextEl: '.about-me-swiper-button-next',
  },
  slidesOffsetAfter: 72,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesOffsetAfter: 55,
      },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesOffsetAfter: 364,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
      slidesOffsetAfter: 72,
    }
  }
});
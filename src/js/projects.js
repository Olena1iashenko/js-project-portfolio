import Swiper from 'swiper/bundle';
// import { Navigation } from 'swiper/modules';

// import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';

new Swiper('.projects-swiper', {
  // Install modules
  // modules: [Navigation],
  // speed: 500,
  slidesPerView: 1,
  spaceBetween: 30,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
    tabKeys: true,
  },
  mousewheel: {
    invert: true,
  },

  navigation: {
    prevEl: '.js-btn_arrow-left',
    nextEl: '.js-btn_arrow-right',
  },
});

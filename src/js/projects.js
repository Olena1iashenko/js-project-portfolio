import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

console.dir(Swiper);

new Swiper('.projects-swiper', {
  // Install modules
  modules: [Navigation],
  speed: 500,
  slidesPerView: 1,
  navigation: {
    prevEl: '.js-btn_arrow-left',
    nextEl: '.js-btn_arrow-right',
    // allowSlidePrev: true,
    // allowSlideNext: true,
  },
  breakpoints: {
    320: {
      // direction: 'vertical',
      height: 288,
    },
    375: {
      // direction: 'vertical',
      height: 343,
    },
    768: {
      // direction: 'vertical',
      height: 625,
    },
    1440: {
     direction: 'horizontal',
    }
  }

  // ...
});

// swiper.allowSlideNext;

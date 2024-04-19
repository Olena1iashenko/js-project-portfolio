import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

console.dir(Swiper);

new Swiper('.projects-swiper', {
  // Install modules
  modules: [Navigation],
  speed: 500,
  navigation: {
    prevEl: '.js-btn_arrow-left',
    nextEl: '.js-btn_arrow-right',
    // allowSlidePrev: true,
    // allowSlideNext: true,
  },

  // ...
});

// swiper.allowSlideNext;

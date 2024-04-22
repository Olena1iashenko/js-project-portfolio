import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.projects-swiper', {
  // Install modules
  modules: [Navigation],
  slidesPerView: 1,
  speed: 500,
  slideClass: 'projects-swiper-slide',
  navigation: {
    prevEl: '.js-btn_arrow-left',
    nextEl: '.js-btn_arrow-right',
  },
});

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.projects-swiper', {
  // Install modules
  modules: [Navigation],
  speed: 500,
  slidesPerView: 1,
  navigation: {
    prevEl: '.js-btn_arrow-left',
    nextEl: '.js-btn_arrow-right',
  },
});

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
  // breakpoints: {
  //   320: {
  //     height: 288,
  //   },
  //   375: {
  //     height: 343,
  //   },
  //   768: {
  //     height: 625,
  //   },
  //   1440: {
  //   },
  // },
});

// swiper.allowSlideNext;

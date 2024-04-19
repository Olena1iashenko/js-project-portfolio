import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function fetchReviews() {
  fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      if (!response.ok) {
        throw new Error('Bad request, please try again');
      }
      return response.json();
    })
    .then(reviews => {
      //рисует карточки
      const reviewsList = document.querySelector('.reviews-list');

      reviewsList.innerHTML = createDisplayReviews(reviews);
    })
    .catch(error => {
      console.error(error);
    });

  const swiper = new Swiper('.swiper', {
    // Optional parameters обязательніе
    loop: false,
    slidesPerView: 4,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-btn-right',
      prevEl: '.reviews-btn-left',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1, // количество на моб версии
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

function createDisplayReviews(reviews) {
  const reviewsList = document.querySelector('.reviews-list');
  reviewsList.innerHTML = ''; // убираю данніе с html

  return reviews
    .map(
      review =>
        `<li class="reviews-item swiper-slide">
        <img src="${review.avatar_url}" alt="${review.author}" class="reviews-img" width="48" height="48">
        <h5 class="reviews-h">${review.author}</h5>
        <p class="reviews-p">${review.review}</p>
    </li>`
    )
    .join('');
}

fetchReviews();

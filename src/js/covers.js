const options = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 0.5,
};

const target = document.querySelector('.js-covers-section');
const targetItem = target.querySelectorAll('.covers-list-item');

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      targetItem.forEach(item => {
        item.classList.add('is-animated');
      });
      observer.unobserve(target);
    }
  });
}, options);

observer.observe(target);

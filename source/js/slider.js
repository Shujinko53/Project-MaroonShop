'use strict';

(function () {
  const slider = document.querySelector('.swiper-container');

  if (slider) {
    /* eslint-disable no-undef */
    const mySwiper = new Swiper('.swiper-container', {
      init: false,
      loop: true,
      navigation: {
        nextEl: `.slider__button_next`,
        prevEl: `.slider__button_prev`,
      },
      slidesPerView: 4,
      spaceBetween: 30,
      updateOnWindowResize: true,
      breakpoints: {
        320: {
          width: 970
        },
        768: {
          width: 1010
        }
      }
    });

    mySwiper.init();
    /* eslint-disable no-undef */
  }
})();

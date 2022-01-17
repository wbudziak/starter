var swiper = new Swiper(".swiperSlider", {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiperSlider__button-next",
    prevEl: ".swiperSlider__button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiperSlider__pagination",
    clickable: true,
  },
});

const productSwiper = new Swiper("#productSwiper", {
  loop: true,
  pagination: {
    el: "#productSwiper .swiper-pagination",
  },
  navigation: {
    nextEl: "#productSwiper .swiper-button-next",
    prevEl: "#productSwiper .swiper-button-prev",
  },
  allowTouchMove: false,
});

const articleSwiper = new Swiper("#swiperArticles", {
  loop: false,
  slidesPerView: 1.5,
  centeredSlides: true,
  simulateTouch: true,
  breakpoints: {
    992: {
      slidesPerView: 2.3,
      centeredSlides: false,
    },
  },
});

window.addEventListener("resize", mediaQuerys);

function mediaQuerys() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    //cambiar el swiper
  }
}

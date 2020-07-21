//Initialization for swiper Slides
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

//DOm Variables
const principalNav = document.querySelector(".site-nav"),
  navMenu = document.querySelector(".nav");

//initial calling functions
mediaQuerys();
addBackground();

//listeners
window.addEventListener("resize", mediaQuerys);

//functions
function mediaQuerys() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    //cambiar el swiper
  } else {
    const hamburguer = document.querySelector(".hamburguer");
    hamburguer.addEventListener("click", menuMovil);
  }
  window.addEventListener("scroll", addBackground);
}

//interface functions
function addBackground() {
  if (window.scrollY > 0) {
    principalNav.style.background = "#BD4408";
  } else {
    principalNav.style.background = "";
  }
}

function menuMovil(e) {
  e.preventDefault();
  e.stopPropagation();
  navMenu.classList.add("active");
  const closeMenuBtn = document.querySelector("#btnCloseMenu");
  closeMenuBtn.addEventListener("click", closeMenu);
  window.addEventListener("scroll", closeMenu);
  window.addEventListener("click", clickEvent);
}

function closeMenu(e) {
  navMenu.classList.remove("active");
  window.removeEventListener("scroll", closeMenu);
  window.removeEventListener("click", clickEvent);
}

function clickEvent(e) {
  if (navMenu.classList.contains("active")) {
    console.log(e.target);
    if (!e.target.classList.contains("nav")) {
      closeMenu();
      console.log("click");
    }
  }
}

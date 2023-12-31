import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

const portSlider = document.querySelector(".portfolio-section__items");
const testimonialsSlider = document.querySelector(".testimonials__items");

if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    allowTouchMove: true,
    navigation: {
      nextEl: ".portfolio-section__next",
      prevEl: ".portfolio-section__prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
}

if (testimonialsSlider) {
  const portfolioSlider = new Swiper(testimonialsSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    allowTouchMove: true,
    loop: true,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
  });
}

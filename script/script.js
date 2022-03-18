// const swiperTestimonial = new Swiper(".swiper--testimonial", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   slidesPerView: 1,
// });

loadEvents();
loadProducts();

function loadEvents() {
  for (let i = 1; i < 11; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper--events-slide");
    if (i % 2 != 0) {
      newSlide.classList.add("owl--bottom");
    }
    newSlide.innerHTML = `<div class="owl-item-image">
      <img src="img/show-slider-img-${i}.jpg" alt="owl-image-2" />
    </div>
    <div class="owl-item-info">
      <p class="event-date">Mar 1 - Mar 3 2022</p>
      <h4 class="event-title">abstract wireframe</h4>
      <span></span>
      <a class="event-link" href="">View more</a>
    </div>`;
    document.querySelector(".owl-stage").append(newSlide);
  }
}

function loadProducts() {
  for (let i = 1; i < 12; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper--shop-slide");
    newSlide.innerHTML = `<div class="product-image">
    <img src="img/shop-img-8-768x768.jpg" alt="" />
  </div>
  <h4 class="product-name">Linen bag</h4>
  <div class="product-rating">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  </div>
  <span class="product-price">29$</span>`;
    document.querySelector(".swiper--shop-wrapper").append(newSlide);
  }
}

const swiperMain = new Swiper(".main--slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 1,
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 4,
  spaceBetween: 10,
});

const swiperTestimonial = new Swiper(".swiper--testimonial", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  slidesPerView: 1,
});

const swiperShop = new Swiper(".swiper--shop", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 3,
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  const elements = document.querySelectorAll(".time-line--span");
  elements.forEach((el) => {
    if (element.id === "time-line--span-1") {
      element.classList.add("scrolled");
    } else if (element.id === "time-line--span-2") {
      setTimeout(() => {
        element.classList.add("scrolled");
      }, 300);
    } else {
      setTimeout(() => {
        element.classList.add("scrolled");
      }, 800);
    }
  });
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    }
  });
};

document.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

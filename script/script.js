// const swiperEventsSlide = {
//   num: 11,
//   class: "swiper--events-slide",
//   html: `<div class="owl-item-image">
//   <img src="img/show-slider-img-num.jpg" alt="owl-image-2" />
// </div>
// <div class="owl-item-info">
//   <p class="event-date">Mar 1 - Mar 3 2022</p>
//   <h4 class="event-title">abstract wireframe</h4>
//   <span></span>
//   <a class="event-link" href="">View more</a>
// </div>`,
//   sliderWrapper: ".owl-stage",
//   exibitions: true,
// };

// const swiperProductsSlide = {
//   num: 12,
//   class: "swiper--shop-slide",
//   html: `<div class="product-image">
//   <img src="img/shop-img-num-768x768.jpg" alt="" />
// </div>
// <h4 class="product-name">Linen bag</h4>
// <div class="product-rating">
// <i class="fa-solid fa-star"></i>
// <i class="fa-solid fa-star"></i>
// <i class="fa-solid fa-star"></i>
// <i class="fa-regular fa-star"></i>
// <i class="fa-regular fa-star"></i>
// </div>
// <span class="product-price">29$</span>`,
//   sliderWrapper: ".swiper--shop-wrapper",
//   exibitions: false,
// };

// function loadSlides(slide) {
//   for (let i = 1; i < slide.num; i++) {
//     const newSlide = document.createElement("div");
//     newSlide.classList.add("swiper-slide");
//     newSlide.classList.add(slide.class);

//     if (slide.exibitions == true && i % 2 != 0) {
//       newSlide.classList.add("owl--bottom");
//     }

//     newSlide.innerHTML = slide.html.replace("num", i);
//     document.querySelector(slide.sliderWrapper).append(newSlide);
//   }
// }

// loadSlides(swiperEventsSlide);
// loadSlides(swiperProductsSlide);

loadEvents();
loadProducts();
loadMainSlider();

function loadEvents() {
  for (let i = 1; i < 11; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper--events-slide");
    // newSlide.classList.add("js-scroll");
    // newSlide.classList.add("img-animation");
    if (i % 2 != 0) {
      newSlide.classList.add("owl--bottom");
    }
    newSlide.innerHTML = `<div class="owl-item-image js-scroll img-animation">
      <img src="img/show-slider-img-${i}.jpg" alt="owl-image-2" />
    </div>
    <div class="owl-item-info js-scroll top">
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

function loadMainSlider() {
  for (let i = 1; i < 5; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("flex-center");
    newSlide.classList.add("main--slider-slide");
    newSlide.innerHTML = `<img src="img/h1-rev-bg-img-${i}.jpg" alt="slide-image-1" />
    <div class="main--slider-slide-label section--title">
      <h3 class="js-scroll top-sm">History of art department</h3>
      <h1 class="slide-title title js-scroll top">discover beauty</h1>
      <button class="btn js-scroll top">
        <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="50" width="155" />
          <div class="btn-text">View more</div>
        </svg>
      </button>
    </div>`;
    document.querySelector(".main--slider-wrapper").append(newSlide);
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

  pagination: {
    el: "#swiper--main-pagination",
    clickable: true,
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
    clickable: true,
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
  if (element.id === "time-line--span-1") {
    element.classList.add("scrolled");
  } else if (element.classList.contains("time-line--span")) {
    setTimeout(() => {
      element.classList.add("scrolled");
    }, 700);
  } else if (element.classList.contains("img-animation")) {
    element.classList.add("scrolled");
  } else {
    setTimeout(() => {
      element.classList.add("scrolled");
    }, 300);
  }
};

function handleScrollAnimation(removeScrolledClass = false) {
  scrollElements.forEach((el) => {
    if (removeScrolledClass == true) el.classList.remove("scrolled");
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    }
  });
}

document.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

document.querySelectorAll(".main--slider-arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    handleScrollAnimation(true);
  });
});

document
  .querySelector(".navigation--ul")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav--link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

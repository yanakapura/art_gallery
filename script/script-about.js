const swiperTestimonialAbout = new Swiper(".section-testimonial__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: "#swiper-testimonial__pagination-about",
  },

  slidesPerView: 1,
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
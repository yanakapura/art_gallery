loadEvents();
function loadEvents() {
  for (let i = 1; i < 11; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
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

// if (current % 2 != 0) {
//   console.log(newElementId);
//   document.querySelector(`#${newElementId}`).classList.add("owl--bottom");
// }

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 4,
});

document.body.addEventListener("click", (e) => {
  // console.log(coords);
  // console.log("window height = ", window.innerHeight);
  // console.log();
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
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
      }, 600);
    } else {
      setTimeout(() => {
        element.classList.add("scrolled");
      }, 1100);
    }
  });
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 0.8)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

document.addEventListener("scroll", handleScrollAnimation);
document.addEventListener("DOMContentLoaded", handleScrollAnimation);

// function scrolling() {
//   const coords = document
//     .querySelector(".section--5")
//     .getBoundingClientRect().top;
//   console.log(coords);
//   // if (
//   //   window.innerHeight - coords >= 555 &&
//   //   window.innerHeight - coords <= 556
//   // ) {
//   //   document.querySelector(".time-line--span").style.animation = "3s top";
//   // }
// }

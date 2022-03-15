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

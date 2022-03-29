loadEvents();
loadProducts();
loadMainSlider();

function loadEvents() {
  for (let i = 1; i < 11; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper-events__slide");
    if (i % 2 != 0) {
      newSlide.classList.add("owl-bottom");
    }
    newSlide.innerHTML = `<div class="owl__image js-scroll img-animation">
      <img src="img/show-slider-img-${i}.jpg" alt="owl-image-2" />
    </div>
    <div class="owl__info js-scroll top">
      <p class="event__date">Mar 1 - Mar 3 2022</p>
      <h4 class="event__title">abstract wireframe</h4>
      <span></span>
      <a class="event__link" href="">View more</a>
    </div>`;
    document.querySelector(".owl__stage").append(newSlide);
  }
}

function loadProducts() {
  for (let i = 1; i < 12; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper-shop__slide");
    newSlide.innerHTML = `<div class="product__image">
    <img src="img/shop-img-8-768x768.jpg" alt="" />
    <div class="product__cart flex-center">
    <button class="btn">
          <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="50" width="155" />
            <div class="btn__text">Add to cart</div>
          </svg>
        </button>
        </div>
  </div>
  <h4 class="product__name">Linen bag</h4>
  <div class="product__rating">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  </div>
  <span class="product__price">29$</span>`;
    document.querySelector(".swiper-shop__wrapper").append(newSlide);
  }
}

function loadMainSlider() {
  for (let i = 1; i < 5; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("flex-center");
    newSlide.classList.add("main__slider-slide");
    newSlide.innerHTML = `<img src="img/h1-rev-bg-img-${i}.jpg" alt="slide-image-1" />
    <div class="main__slide-label section__title">
      <h3 class="js-scroll top-sm">History of art department</h3>
      <h1 class="slide__title title js-scroll top">discover beauty</h1>
      <button class="btn js-scroll top">
        <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="50" width="155" />
          <div class="btn__text">View more</div>
        </svg>
      </button>
    </div>`;
    document.querySelector(".main__slider-wrapper").append(newSlide);
  }
}

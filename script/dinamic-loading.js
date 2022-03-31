///////////////////////////////////////////////////////
///////////////// DATA //////////////////

const products = [
  {
    name: "musea book",
    code: "001",
    oldPrice: "",
    price: "17$",
    rating: 3,
    category: "Brochure",
    image: "img/shop/shop-img-1-768x768.jpg"
  },
  {
    name: "degas book",
    code: "002",
    oldPrice: "",
    price: "12$",
    rating: 4,
    category: "Souvenirs",
    image: "img/shop/shop-img-2-768x768.jpg"
  },
  {
    name: "linen bag",
    code: "003",
    oldPrice: "",
    price: "29$",
    rating: 0,
    category: "Lifestyle",
    image: "img/shop/shop-img-3-768x768.jpg"
  },
  {
    name: "brochure",
    code: "004",
    oldPrice: "",
    price: "15$",
    rating: 2,
    category: "Brochure",
    image: "img/shop/shop-img-4-768x768.jpg"
  },
  {
    name: "small rug",
    code: "005",
    oldPrice: "",
    price: "57$",
    rating: 4,
    category: "Museum",
    image: "img/shop/shop-img-5-768x768.jpg"
  },
  {
    name: "sculpture",
    code: "006",
    oldPrice: "30",
    price: "25$",
    rating: 3,
    category: "Lifestyle",
    image: "img/shop/shop-img-6-768x768.jpg"
  },
  {
    name: "mug",
    code: "007",
    oldPrice: "",
    price: "9$",
    rating: 2,
    category: "Souvenirs",
    image: "img/shop/shop-img-7-768x768.jpg"
  },
  {
    name: "winslow bag",
    code: "008",
    oldPrice: "",
    price: "17$",
    rating: 3,
    category: "Lifestyle",
    image: "img/shop/shop-img-8-768x768.jpg"
  },
  {
    name: "phone case",
    code: "009",
    oldPrice: "",
    price: "15$",
    rating: 2,
    category: "Museum",
    image: "img/shop/shop-img-9-768x768.jpg"
  },
  {
    name: "ALLEN CARDS",
    code: "010",
    oldPrice: "",
    price: "15$",
    rating: 4,
    category: "Brochure",
    image: "img/shop/shop-img-10-768x768.jpg"
  },
  {
    name: "art",
    code: "011",
    oldPrice: "",
    price: "950$",
    rating: 5,
    category: "Museum",
    image: "img/shop/shop-img-11-768x768.jpg"
  },
]


////////////////////////////////////////////
/////////////// FUNCTIONS ////////////////

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

function rating(prod) {
  let html = "";
  for(let i=0; i<prod.rating;i++) {
    html += "1";
  }
  return html.padEnd(5, "0").replaceAll("1",`<i class="fa-solid fa-star"></i>`).replaceAll("0",`<i class="fa-regular fa-star"></i>`)
}


function loadProducts() {
  for (let i = 0; i < products.length; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper-shop__slide");
    newSlide.innerHTML = `<div class="product__image">
    <img src="${products[i].image}" alt="" />
    <div class="product__cart flex-center">
    <button class="btn">
          <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="50" width="155" />
            <div class="btn__text">Add to cart</div>
          </svg>
        </button>
        </div>
  </div>
  <h4 class="product__name">${products[i].name}</h4>
  <div class="product__rating">
  ${rating(products[i])}
  </div>
  <span class="product__price">${products[i].price}</span>`;
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
function loadTestimonial() {
  for (let i = 1; i < 3; i++) {
    console.log("hello");
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("flex-center");
    newSlide.classList.add("swiper-testimonial__slide");
    newSlide.innerHTML = `<div class="testimonial__quotes">,,</div>
    <p class="testimonial__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Placeat tenetur nostrum molestias ad illo qui. Eaque qui
      molestiae architecto accusantium nostrum ut quas maiores, cum,
      commodi animi perspiciatis deserunt alias.
    </p>
    <h4 class="testimonial__author">Isabel Tillman</h4>
    <div class="testimonial__author-job">Visitor</div>`;
    document.querySelector(".swiper-testimonial__wrapper").append(newSlide);
  }
}

loadEvents();
loadProducts();
loadMainSlider();
loadTestimonial();


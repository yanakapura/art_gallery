///////////////////////////////////////////////////////
///////////////// DATA //////////////////

///////////////////////////////////////////////
////////// Main slider ////////////////

const mainSlides = [
  "discover beauty",
  "modern classics",
  "new exhibitions",
  "Hortense fiquet",
];

///////////////////////////////////////////////
////////// Testimonials ////////////////

const testimonials = [
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat tenetur nostrum molestias ad illo qui. Eaque quimolestiae architecto accusantium nostrum ut quas maiores, cum, commodi animi perspiciatis deserunt alias.",
    name: "Isabel Tillman",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus ea pariatur cumque, consectetur quia minus dolor aut expedita odit quam hic temporibus ab debitis accusantium illo, officia, corporis optio. Quasi sit aspernatur est maxime minima nihil ullam distinctio impedit.",
    name: "Charlie Floyd",
  },
];

//////////////////////////////////////////////
////////////// Products /////////////////

const products = [
  {
    name: "musea book",
    code: "1",
    oldPrice: "",
    price: "17$",
    rating: 3,
    category: "Brochure",
    image: "/img/shop/shop-img--1-768x768.jpg",
  },
  {
    name: "degas book",
    code: "2",
    oldPrice: "",
    price: "12$",
    rating: 4,
    category: "Souvenirs",
    image: "/img/shop/shop-img--2-768x768.jpg",
  },
  {
    name: "linen bag",
    code: "3",
    oldPrice: "",
    price: "29$",
    rating: 0,
    category: "Lifestyle",
    image: "/img/shop/shop-img--3-768x768.jpg",
  },
  {
    name: "brochure",
    code: "4",
    oldPrice: "",
    price: "15$",
    rating: 2,
    category: "Brochure",
    image: "/img/shop/shop-img--4-768x768.jpg",
  },
  {
    name: "small rug",
    code: "5",
    oldPrice: "",
    price: "57$",
    rating: 4,
    category: "Museum",
    image: "/img/shop/shop-img--5-768x768.jpg",
  },
  {
    name: "sculpture",
    code: "6",
    oldPrice: "30",
    price: "25$",
    rating: 3,
    category: "Lifestyle",
    image: "/img/shop/shop-img--6-768x768.jpg",
  },
  {
    name: "mug",
    code: "7",
    oldPrice: "",
    price: "9$",
    rating: 2,
    category: "Souvenirs",
    image: "/img/shop/shop-img--7-768x768.jpg",
  },
  {
    name: "winslow bag",
    code: "8",
    oldPrice: "",
    price: "17$",
    rating: 3,
    category: "Lifestyle",
    image: "/img/shop/shop-img--8-768x768.jpg",
  },
  {
    name: "phone case",
    code: "9",
    oldPrice: "",
    price: "15$",
    rating: 2,
    category: "Museum",
    image: "/img/shop/shop-img--9-768x768.jpg",
  },
  {
    name: "ALLEN CARDS",
    code: "10",
    oldPrice: "",
    price: "15$",
    rating: 4,
    category: "Brochure",
    image: "/img/shop/shop-img-10-768x768.jpg",
  },
  {
    name: "art",
    code: "11",
    oldPrice: "",
    price: "950$",
    rating: 5,
    category: "Museum",
    image: "/img/shop/shop-img-11-768x768.jpg",
  },
];

////////////////////////////////////////////
/////////////// FUNCTIONS ////////////////

function loadMainSlider() {
  for (let i = 0; i < mainSlides.length; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("flex-center");
    newSlide.classList.add("main__slider-slide");
    newSlide.innerHTML = `<img class="main-animation js-scroll ${
      i % 2 ? "mainSlide-to-right" : "mainSlide-to-left"
    }" src="img/h1-rev-bg-img-${i + 1}.jpg" alt="slide-image-${i + 1}" />
    <div class="main__slide-label section__title">
      <h3 class="main-animation js-scroll  top-sm">History of art department</h3>
      <h1 class="slide__title title main-animation js-scroll top">${
        mainSlides[i]
      }</h1>
      <button class="btn main-animation js-scroll top">
        <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="50" width="155" />
          <div class="btn__text flex-center">View more</div>
        </svg>
      </button>
    </div>`;
    document.querySelector(".main__slider-wrapper").append(newSlide);
  }
}

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
  for (let i = 0; i < prod.rating; i++) {
    html += "1";
  }
  return html
    .padEnd(5, "0")
    .replaceAll("1", `<i class="fa-solid fa-star"></i>`)
    .replaceAll("0", `<i class="fa-regular fa-star"></i>`);
}

function loadProducts() {
  for (let i = 0; i < products.length; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("swiper-shop__slide");
    newSlide.innerHTML = `<div class="product__image">
    <img src="${products[i].image}" alt="" />
    <div class="product__cart">
    <div class="product__cart-wrapper flex-center">
    <button class="btn">
          <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="50" width="155" />
            <div class="btn__text flex-center">Add to cart</div>
          </svg>
        </button>
        </div>
        </div>
  </div>
  <h4 class="product__name" data-product-code="${products[i].code}">${
      products[i].name
    }</h4>
  <div class="product__rating">
  ${rating(products[i])}
  </div>
  <span class="product__price">${products[i].price}</span>`;
    document.querySelector(".swiper-shop__wrapper").append(newSlide);
  }
}

function loadTestimonial() {
  for (let i = 0; i < testimonials.length; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("flex-center");
    newSlide.classList.add("swiper-testimonial__slide");
    newSlide.innerHTML = `<div class="testimonial__quotes">,,</div>
    <p class="testimonial__text">
      ${testimonials[i].text}
    </p>
    <h4 class="testimonial__author">${testimonials[i].name}</h4>
    <div class="testimonial__author-job">Visitor</div>`;
    document.querySelector(".swiper-testimonial__wrapper").append(newSlide);
  }
}

function loadProductPage() {
  const i = +localStorage.getItem("currentProduct") - 1;
  console.log(i);
  console.log(products[i]);
  document.querySelector("#product-page__image").src = products[i].image;
  document.querySelector("#product-page__title").textContent = products[i].name;
  document.querySelector(".section-product__rating").innerHTML = rating(
    products[i]
  );
  document.querySelector(".section-product__price").textContent =
    products[i].price;
  document.querySelector(".meta__sku").textContent = products[i].code.padStart(
    3,
    "0"
  );
  document.querySelector(".meta__category").textContent = products[i].category;
  document.querySelector(
    ".review__title"
  ).textContent = `2 review for ${products[i].name}`;
}

if (window.location.pathname.includes("index")) {
  loadEvents();
  loadProducts();
  loadMainSlider();
  loadTestimonial();

  document
    .querySelector(".swiper-shop__wrapper")
    .addEventListener("click", function (e) {
      console.log(e.target);
      if (e.target.classList.contains("product__name")) {
        const currentEl = e.target.dataset.productCode;
        localStorage.setItem("currentProduct", currentEl);
        console.log();
        window.location.href = "../pages/product-page.html";
      }
    });
} else if (window.location.pathname.includes("product")) {
  loadProductPage();
} else if (window.location.pathname.includes("about")) {
  loadTestimonial();
}

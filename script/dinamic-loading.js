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

let products = [];

async function getData() {
  let response = await fetch("http://localhost:5002/getData");
  let data = await response.json();

  return JSON.parse(data);
}

if (!window.location.pathname.includes("pages")) {
getData().then((data) => {
  products = data;
  loadProducts();

  const swiperShop = new Swiper(".swiper-shop", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: "#swiper-shop__pagination",
      clickable: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 3,

    breakpoints: {
      // when window width is >= 375px
      // 375: {
      //   slidesPerView:1,
      //   slidesPerGroup: 1
      // },
      // when window width is >= 576px
      375: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      // when window width is >= 768px
      630: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
});
}
// async function writeUnsorted(data) {
//   fetch("http://localhost:5002/writeUnsorted", {
//     headers: {
//       "Content-type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(data),
//   });
// }

////////////////////////////////////////////
/////////////// FUNCTIONS ////////////////

function loadMainSlider() {
  for (let i = 0; i < mainSlides.length; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.classList.add("flex-center");
    newSlide.classList.add("main__slider-slide");
    // newSlide.innerHTML = `<img class="main-animation js-scroll ${
    //   i % 2 ? "mainSlide-to-right" : "mainSlide-to-left"
    // }" src="https://yanakapura.github.io/art_gallery/img/h1-rev-bg-img-${i + 1}.jpg" alt="slide-image-${i + 1}" />
    // <div class="main__slide-label section__title">
    //   <h3 class="main-animation js-scroll  top-sm">History of art department</h3>
    //   <h1 class="slide__title title main-animation js-scroll top">${
    //     mainSlides[i]
    //   }</h1>
    //   <button class="btn main-animation js-scroll top">
    //     <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
    //       <rect class="shape" height="50" width="155" />
    //       <div class="btn__text flex-center">View more</div>
    //     </svg>
    //   </button>
    // </div>`;
    newSlide.innerHTML = `<img class="main-animation js-scroll ${
      i % 2 ? "mainSlide-to-right" : "mainSlide-to-left"
    }" src="../img/h1-rev-bg-img-${i + 1}.jpg" alt="slide-image-${i + 1}" />
    <div class="main__slide-label section__title">
      <h3 class="main-animation js-scroll  top-sm">History of art department</h3>
      <h1 class="slide__title title main-animation js-scroll top">${
        mainSlides[i]
      }</h1>
      <button class="btn main-animation js-scroll top">
        <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="50" width="155" />
          <div class="btn__text flex-center">Узнать больше</div>
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
    // newSlide.innerHTML = `<div class="owl__image js-scroll img-animation">
    //   <img src="https://yanakapura.github.io/art_gallery/img/show-slider-img-${i}.jpg" alt="owl-image-2" />
    // </div>
    // <div class="owl__info js-scroll top">
    //   <p class="event__date">Mar 1 - Mar 3 2022</p>
    //   <h4 class="event__title">abstract wireframe</h4>
    //   <span></span>
    //   <a class="event__link" href="">View more</a>
    // </div>`;
    newSlide.innerHTML = `<div class="owl__image js-scroll img-animation">
      <img src="../img/show-slider-img-${i}.jpg" alt="owl-image-2" />
    </div>
    <div class="owl__info js-scroll top">
      <p class="event__date">Mar 1 - Mar 3 2022</p>
      <h4 class="event__title">abstract wireframe</h4>
      <span></span>
      <a class="event__link" href="">Узнать больше</a>
    </div>`;
    document.querySelector(".owl__stage").append(newSlide);
  }
}

function rating(prod) {
  let html = "";
  if (!prod.rating) {
    return "";
  }
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
    <button class="btn btn__cart">
          <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="50" width="155" />
            <div class="btn__text flex-center">В корзину</div>
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
  <span class="product__price">${products[i].price} BYN</span>`;
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
  getData().then(products=>{
    const i = +localStorage.getItem("currentProduct") - 1;
    $("#product-page__image").attr("src", products[i].image);
    $("#product-page__title").text(products[i].name);
    $(".section-product__rating").html(rating(products[i]));
    $(".section-product__price").text(products[i].price + " BYN");
    $(".meta__sku").text(products[i].code.padStart(3, "0"));
    $(".meta__category").text(products[i].category);
    $(".review__title").text(`2 отзыва на ${products[i].name}`);
  })
}

if (!window.location.pathname.includes("pages")) {
  // if (window.location.pathname.includes("")) {
  loadEvents();
  loadProducts();
  loadMainSlider();
  loadTestimonial();

  document
    .querySelector(".swiper-shop__wrapper")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("product__name")) {
        openProductPage(e);
      }
    });
} else if (window.location.pathname.includes("product")) {
  loadProductPage();
} else if (window.location.pathname.includes("about")) {
  loadTestimonial();
}

function openProductPage(e) {
  const currentEl = e.target.dataset.productCode;
  localStorage.setItem("currentProduct", currentEl);
  console.log();
  window.location.href = !window.location.pathname.includes("pages")
    ? "pages/product-page.html"
    : "../pages/product-page.html";
}

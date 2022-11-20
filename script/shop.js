function loadProducts() {
  for (let i = 0; i < productsInfo.length; i++) {
    const newCart = document.createElement("li");
    newCart.classList = "shop__item product";
    newCart.innerHTML = `<div class="product__image">
      <img src="${productsInfo[i].image}" alt="" />
      <div class="product__cart">
      <div class="product__cart-wrapper flex-center">
      <button class="btn">
            <svg height="50" width="155" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="50" width="155" />
              <div class="btn__text flex-center">В корзину</div>
            </svg>
          </button>
          </div>
          </div>
    </div>
    <h4 class="product__name" data-product-code="${productsInfo[i].code}">${
      productsInfo[i].name
    }</h4>
    <div class="product__rating">
    ${rating(productsInfo[i])}
    </div>
    <span class="product__price">${productsInfo[i].price}</span>`;
    document.querySelector(".shop__list").append(newCart);
  }
}

loadProducts();

$(".product__name").click((e) => {
  openProductPage(e);
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".filter__slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #e5e5e5 ${percent1}% , #525252 ${percent1}% , #525252 ${percent2}%, #e5e5e5 ${percent2}%)`;
}

//////////////////////////////////////////////////////
//////////////////// Filter //////////////////////////

let category = "";
let tags = [];
let filteredProducts = [];

$("input[name='category']").click((e) => {
  category = e.target.value;
});

$(".filter__tags").click((e) => {
  const checkboxes = document.querySelectorAll("input[name='tags']");
  tags = [];
  for (tag of checkboxes) {
    if (tag.checked) {
      tags.push(tag.value);
    }
  }
});

$(".filter__btn").click((e) => {
  e.preventDefault();

  const priceFrom = sliderOne.value;
  const priceTo = sliderTwo.value;

  filterProducts = productsInfo
    .filter((product) => product.price >= priceFrom)
    .filter((product) => product.price <= priceTo);

  for (radio of document.querySelectorAll("input[type='radio']")) {
    if (radio.checked && radio.value !== 'all') {
      filterProducts = filterProducts.filter(
        (product) => product.category.toLowerCase() === category
      );
    }
  }
  if (tags.length !== 0) {
    for (tag of tags) {
      filterProducts = filterProducts.filter((product) =>
        product.tags.includes(tag)
      );
    }
  }

  productsInfo = filterProducts;
  if (filterProducts.length === 0) {
    document.querySelector(".shop__list").innerHTML =
      " <span></span><span>Ничего не найдено</span><span></span>";
  } else {
    document.querySelector(".shop__list").innerHTML = "";
    loadProducts();
  }
  productsInfo = products;
});

//////////////////////////////////////////////////////
//////////////////// Sorting //////////////////////////

$("#shop-sorting").on("change", () => {
  switch ($("#shop-sorting").val()) {
    case "default":
      productsInfo.sort((a, b) => {
        if (+a.code > +b.code) return 1;
        if (+a.code < +b.code) return -1;
      });
      break;
    case "popularity":
      productsInfo.sort((a, b) => {
        if (+a.popularity > +b.popularity) return -1;
        if (+a.popularity < +b.popularity) return 1;
      });
      break;
    case "rating":
      productsInfo.sort((a, b) => {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
      });
      break;
    case "price-low-to-high":
      productsInfo.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
      });
      break;
    case "price-high-to-low":
      productsInfo.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
      });
      break;

    default:
      break;
  }
  document.querySelector(".shop__list").innerHTML = "";
  loadProducts();
});

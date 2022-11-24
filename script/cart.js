const productsInCart = JSON.parse(localStorage.getItem("IN_CART")) || [];
console.log(productsInCart);

$(".btn__cart").click((e) => {
  e.preventDefault();

  const id = +localStorage.getItem("currentProduct");
  const number = +$("#input-number").val() || 1;
  let productToCart = {};

  if (productsInCart.every((product) => product.id !== id)) {
    productToCart = {
      id: id,
      number: number,
    };
    productsInCart.push(productToCart);
  } else {
    productsInCart.find((el) => el.id === id).number += number;
  }
  localStorage.setItem("IN_CART", JSON.stringify(productsInCart));
  changeCartCount();
});

function changeCartCount() {
  if (productsInCart.length === 0) {
    $(".cart__count").text(0);
    return;
  }
  const count = productsInCart
    .map((el) => el.number)
    .reduce((acc, cur) => acc + cur);
  $(".cart__count").text(count);
}

changeCartCount();
loadCart();

function loadCart() {
  let total = 0;

  $(".section-cart__list").html("");
  if (productsInCart.length === 0) {
    $(".section-cart__list").html("<span>В корзине нет товаров</span>");
  } else {
    for (cartProduct of productsInCart) {
      const product = products.find((el) => +el.code === cartProduct.id);
      console.log(product);
      const newItem = document.createElement("li");
      newItem.classList = "section-cart__item product";
      newItem.dataset.id = cartProduct.id;
      newItem.innerHTML = `
                <div class="product__image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="product__info">
                    <h3 class="product__name">${product.name}</h3>
                </div>
                <div class="product__price price">
                    <p class="price__per-one">${product.price} BYN</p>
                    <p class="price__number">x ${cartProduct.number}</p>
                    <h4 class="price__total">${
                      product.price * cartProduct.number
                    } BYN</h4> 
                </div>
                <span class='delete-from-cart'></span>
        `;
      $(".section-cart__list").append(newItem);
      total += product.price * cartProduct.number;
    }
  }
  $("#total-price").text(total + " BYN");
}

$(".delete-from-cart").click((e) => {
  const id = e.target.parentElement.dataset.id;
  const index = productsInCart.findIndex((el) => el.id === id);
  productsInCart.splice(index, 1);
  console.log(productsInCart);
  localStorage.setItem("IN_CART", JSON.stringify(productsInCart));
  loadCart();
  changeCartCount();
});

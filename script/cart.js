const productsInCart = JSON.parse(localStorage.getItem("IN_CART")) || [];
console.log(productsInCart);

if (window.location.href.includes("product-page")) {
  document.querySelector(".section-product__info").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains("btn__cart")) {
      addToCart(e)
    }
  })
} else if (window.location.href.includes("shop") || window.location.href.includes("index") ) {
  document.querySelector(".shop").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn__cart")) {
      addToCart(e)
    }
  })

}



function addToCart(e) {
  let id = 0;
  if (window.location.href.includes("product-page")) {
     id = +localStorage.getItem("currentProduct");
  } else {
     id = +e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.dataset.productCode;
    }
    const number = +$("#input-number").val() || 1;
    let productToCart = {};
    
    console.log(productsInCart);
    if (productsInCart.every((product) => product.id !== id)) {
    console.log(id);
    productToCart = {
      id: id,
      number: number,
    };
    productsInCart.push(productToCart);
  } else {
    id = +localStorage.getItem("currentProduct");
    productsInCart.find((el) => el.id === id).number += number;
  }
  localStorage.setItem("IN_CART", JSON.stringify(productsInCart));
  changeCartCount();

}
  // }
// });
// $(".btn__cart").click((e) => {
// }
// });

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

function loadCart() {
  getData().then((products) => {
    // loadCart();

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
  });
}

loadCart();

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-from-cart")) {
    console.log(e.target);
    const id = +e.target.parentElement.dataset.id;
    const index = productsInCart.findIndex((el) => el.id === id);
    productsInCart.splice(index, 1);
    console.log(productsInCart);
    localStorage.setItem("IN_CART", JSON.stringify(productsInCart));
    loadCart();
    changeCartCount();
  }
});
// $(".section-cart__item").click((e) => {
// $(".delete-from-cart").click((e) => {
//   console.log('here');
//   const id = e.target.parentElement.dataset.id;
//   const index = productsInCart.findIndex((el) => el.id === id);
//   productsInCart.splice(index, 1);
//   console.log(productsInCart);
//   localStorage.setItem("IN_CART", JSON.stringify(productsInCart));
//   loadCart();
//   changeCartCount();
// });

$("#btn-open-chechout").click(() => {
  $(".section-checkout").show();
  $("#btn-open-chechout").hide();
});

// .checkout__delivery

$("input[name='shipping']").click((e) => {
  if (e.target.id === "order-shipping-delivery") {
    $(".checkout__delivery").css("display", "flex");
  } else {
    $(".checkout__delivery").hide();
  }
});

import {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
} from "./homework.js";

let currencySymbol = "$";

// Draws product list
function drawProducts() {
  let productList = document.querySelector(".products");
  let productItems = "";
  products.forEach((element) => {
    productItems += `
      <div data-productId='${element.productId}'>
        <img src='${element.image}'>
        <h3>${element.name}</h3>
        <p>price: ${currencySymbol}${element.price}</p>
        <button class="add-to-cart">장바구니 담기</button>
      </div>
    `;
  });
  // use innerHTML so that products only drawn once
  productList.innerHTML = productItems;
}

// Draws cart
function drawCart() {
  let cartList = document.querySelector(".cart");
  // clear cart before drawing
  let cartItems = "";
  cart.forEach((element) => {
    let itemTotal = element.price * element.quantity;

    cartItems += `
      <div data-productId='${element.productId}'>
        <h3>${element.name}</h3>
        <p>price: ${currencySymbol}${element.price}</p>
        <p>quantity: ${element.quantity}</p>
        <p>total: ${currencySymbol}${itemTotal}</p>
        <button class="qup">+</button>
        <button class="qdown">-</button>
        <button class="remove">삭제</button>
      </div>
    `;
  });
  // use innerHTML so that cart products only drawn once
  cart.length
    ? (cartList.innerHTML = cartItems)
    : (cartList.innerHTML = "장바구니가 비었습니다.");
}

// Draws checkout
function drawCheckout() {
  let checkout = document.querySelector(".cart-total");
  checkout.innerHTML = "";

  // run cartTotal() from script.js
  let cartSum = cartTotal();

  let div = document.createElement("div");
  div.innerHTML = `<p>장바구니 총액: ${currencySymbol}${cartSum}`;
  checkout.append(div);
}

// Initialize store with products, cart, and checkout
drawProducts();
drawCart();
drawCheckout();

document.querySelector(".products").addEventListener("click", (e) => {
  let productId = e.target.parentNode.getAttribute("data-productId");
  productId *= 1;
  addProductToCart(productId);
  drawCart();
  drawCheckout();
});

// Event delegation used to support dynamically added cart items
document.querySelector(".cart").addEventListener("click", (e) => {
  // Helper nested higher order function to use below
  // Must be nested to have access to the event target
  // Takes in a cart function as an agrument
  function runCartFunction(fn) {
    let productId = e.target.parentNode.getAttribute("data-productId");
    productId *= 1;
    for (let i = cart.length - 1; i > -1; i--) {
      if (cart[i].productId === productId) {
        let productId = cart[i].productId;
        fn(productId);
      }
    }
    // force cart and checkout redraw after cart function completes
    drawCart();
    drawCheckout();
  }

  // check the target's class and run function based on class
  if (e.target.classList.contains("remove")) {
    // run removeProductFromCart() from script.js
    runCartFunction(removeProductFromCart);
  } else if (e.target.classList.contains("qup")) {
    // run increaseQuantity() from script.js
    runCartFunction(increaseQuantity);
  } else if (e.target.classList.contains("qdown")) {
    // run decreaseQuantity() from script.js
    runCartFunction(decreaseQuantity);
  }
});

document.querySelector(".pay").addEventListener("click", (e) => {
  e.preventDefault();

  // Get input cash received field value, set to number
  let amount = document.querySelector(".received").value;
  amount *= 1;

  // Set cashReturn to return value of pay()
  let cashReturn = pay(amount);

  let paymentSummary = document.querySelector(".pay-summary");
  let div = document.createElement("div");

  // If total cash received is greater than cart total thank customer
  // Else request additional funds
  if (cashReturn >= 0) {
    div.innerHTML = `
      <p>받은 금액: ${currencySymbol}${amount}</p>
      <p>돌려줄 금액: ${currencySymbol}${cashReturn}</p>
      <p>감사합니다! 🙏🏻</p>
    `;
  } else {
    // reset cash field for next entry
    document.querySelector(".received").value = "";
    div.innerHTML = `
      <p>받은 금액: ${currencySymbol}${amount}</p>
      <p>부족한 금액: ${cashReturn}$</p>
      <p>추가 결제가 필요합니다.</p>
      <hr/>
    `;
  }

  paymentSummary.append(div);
});

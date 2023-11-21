import {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  calculateCartTotal,
  pay,
} from "./homework.js";

const CURRENCY_SYMBOL = "￦";

const productsElement = document.querySelector(".products");
const cartElement = document.querySelector(".cart");
const payButtonElement = document.querySelector(".pay");

function drawProducts() {
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
      <div data-productId='${product.id}'>
        <img src='${product.image}'>
        <h3>${product.name}</h3>
        <p>price: ${CURRENCY_SYMBOL}${product.price}</p>
        <button class="add-to-cart">장바구니 담기</button>
      </div>
    `;
  });

  productsElement.innerHTML = productsHTML;
}

function drawCart() {
  let cartItems = "";

  cart.forEach((cartItem) => {
    const itemTotal = cartItem.price * cartItem.quantity;

    cartItems += `
      <div data-productId='${cartItem.id}'>
        <h3>${cartItem.name}</h3>
        <p>price: ${CURRENCY_SYMBOL}${cartItem.price}</p>
        <p>quantity: ${cartItem.quantity}</p>
        <p>total: ${CURRENCY_SYMBOL}${itemTotal}</p>
        <button class="up">+</button>
        <button class="down">-</button>
        <button class="remove">삭제</button>
      </div>
    `;
  });

  const cartItemsHTML = cart.length > 0 ? cartItems : "장바구니가 비었습니다.";

  cartElement.innerHTML = cartItemsHTML;
}

function drawCartTotal() {
  const cartTotalElement = document.querySelector(".cart-total");
  cartTotalElement.innerHTML = "";

  const cartTotal = calculateCartTotal();

  const div = document.createElement("div");
  div.innerHTML = `<p>장바구니 총액: ${CURRENCY_SYMBOL}${cartTotal}`;

  cartTotalElement.append(div);
}

function runCartFunction(e, func) {
  let productId = e.target.parentNode.dataset.productId;
  productId *= 1;

  for (let i = cart.length - 1; i > -1; i--) {
    if (cart[i].productId === productId) {
      let productId = cart[i].productId;
      func(productId);
    }
  }

  drawCart();
  drawCartTotal();
}

productsElement.addEventListener("click", (e) => {
  let productId = e.target.parentNode.dataset.productId;
  productId *= 1;
  addProductToCart(productId);
  drawCart();
  drawCartTotal();
});

cartElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    runCartFunction(e, removeProductFromCart);
  } else if (e.target.classList.contains("up")) {
    runCartFunction(e, increaseQuantity);
  } else if (e.target.classList.contains("down")) {
    runCartFunction(e, decreaseQuantity);
  }
});

payButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  const receivedElement = document.querySelector(".received");

  let receivedAmount = receivedElement.value;
  receivedAmount *= 1;

  const cashReturn = pay(receivedAmount);

  const paymentSummary = document.querySelector(".pay-summary");
  const div = document.createElement("div");

  if (cashReturn >= 0) {
    div.innerHTML = `
      <p>받은 금액: ${CURRENCY_SYMBOL}${receivedAmount}</p>
      <p>돌려줄 금액: ${CURRENCY_SYMBOL}${cashReturn}</p>
      <p>감사합니다! 🙏🏻</p>
    `;
  } else {
    receivedElement.value = "";

    div.innerHTML = `
      <p>받은 금액: ${CURRENCY_SYMBOL}${receivedAmount}</p>
      <p>부족한 금액: ${cashReturn}$</p>
      <p>추가 결제가 필요합니다.</p>
      <hr/>
    `;
  }

  paymentSummary.append(div);
});

drawProducts();
drawCart();
drawCartTotal();

const cart = require("../src/script/homework.js");

describe("장바구니 기능 테스트", () => {
  let product1 = cart.products[1];
  let cartArr = cart.cart;

  test("`addProductToCart` 함수는 상품 데이터 객체를 장바구니에 추가할 수 있어야 합니다.", () => {
    cart.addProductToCart(product1.productId);
    expect(product1.quantity).toEqual(1);
    expect(cartArr).toEqual([product1]);
  });

  test("`addProductToCart` 함수는 동일한 상품 데이터 객체를 장바구니에 두번 추가하지 않아야 합니다.", () => {
    cart.addProductToCart(product1.productId);
    expect(product1.quantity).toEqual(2);
    expect(cartArr).toEqual([product1]);
  });

  test("`increaseQuantity` 함수는 상품 수량을 증가할 수 있어야 합니다.", () => {
    cart.increaseQuantity(product1.productId);
    expect(product1.quantity).toEqual(3);
  });

  test("`increaseQuantity` 함수는 상품 수량을 추가로 증가할 수 있어야 합니다.", () => {
    cart.increaseQuantity(product1.productId);
    expect(product1.quantity).toEqual(4);
  });

  test("`decreaseQuantity` 함수는 상품 수량을 연속적으로 감소시킬 수 있어야 합니다.", () => {
    cart.decreaseQuantity(product1.productId);
    cart.decreaseQuantity(product1.productId);
    cart.decreaseQuantity(product1.productId);
    expect(product1.quantity).toEqual(1);
  });

  test("`decreaseQuantity` 함수는 상품 수량이 0으로 변경되면 장바구니에서 상품 데이터 객체를 삭제해야 합니다.", () => {
    cart.decreaseQuantity(product1.productId);
    expect(product1.quantity).toEqual(0);
    expect(cartArr).toEqual([]);
  });

  test("`removeProductFromCart` 함수는 장바구니에 상품이 1개일때, 상품 수량을 0으로 수정하고 장바구니 정보를 비워야 합니다.", () => {
    cart.addProductToCart(product1.productId);
    cart.removeProductFromCart(product1.productId);
    expect(product1.quantity).toEqual(0);
    expect(cartArr).toEqual([]);
  });
});

describe("결제하기 기능 테스트", () => {
  let product1 = cart.products[1];
  let product2 = cart.products[2];
  let cartArr = cart.cart;

  // Functiion get's grand total of cart
  function grandTotal() {
    let cartSum = 0;

    for (let i = 0; i < cartArr.length; i++) {
      let itemTotal = cartArr[i].quantity * cartArr[i].price;

      cartSum += itemTotal;
    }

    return cartSum;
  }

  test("`cartTotal` 함수는 장바구니의 총액을 계산해야 합니다.", () => {
    cart.addProductToCart(product1.productId);
    cart.addProductToCart(product2.productId);
    cart.increaseQuantity(product1.productId);
    expect(cart.cartTotal()).toEqual(grandTotal());
  });

  test("`pay` 함수는 결제해야 할 금액보다 큰 금액을 지불받았을 경우에 대처해야 합니다.", () => {
    expect(cart.pay(100000000000000)).toBeGreaterThan(grandTotal());
  });

  test("`pay` 함수는 결제해야 할 금액보다 적은 금액을 지불받았을 경우에 대처해야 합니다.", () => {
    cart.addProductToCart(product1.productId);
    cart.addProductToCart(product2.productId);
    expect(cart.pay(1)).toBeLessThan(grandTotal());
  });
});

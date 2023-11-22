const cart = [];

/*

  아래에 주어진 `products` 배열에 3개의 상품 데이터 객체를 만들어 추가하세요.
  각각의 상품 데이터 객체는 아래 5가지의 속성을 갖고 있어야 합니다.

  - name: 상품명 (문자열)
  - price: 상품 가격 (숫자)
  - quantity: 카트에 담긴 상품의 갯수 - 초기값은 0이어야 합니다. (숫자)
  - productId: 상품의 고유한 식별 아이디 (숫자)
  - image: 상품 이미지 주소 - "images/xxx.jpg" (url 문자열) 

*/
const products = [
  {
    name: "맥북 2030",
    price: 10000,
    quantity: 0,
    productId: 1,
    image: "images/macbook.jpg",
  },
  {
    name: "갤럭시 999",
    price: 8000,
    quantity: 0,
    productId: 2,
    image: "images/samsung.jpg",
  },
  {
    name: "테슬라 XYZ",
    price: 50000,
    quantity: 0,
    productId: 3,
    image: "images/tesla.jpg",
  },
];

/*

  아래에 주어진 `addProductToCart` 함수의 내용을 다음과 같이 작성하세요.

  - `addProductToCart` 함수는 `productId`를 인수(argument)로 받습니다.
  - `addProductToCart` 함수는 `productId`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `addProductToCart` 함수는 해당 상품의 `quantity`를 증가시켜야 합니다.
  - `addProductToCart` 함수는 만약 해당 상품이 `cart` 배열에 아직 담겨있지 않은 상품이라면, `cart` 배열에 해당 상품 객체를 추가해야 합니다.

*/
function addProductToCart(productId) {
  // 버전 1: forEach + push
  // let product = null;
  // let isProductInCart = false;
  // products.forEach(function (item) {
  //   if (item.productId === productId) {
  //     item.quantity += 1;
  //     product = item;
  //   }
  // });
  // cart.forEach(function (item) {
  //   if (item.productId === productId) {
  //     isProductInCart = true;
  //   }
  // });
  // if (!isProductInCart) {
  //   cart.push(product);
  // }

  // 버전 2: find + indexOf + push
  const product = products.find(function (item) {
    return item.productId === productId;
  });

  if (product) {
    product.quantity += 1;

    const isProductInCart = cart.indexOf(product) !== -1;

    if (!isProductInCart) {
      cart.push(product);
    }
  }
}

/*

  아래에 주어진 `increaseQuantity` 함수의 내용을 다음과 같이 작성하세요.

  - `increaseQuantity` 함수는 `productId`를 인수(argument)로 받습니다.
  - `increaseQuantity` 함수는 `productId`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `increaseQuantity` 함수는 해당 상품의 `quantity`를 증가시켜야 합니다.

*/
function increaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity += 1;
    }
  }
}

/*

  아래에 주어진 `decreaseQuantity` 함수의 내용을 다음과 같이 작성하세요.

  - `decreaseQuantity` 함수는 `productId`를 인수(argument)로 받습니다.
  - `decreaseQuantity` 함수는 `productId`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `decreaseQuantity` 함수는 해당 상품의 `quantity`를 감소시켜야 합니다.

*/
function decreaseQuantity(productId) {
  for (const product of products) {
    if (product.productId === productId) {
      product.quantity -= 1;
      if (product.quantity === 0) {
        removeProductFromCart(productId);
      }
    }
  }
}

/*

  아래에 주어진 `removeProductFromCart` 함수의 내용을 다음과 같이 작성하세요.

  - `removeProductFromCart` 함수는 `productId`를 인수(argument)로 받습니다.
  - `removeProductFromCart` 함수는 `productId`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `removeProductFromCart` 함수는 해당 상품의 `quantity`를 0으로 수정해야 합니다.
  - `removeProductFromCart` 함수는 해당 상품 데이터 객체를 `cart` 배열에서 삭제해야 합니다.

*/
function removeProductFromCart(productId) {
  // 버전 1: forEach + splice
  // let index = -1;
  // cart.forEach(function (item, i) {
  //   if (item.productId === productId) {
  //     index = i;
  //   }
  // });
  // products.forEach(function (item) {
  //   if (item.productId === productId) {
  //     item.quantity = 0;
  //   }
  // });
  // if (index !== -1) {
  //   cart.splice(index, 1);
  // }

  // 버전 2: find + indexOf + splice
  const product = products.find(function (item) {
    return item.productId === productId;
  });

  if (product) {
    const itemIndex = cart.indexOf(product);

    if (itemIndex !== -1) {
      product.quantity = 0;
      cart.splice(itemIndex, 1);
    }
  }
}

/*

  아래에 주어진 `cartTotal` 함수의 내용을 다음과 같이 작성하세요.

  - `cartTotal` 함수는 전달받는 인수(argument)가 없습니다.
  - `cartTotal` 함수는 `products` 배열의 모든 상품 데이터 객체들을 이용해 총 결제 금액을 계산해야 합니다. (상품 단가 * 수량)
  - `cartTotal` 함수는 총 결제해야 할 금액을 반환(return)해야 합니다.

*/
function cartTotal() {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantity * cart[i].price;
  }

  return totalPrice;
}

/*

  아래에 주어진 `pay` 함수의 내용을 다음과 같이 작성하세요.

  - `pay` 함수는 `amount`라는 숫자를 인수(argument)로 받습니다.
  - `amount`는 고객이 지불한 금액입니다.
  - `pay` 함수는 고객이 지불한 금액이 결제해야 할 금액보다 많으면 양의 정수로 금액을 반환합니다.
  - `pay` 함수는 결제해야 할 금액이 고객이 지불한 금액보다 많으면 음의 정수로 금액을 반환합니다.

  * 힌트: `cartTotal` 함수를 활용해보세요.

*/
function pay(amount) {
  const totalPrice = cartTotal();
  const diff = amount - totalPrice;

  return diff;
}

/*

  최종적으로 이 프로젝트가 성공적으로 완성되었는지 확인하기 위해,
  README.md 파일의 `테스트 실행하기` 파트에 따라 테스트를 실행하고,
  모든 테스트가 성공적으로 통과되는지 확인해보세요.

*/

export {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
};

const cart = [];

/*

  * 미션 #1

  (미션 1은 이미 완성되어 있습니다. 여러분의 상품을 더 많이 추가해보세요.)

  아래에 주어진 `products` 배열에 3개의 상품 데이터 객체를 만들어 추가하세요.
  각각의 상품 데이터 객체는 아래 5가지의 속성을 갖고 있어야 합니다.

  - name: 상품명 (문자열)
  - price: 상품 가격 (숫자)
  - quantity: 카트에 담긴 상품의 갯수 - 초기값은 0이어야 합니다. (숫자)
  - id: 상품의 고유한 식별 아이디 (숫자)
  - image: 상품 이미지 주소 - "images/xxx.jpg" (url 문자열) 

*/
const products = [
  {
    name: "맥북 2030",
    price: 10000,
    quantity: 0,
    id: 1,
    image: "images/macbook.jpg",
  },
  {
    name: "갤럭시 999",
    price: 8000,
    quantity: 0,
    id: 2,
    image: "images/samsung.jpg",
  },
  {
    name: "테슬라 XYZ",
    price: 50000,
    quantity: 0,
    id: 3,
    image: "images/tesla.jpg",
  },
];

/*

  * 미션 #2

  아래에 주어진 `addProductToCart` 함수의 내용을 다음과 같이 작성하세요.

  - `addProductToCart` 함수는 상품의 `id`를 인수(argument)로 받습니다.
  - `addProductToCart` 함수는 상품의 `id`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `addProductToCart` 함수는 해당 상품의 `quantity`를 증가시켜야 합니다.
  - `addProductToCart` 함수는 만약 해당 상품이 `cart` 배열에 아직 담겨있지 않은 상품이라면, `cart` 배열에 해당 상품 객체를 추가해야 합니다.

*/
function addProductToCart(productId) {
  // TODO..
}

/*

  * 미션 #3

  아래에 주어진 `increaseQuantity` 함수의 내용을 다음과 같이 작성하세요.

  - `increaseQuantity` 함수는 상품의 `id`를 인수(argument)로 받습니다.
  - `increaseQuantity` 함수는 상품의 `id`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `increaseQuantity` 함수는 해당 상품의 `quantity`를 증가시켜야 합니다.

*/
function increaseQuantity(productId) {
  // TODO..
}

/*

  * 미션 #4

  아래에 주어진 `decreaseQuantity` 함수의 내용을 다음과 같이 작성하세요.

  - `decreaseQuantity` 함수는 상품의 `id`를 인수(argument)로 받습니다.
  - `decreaseQuantity` 함수는 상품의 `id`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `decreaseQuantity` 함수는 해당 상품의 `quantity`를 감소시켜야 합니다.

*/
function decreaseQuantity(productId) {
  // TODO..
}

/*

  * 미션 #5

  아래에 주어진 `removeProductFromCart` 함수의 내용을 다음과 같이 작성하세요.

  - `removeProductFromCart` 함수는 상품의 `id`를 인수(argument)로 받습니다.
  - `removeProductFromCart` 함수는 상품의 `id`를 이용하여 `products` 배열에서 상품 정보를 찾아야 합니다.
  - `removeProductFromCart` 함수는 해당 상품의 `quantity`를 0으로 수정해야 합니다.
  - `removeProductFromCart` 함수는 해당 상품 데이터 객체를 `cart` 배열에서 삭제해야 합니다.

*/
function removeProductFromCart(productId) {
  // TODO..
}

/*

  * 미션 #6

  아래에 주어진 `calculateCartTotal` 함수의 내용을 다음과 같이 작성하세요.

  - `calculateCartTotal` 함수는 전달받는 인수(argument)가 없습니다.
  - `calculateCartTotal` 함수는 `products` 배열의 모든 상품 데이터 객체들을 이용해 총 결제 금액을 계산해야 합니다. (상품 단가 * 수량)
  - `calculateCartTotal` 함수는 총 결제해야 할 금액을 반환(return)해야 합니다.

*/
function calculateCartTotal() {
  // TODO..
}

/*

  * 미션 #7

  아래에 주어진 `pay` 함수의 내용을 다음과 같이 작성하세요.

  - `pay` 함수는 `amount`라는 숫자를 인수(argument)로 받습니다.
  - `amount`는 고객이 지불한 금액입니다.
  - `pay` 함수는 고객이 지불한 금액이 결제해야 할 금액보다 많으면 양의 정수로 금액을 반환합니다.
  - `pay` 함수는 결제해야 할 금액이 고객이 지불한 금액보다 많으면 음의 정수로 금액을 반환합니다.

  * 힌트: `calculateCartTotal` 함수를 활용해보세요.

*/
function pay(amount) {
  // TODO..
}

export {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  calculateCartTotal,
  pay,
};

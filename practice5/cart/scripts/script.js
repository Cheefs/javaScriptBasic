/* Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
   Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
     a - Пустая корзина должна выводить строку «Корзина пуста»;
     b - Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

var products = [
    {
        productName: 'Pants',
        productPrice: 100,
        productCount: 4
    },
    {
        productName: 'Hats',
        productPrice: 70,
        productCount: 1
    },
    {
        productName: 'Shirts',
        productPrice: 200,
        productCount: 10
    },
    {
        productName: 'Socks',
        productPrice: 30,
        productCount: 5
    },
];

function countBasketPrice(products) {
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++){
        totalPrice += products[i].productPrice * products[i].productCount;
    }
    return totalPrice;
}

var $cart = document.getElementById('cart');
    $cart.classList.add('cart');
var $cartText = document.createElement('h1');

if ( products.length > 0 ) {
    $cartText.textContent = '«В корзине товаров: '+ products.length + '  на сумму '+ countBasketPrice(products) + ' рублей».';
} else {
    $cartText.textContent = 'Корзина пуста';
}

$cart.appendChild($cartText);
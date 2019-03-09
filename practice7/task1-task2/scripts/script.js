// Реализовать страницу корзины:
//     Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя сообщение «Корзина пуста».
// На странице корзины:
//      Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
//      Сделать эти поля сворачиваемыми;
//      Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.

var CUREENCY = 'p';
var DELETE = 0;
var ADD = 1;
var REMOVE = 2;

var activeIndex = 0;

var inCartProductsLists = [
    {
        id: 0,
        name: 'Hat',
        price: 500,
        photo: 'hphoto',
        total: 1,
    },
    {
        id: 1,
        name: 'Pants',
        price: 1000,
        photo: 'pphoto',
        total: 1,
    },
    {
        id: 2,
        name: 'Socs',
        price: 100,
        photo: 'sphoto',
        total: 1,
    },
    {
        id: 3,
        name: 'T-shirt',
        price: 250,
        photo: 'T-photo',
        total: 1,
    },
    {
        id: 4,
        name: 'gloves',
        price: 1000,
        photo: 'gphoto',
        total: 1,
    },
    {
        id: 5,
        name: 'boots',
        price: 5000,
        photo: 'bphoto',
        total: 1,
    },
    {
        id: 6,
        name: 'watch',
        price: 4300,
        photo: 'wphoto',
        total: 1,
    },
    {
        id: 7,
        name: 'jacket',
        price: 8000,
        photo: 'jphoto',
        total: 1,
    },


];

var $btn = document.getElementById('btnNext');
$btn.addEventListener('click',handlerNextClick);
var $accordion = document.getElementById('accordion');
$accordion.addEventListener('click', handlerAccordionClick);
var $cartItems = document.getElementById('cart-items');
$cartItems.addEventListener('click', handlerCountClick);

var $itemsList = document.getElementsByClassName('main-container');

var $priceBlock = document.getElementById('cart-price');
$priceBlock.textContent = 'Корзина пуста';

function handlerNextClick() {
    if (activeIndex < $itemsList.length - 1) {
        $itemsList[activeIndex++].classList.remove('expand');
        $itemsList[activeIndex].classList.add('expand');
    }
}

function handlerAccordionClick(e) {
    if (e.target.classList.contains('item__h3')) {
        activeIndex = +e.target.getAttribute('data-id');
        for (var i = 0; i < $itemsList.length; i++) {
            if ($itemsList[i].classList.contains('expand') && i !== activeIndex) {
                 $itemsList[i].classList.toggle('expand');
            }
        }
        e.target.nextElementSibling.classList.toggle('expand');
    }
}

reloadCart($cartItems);
function handlerCountClick(e) {
    if (e.target.classList.contains('btn')) {
        var id = e.target.parentNode.parentNode.getAttribute('data-id');
        if (e.target.classList.contains('btn_more')) {
            inCartProductsLists = changeCartItemsValue(inCartProductsLists, id, ADD);
        } else if (e.target.classList.contains('btn_less')) {
            inCartProductsLists = changeCartItemsValue(inCartProductsLists, id, REMOVE);
        } else {
            console.log('click');
            inCartProductsLists = changeCartItemsValue(inCartProductsLists, id, DELETE);
        }
        reloadCart($cartItems);
    }
}

function changeCartItemsValue(items, id , mode) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === +id) {
            if (mode === ADD) {
                items[i].total++;
            } else if (mode === REMOVE) {
                if (items[i].total > 1) {
                    inCartProductsLists[i].total--;
                }
            } else {
                inCartProductsLists.splice(i, 1);
            }
        }
    }
    return items;
}

function reloadCart($cart) {
    $cart.innerHTML = '';
    addProductsToCart($cart);
    printCartPrice($priceBlock, inCartProductsLists);
}

function addProductsToCart($container) {
    for (var i = 0; i < inCartProductsLists.length; i++) {
        var $template = document.getElementById('cartProductTemplate').children[0].cloneNode(true);
        $template.setAttribute('data-id', inCartProductsLists[i].id);
        $template.getElementsByClassName('product__photo')[0].textContent = inCartProductsLists[i].photo;
        $template.getElementsByClassName('product_price')[0].textContent = inCartProductsLists[i].price + ' ' + CUREENCY;
        $template.getElementsByClassName('product_name')[0].textContent = inCartProductsLists[i].name;
        $template.getElementsByClassName('count')[0].textContent = inCartProductsLists[i].total;
        $container.appendChild( $template);
    }
    return $container;
}

function printCartPrice($priceBlock, items) {
    if (items.length > 0) {
        var price = 0;
        var total = 0;
        $priceBlock.innerHTML = '';
        for (var i = 0; i < items.length; i++) {
            price += items[i].price * items[i].total;
            total += items[i].total;
        }
        $priceBlock.textContent = 'Товаров ' + total + ' сумма: ' + price +' р';
    } else {
        $priceBlock.textContent = 'Корзина пуста';
    }
}
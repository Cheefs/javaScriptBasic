var DELETE = 0;
var ADD = 1;
var REMOVE = 2;

var inCartProductsLists = [];

var $catalog = document.getElementById('catalog');
$catalog.addEventListener('click', handlerBuyClick);
var $cartItems = document.getElementById('cart-items');
$cartItems.addEventListener('click', handlerCountClick);

var $priceBlock = document.getElementById('cart-price');
$priceBlock.textContent = 'Корзина пуста';

function handlerBuyClick(e) {
   var productObj = {};
   var exists = false;
    if (e.target.classList.contains('product__button') && e.target.parentElement.classList.contains('product')) {
        var $product = e.target.parentElement;
        var $productFieldsList = e.target.parentElement.children;

        for (var i = 0; i < $productFieldsList.length; i++) {
            // проверим не существует ли элемента с таким же id
            if ($productFieldsList[i].classList.contains('product__photo') || $productFieldsList[i].classList.contains('product__desc')) {
                for (var j = 0; j < inCartProductsLists.length; j++) {
                    if (inCartProductsLists[j].id === +$product.getAttribute('data-id')) {
                        inCartProductsLists[j].total = inCartProductsLists[j].total + 1;
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    var $elements = $productFieldsList[i].children;
                    for (var k = 0; k < $elements.length; k++) {
                        if ($elements[k].classList.contains('product_price')) {
                            productObj.price = $elements[k].children[1].textContent;
                        } else if ($elements[k].classList.contains('photo')) {
                            productObj.photo = $elements[k].textContent;
                        } else {
                            productObj.name = $elements[k].textContent;
                        }
                    }
                    productObj.id = +$product.getAttribute('data-id');
                    productObj.total = 1;
                } else {
                    break;
                }
            }
        }
        if (Object.keys(productObj).length !== 0) {
            inCartProductsLists.push(productObj);
        }
        reloadCart($cartItems);
    }
}

function handlerCountClick(e) {
    if (e.target.classList.contains('btn')) {
        var id = e.target.parentNode.parentNode.getAttribute('data-id');
        if (e.target.classList.contains('btn_more')) {
            inCartProductsLists = changeCartItemsValue(inCartProductsLists, id, ADD);
        } else if (e.target.classList.contains('btn_less')) {
            inCartProductsLists = changeCartItemsValue(inCartProductsLists, id, REMOVE);
        } else {
            inCartProductsLists = changeCartItemsValue(inCartProductsLists, id, DELETE);
        }
        reloadCart($cartItems);
    }
}

function changeCartItemsValue(items, id , mode) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === +id) {
            if (mode === ADD) {
                console.log(i);
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
        $container.appendChild( fillCart(inCartProductsLists[i]));
    }
    return $container;
}

function fillCart(item) {
    var $container = document.createElement('div');
        $container.classList.add('in-cart-product');
        $container.setAttribute('data-id', item.id);

    var $productPhoto = document.createElement('div');
        $productPhoto.classList.add('product__photo');
        $productPhoto.textContent = item.photo;

    var $productDesc = document.createElement('div');
        $productDesc.classList.add('product__desc');

    var $productName = document.createElement('div');
        $productName.classList.add('product_name');
        $productName.textContent = item.name;
    var $productPrice = document.createElement('div');
        $productPrice.classList.add('product_price');
        $productPrice.textContent = item.price + ' ' + CUREENCY; // данная константа берется из скрипта каталога

    var $productCount = document.createElement('div');
        $productCount.classList.add('product_count');
        $productCount.textContent = item.total;
    var $btnUp = document.createElement('div');
        $btnUp.classList.add('btn', 'btn_more');
    var $btnDown = document.createElement('div');
        $btnDown.classList.add('btn', 'btn_less');

    var $btnDelete = document.createElement('div');
        $btnDelete.classList.add('btn', 'btn_delete');
        $btnDelete.innerHTML = '&times;';

        $productCount.appendChild($btnDelete);
        $productCount.appendChild($btnUp);
        $productCount.appendChild($btnDown);

        $productDesc.appendChild($productName);
        $productDesc.appendChild($productPrice);

        $container.appendChild($productPhoto);
        $container.appendChild($productDesc);
        $container.appendChild($productCount);

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
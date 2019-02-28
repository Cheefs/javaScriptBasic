// * Сделать так, чтобы товары в каталоге выводились при помощи JS:
//     a - Создать массив товаров (сущность Product);
//     б - При загрузке страницы на базе данного массива генерировать вывод из него.
//          HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

var CUREENCY = 'p'; // обозначение валюты

var productsList = [
    {
        name: 'Hat',
        price: 500,
        photo: 'Hat',
    },
    {
        name: 'Pants',
        price: 1000,
        photo: 'Pants',
    },
    {
        name: 'Socs',
        price: 100,
        photo: 'Socs',
    },
    {
        name: 'T-shirt',
        price: 250,
        photo: 'T-shirt',
    },
    {
        name: 'gloves',
        price: 1000,
        photo: 'gloves',
    },
    {
        name: 'boots',
        price: 5000,
        photo: 'boots',
    },
    {
        name: 'watch',
        price: 4300,
        photo: 'watch',
    },
    {
        name: 'jacket',
        price: 8000,
        photo: 'jacket',
    },
    {
        name: 'Hat',
        price: 500,
        photo: 'Hat',
    },
    {
        name: 'Pants',
        price: 1000,
        photo: 'Pants',
    },
];

var $catalog = document.getElementById('catalog');
var $container = document.createElement('div');
    $container.classList.add('container');

    for (var i = 0; i < productsList.length; i++) {
       $container.appendChild(createProcuct());
    }

    $catalog.appendChild($container);


function createProcuct() {
    var $product = document.createElement('div');
        $product.classList.add('product');
        $product.appendChild(createPhoto());
        $product.appendChild(createDesc());
    return $product;
}

function createPhoto() {
   var $photoBlock = document.createElement('div');
        $photoBlock.classList.add('product__photo');

   var $photo = document.createElement('div');
       $photo.classList.add('photo');
       $photo.textContent = productsList[i].photo;
       $photoBlock.appendChild($photo);

   return $photoBlock;
}

function createDesc() {
    var $descBlock = document.createElement('div');
        $descBlock.classList.add('product__desc');
        $descBlock.appendChild(createProductName());
        $descBlock.appendChild(createProductPrice());

    return $descBlock;
}

function createProductName() {
    var $productName = document.createElement('div');
        $productName.classList.add('product_name');
        $productName.textContent = productsList[i].name;

    return $productName;
}

function createProductPrice() {
    var $priceBlock = document.createElement('div');
        $priceBlock.classList.add('product_price');

    var $text = document.createElement('div');
        $text.classList.add('text');
        $text.textContent = 'price';
        $priceBlock.appendChild($text);

    var $price = document.createElement('div');
        $price.classList.add('price');
        $price.textContent = productsList[i].price + ' ' + CUREENCY;

        $priceBlock.appendChild($price);

    return $priceBlock
}


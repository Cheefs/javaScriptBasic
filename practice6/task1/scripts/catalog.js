
var CUREENCY = 'p'; // обозначение валюты

var productsList = [
    {
        name: 'Hat',
        price: 500,
        photo: 'hphoto',
    },
    {
        name: 'Pants',
        price: 1000,
        photo: 'pphoto',
    },
    {
        name: 'Socs',
        price: 100,
        photo: 'sphoto',
    },
    {
        name: 'T-shirt',
        price: 250,
        photo: 'T-photo',
    },
    {
        name: 'gloves',
        price: 1000,
        photo: 'gphoto',
    },
    {
        name: 'boots',
        price: 5000,
        photo: 'bphoto',
    },
    {
        name: 'watch',
        price: 4300,
        photo: 'wphoto',
    },
    {
        name: 'jacket',
        price: 8000,
        photo: 'jphoto',
    },

];

var $catalog = document.getElementById('catalog');
var $container = document.createElement('div');
    $container.classList.add('container');

    for (var i = 0; i < productsList.length; i++) {
       $container.appendChild(createProcuct(i));
    }

    $catalog.appendChild($container);


function createProcuct(num) {
    var $product = document.createElement('div');
        $product.classList.add('product');
        $product.setAttribute('data-id', num);
        $product.appendChild(createPhoto());
        $product.appendChild(createDesc());
    var $button = document.createElement('div');
        $button.textContent = 'add to cart';
        $button.classList.add('product__button');

        $product.appendChild($button);
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
        $price.textContent = productsList[i].price;

    var $currency = document.createElement('div');
        $currency.classList.add('price');
        $currency.textContent = CUREENCY;

        $priceBlock.appendChild($price);
    $priceBlock.appendChild($currency);

    return $priceBlock
}


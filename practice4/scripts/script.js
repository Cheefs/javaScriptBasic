
main();

function main(){
    var choise = prompt('1 - для проверки роботы задачи №1(число от 0 до 999) \n2 - Для проверки задачи №2 (подсчет стоимости корзины) \n0 - для выхода');
    if(!isNaN(choise) && choise > 0 && choise < 3) {
        if(+choise === 1){
            numberAsObjeсt();
        } else if(+choise === 2) {
            basket();
        }
    } else {
        if(+choise !== 0 ){
            alert('Вы ввели неверное значение!');
            main();
        }
    }
}

//#region Задача 1
/*
    1)  Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
    в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function numberAsObjekt(){
    var number = prompt('Введите число от 0 до 999');
    if(!isNaN(number) && number >= 0){
        var numberObj = {};
        numberObj = convertToObjekt(numberObj, +number); 
        console.log(numberObj)
        if(Object.keys(numberObj).length  > 0){
            alert ('Введенное число: '+number +'\nДанное число содержит \nСотни : '+ numberObj.hundredеhs +'; Десятки: ' + numberObj.tens +  '; Единици: '+ numberObj.units);
        }
    }else{
        alert('Введенно неверное значение, значение должно быть "числом" и находится в диапазоне от 0 до 999!');
        numberAsObjekt();
    }
}

function convertToObjekt(obj, number){
    if ( !(number > 999)){
        obj.units = takeLastNumber(number);
        obj.tens = takeLastNumber(Math.floor(number /10));
        obj.hundredеhs = takeLastNumber(Math.floor(number/100));
    }else {
        console.log('Данное число привышает 999');
    }
    return obj;
}

function takeLastNumber(number){
    if( number % 10 !== 0 ){
        return number % 10;
    }else {
        return number;
    }
}
//#endregion 


//#region Задача 2
/*
    2) Продолжить работу с интернет-магазином:
    В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    Реализуйте такие объекты.
    Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
function basket (){
    var basket = [
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
   alert ('Полная стоимость товаров в корзине: '+ countBasketPrice(basket) );
}

function countBasketPrice(basket){
    var totalPrice = 0;
    for(var i = 0; i < basket.length; i++ ){
        totalPrice += basket[i].productPrice * basket[i].productCount;
    }
    return totalPrice;
}

//#endregion


//#region Задача 3
/*
    3) * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, 
    чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/

// Сущность продукта должна быть единой для всех типов товаров, независимо от категории, пола и тд
var product = {
    name: 'Name', // просто наименование товара
    photo: 'Photo', // имя файла фотографии / либо ссылка на нее
    type: 'Type', // тип товара (куртки, футболки и тд) для разделения их по категориям
    price: 'Price', // Цена товара
    sex: 'Sex', // Свойство будет как флаг разделить товар, в соответствии с полом

    params: { // Дополнительные параметры товара, например для одежды (для фильтров в интернет маганизе, и сортировок)
        matetial: 'material', // материал изготовления
        size: 'size', // размер одежды
        color: 'color',
        brand: 'Brand', // Фирма изготовитель товара
        season: 'season' // Еще будет необходимо нам разделять товары по сезонам
    },
    setShortDesc: function(){ // Установить короткое описание товара в зависимости от его параметров
        return ('Изготовитель: '+ this.params.brand + ', Материал изготовления: '+ this.params.matetial);
    },
    sameProducts: function(){
        // Возможно прийдется хранить функцию, которая будет подбирать для клиента подобные товары ( незнаю нужно ли это оставлять в обьекте, и
        // покачто немогу представить реализацию на js, и нужно ли выполнять данное действие на стороне клиента, или всеже решить это на стороне сервера )
    }
}
//#endregion

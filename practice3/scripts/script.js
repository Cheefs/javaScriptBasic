
main(); 

function main(){
    var choise = prompt('Выберите задачу \n 1 - С помощью цикла while вывести все простые числа в промежутке от 0 до 100.'
    +'\n 2 - Подсчет стоимости корзины \n 3 - *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла' 
    + '\n 4 - Нарисовать пирамиду с помощью console.log \n Для выхода введите 0 или нажмите "Отмена"');
    if(!isNaN(choise)){
        switch (+choise) {
            case 0:
                break;
            case 1: 
                simpleNumber();
                break;
            case 2: 
                var goods = [['shirt', 100, 10],['hat', 50, 3], ['pants', 150, 3], ['socs', 30, 4]]; 
                countBasketPrice(goods);
                break;
            case 3:
                numbers();
                break;
            case 4: 
                writePiramid();
                break;
            default:
                alert('Вы ввели не верный номер, попробуйте еще раз');
                main();
                break;
        }
    }else{
        alert('Вы ввели не число! Попробуйте еще раз');
        main();
    }
}

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function simpleNumber() {
    var str ='';
    alert(collectSimpleNumbers(str));
}

function collectSimpleNumbers(str){
    var i = 0;
    while(i < 100){
        if (i > 1 && checkNumber(i)){
            str += i + ' '; 
        }
        i++;
    }
    return str;
}

// функция проверки простоты числа
function checkNumber(number){
   var j = 2;
   if(number > 1){
        while( j < number){
            if( !divide(number, j) ){
                return false;
            }
            j++;
        }
   }
    return true;
}

function divide(number, divader){
    if( number % divader === 0) {
        return false;  
    }
    return true;
}

/*2. С этого урока начинаем работать с функционалом интернет-магазина. 
 Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
 Товары в корзине хранятся в массиве. Задачи:
    Организовать такой массив для хранения товаров в корзине;
    Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */
function countBasketPrice( goods ){
    var totalPrice = 0;
    for(var i = 0; i < goods.length; i++){
        for( var j = 0; j < goods[i][2]; j++ ) {
            totalPrice += goods[i][1];
        }
    }
    alert('Стоимость товаров корзины составляет: '+ totalPrice);
}


// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}
function numbers(){
    var i = 0;
    for(var i = 0; i < 10; alert(i++)) {

    }
}
// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//     x
//     xx
//     xxx
//     xxxx
//     xxxxx
function writePiramid(){
    var count = 0; 
    var str ='';
       
    while(count !== 20 ) {
        str += '*';
        console.log(str);   
        count++;
    }
}
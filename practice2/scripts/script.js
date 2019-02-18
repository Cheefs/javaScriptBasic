// 1. Дан код:
    // var a = 1, b = 1, c, d;
    // c = ++a; alert(c);           // "2"  Переменной 'c' мы присваиваем пре инкремент числа "a" ( т.e уже измененное значение на 1  )
    // d = b++; alert(d);           // "1" В данном случае используется пост инкремент 
                                        // ( т.е значению "d"  присвоили значение "b" которое равно 1, и уже после операции присваивания значение переменной "b" становится 2)
    // c = (2+ ++a); alert(c);      // "5" После первой операции, "a" равна 2, выполняя снова пре инктемент, ее значение становится равным 3 , 2 + 3 = 5
    // d = (2+ b++); alert(d);      // "4"  Так как "b" осталась быть равной 2, в переменную "d" присваиваем результат сложения 2 + 2, 
                                        // и после значение "b" увеличивается на 1 ("b = 3")
    // alert(a);                    // "3"  В Результате последней операции, с участием переменной  "a" уже получила свое финальное значение 3
    // alert(b);                    // "3" После выполения последней операцией с участием переменной  "b", она изменила свое значение с 2 на 3 

// Почему код даёт именно такие результаты?
    // Такие результаты получаем изза того, что  пре инкремент выполняет прирощение значения переменной до выполнения операции над ней
        // Если расписать логику пре инкремента, будет чтото наподобии
            // var a = 1;
            // var с = a + 1;
    // В свою очередь пост инкремент, выполняет действия над переменной уже после операции
        // Если расписать логику пост инкремента, будет чтото наподобии
            // var b = 1;
            // var d = b;
            //     b += 1;

// 2. Чему будет равен x в примере ниже?
    // var a = 2;
    // var x = 1 + (a *= 2); 

    // Ответ 5, так как у скобок самый высокий приоритет, сперва переменной "a" присваниваем значение самой себя умноженой на 2 ( a = a * 2, получим 4 ) 
    // далее, выполняем сложение 4 + 1 и получаем 5 
    
main();

function main(){
    var choise = prompt('Выберите задачу:\n 1 - для задачи №3(сравнение чисел);\n 2 - для задачи  №4 ( число от 0 до 15);\n 3  - для задачи №6 (математические операции);\n 4  - для задачи №8 (рекурсия);\n 0 - Для выхода;');
    switch( parseInt(choise)) {
        case 0: 
            break;
        case 1:
            task3();
            break;
        case 2: 
            task4();
            break;
        case 3:
            alert('Введите 2 числа');
            var arg1 = prompt('Введите число 1');
            var arg2 = prompt('Введите число 2');
            if ( !isNaN(arg1) && !isNaN(arg2)){
                var operation = prompt('Введите:\n "сумма" - для сложения;\n "разность" - для вычитания;\n "умножение" - для умножения;\n "деление" - для разделения');
            }
            mathOperation(arg1, arg2, operation);
            break;
        case 4: task8();
            break;
        default:
            alert('Введенно неверное значение');
            main();
            break;
    }
}    

// 3 Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
    // если a и b положительные, вывести их разность;
    // если а и b отрицательные, вывести их произведение;
    // если а и b разных знаков, вывести их сумму;
    // Ноль можно считать положительным числом.
function task3(){
    alert('Введите 2 любых числа ( каждое из них может быть как отрецательноым, так и положительным числом)');
    var a = prompt('Введите число 1');
    var b = prompt('Введите число 2');
    var result = 'Введенное значение число не является числом';

    if ( !isNaN(a) && !isNaN(b)){
        a = parseInt(a);
        b = parseInt(b);
        if ( (a >= 0 && b < 0 ) || (a < 0 && b >= 0 ) ){
        // если а и b разных знаков, вывести их сумму
            result = 'Числа разных знаков, их сумма равна: '+ (a + b);
        } else if( a >= 0 && b >= 0 ){
            // если a и b положительные, вывести их разность;
            result = 'Оба числа являются \'положительными\', их разность равна: ' + (a - b);
        } else {
            // если а и b отрицательные, вывести их произведение;
            result = 'Оба числа являются \'отрицательными\', их произведение равно: ' + (a * b);
        }
    }
    alert(result);
}

// 4 Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function task4(){
    var a = prompt('Введите число в промежутке от 0 до 15');
    switch( parseInt(a)) {
        case 0: alert(0);
        case 1: alert(1);
        case 2: alert(2);
        case 3: alert(3);
        case 4: alert(4);
        case 5: alert(5);
        case 6: alert(6);
        case 7: alert(7);
        case 8: alert(8);
        case 9: alert(9);
        case 10: alert(10);
        case 11: alert(11);
        case 12: alert(12);
        case 13: alert(13);
        case 14: alert(14);
        case 15: alert(15);
            break;
        default: alert ('Введенное вами число не входит в требуемый диапазон значений!');
            break;
    }
}

// 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function summ(a, b){
    return parseInt(a) + parseInt(b);
}
function dif(a, b){
    return a - b;
}
function miltyply(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции.
    // В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
function mathOperation(arg1, arg2, operation) {
    var result = 'Вы ввели не число';
    switch(  operation.toLocaleLowerCase() ){
        case 'сумма': 
            result = summ(arg1, arg2);
            break;
        case 'разность': 
            result = dif(arg1, arg2);
            break;
        case 'умножение': 
            result = miltyply(arg1, arg2);
            break;
        case 'деление': 
            result = division(arg1, arg2);
            break;
        default:  
            result = 'Action is not exists';      
    }
    alert(result);
}

// 7* Сравнить null и 0. Объяснить результат.
    // Если сравнивать null  и 0 то в результате получим false, так как это разные типы данных, и 0 - число, null - нечего (специальный тип данных)

// 8* С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.

function task8(){
    var val = prompt('Введите число которое неободимо возвести в степень');
    var pow = prompt('Введите степень');
    var result = 'Введенное вами значение не является числом';

    if(!isNaN(val) && !isNaN(pow)){
        if( pow > 0){
            result = power(val, parseInt(pow));
        }else {
            pow *= -1;
            result = 1 / power(val, parseInt(pow));
        }
    }
    alert(result);
}

function power(val, pow){
    if (pow != 1){
        console.log(val);
        return val * power(val, pow - 1);
    }else{
        return val;
    }
}

var task; 
    var task = prompt('Здравствуйте! доступны к просмотру 2 задачи. Нажмите 1 - чтобы выбрать задачу №1 или 2 для задачи №2');
    if(task == 1){
        // 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
        //    Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.
        var result;
        var ZERO_BY_CELSIUM = 32;
        var numerator = 9;
        var denominator = 5;
        var temperatureCelsium = prompt('Пожалуйста введите температуру в градусах цельсия');
        result = ( numerator/denominator )  *temperatureCelsium + ZERO_BY_CELSIUM;
        
        alert ('Введенная вами температура равна: ' +result+ ' градусов по Фаренгейту');
    }else if( task == 2){
        // 2. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).
        var admin;
        var name;
        name = 'Василий';
        admin = name;
        
        alert(name);
    }else {
        alert('Введенное вами значение не верное, перезагрузите страницу и попробуйте снова')
    }

   // 3. *Чему будет равно JS-выражение 1000 + "108"/
   //   Ответом будет строка 1000108. так одной переменной является строка как оператор "+" выполняет операцию склеивания, (наша числовая переменная будет приведена к строке)
   //   В других же случаях, если попробуем выполнить другую операцию (например 1000 - "108"), то наша строка будет преобразована в число,
   //   и мы получим результат арифметического вычисления, а не склеивания 
   
   // 4. *Самостоятельно разобраться с атрибутами тега script (async и defer)/
   //  Тег "async" ( или же запустить скрипт асинхронно ) он говорит что наш скрипт будет выполнятся без ожидания загрузки всей страници, и в тоже время страница не ожидает
   // окончание выполнения скрипта и продолжает загрузку всего содержимого.
   //  Тег "defer" говорит скрипту начать выполнение только после загрузки всей страници ( откладываем выполнение до полной загрузки страници)
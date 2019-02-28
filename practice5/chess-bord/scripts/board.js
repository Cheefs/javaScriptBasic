// Создать функцию, генерирующую шахматную доску.
// Можно использовать любые html-теги. Доска должна быть верно разлинована  на черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

var MAX_LENGTH = 8;

var $container = document.getElementById('board');
var $boadrd = document.createElement('div');

$boadrd.classList.add('chess-board');
    for (var i = 0; i < 5; i++) {
        var $boardElement = document.createElement('div');
        if (i === 0) {
            $boardElement.classList.add('board-border');
            $boardElement.classList.add('border_top');
        } else if ( i === 1 ) {
            $boardElement.classList.add('board-border');
            $boardElement.classList.add('border-right');
        } else if (i === 2) {
            $boardElement.classList.add('board-center');
        } else if (i === 3) {
            $boardElement.classList.add('board-border');
            $boardElement.classList.add('border-left');
        } else {
            $boardElement.classList.add('board-border');
        }
        $boardElement = fillBoardBorder($boardElement);
        $boadrd.appendChild($boardElement);
    }

function fillBoardBorder($element){
    var chars = ['A','B','C','D','E','F','G','H'];
    for (var i = 0; i < MAX_LENGTH ; i++) {
        var $coll = document.createElement('div');
        if ( $element.classList.contains('border_top')) {
            $coll.classList.add('board-coll');
            $coll.textContent = chars[(chars.length - 1) - i];
        } else if ($element.classList.contains('border-right')) {
            $coll.classList.add('board-coll');
            $coll.textContent = MAX_LENGTH - i;
        } else if ($element.classList.contains('board-center')) {
            $coll.classList.add('board-row');
            $coll = boardCenter($coll, i);
        } else if ($element.classList.contains('border-left')) {
            $coll.classList.add('board-coll');
            $coll.textContent = (i + 1);
        } else {
            $coll.classList.add('board-coll');
            $coll.textContent = chars[i];
        }
        $element.appendChild($coll);
    }
    return $element;
}

function boardCenter($element, count) {
    for (var j = 0; j < MAX_LENGTH; j++) {
        var $coll = document.createElement('div');
        $coll.classList.add('board-coll');
        if ( count % 2 === 0) {
            if ( j % 2 !== 0 ) {
                $coll.classList.add('coll_black');
            }
        } else {
            if ( j % 2 === 0 ) {
                $coll.classList.add('coll_black');
            }
        }
        $element.appendChild($coll);
    }
    return $element;
}
$container.appendChild($boadrd);
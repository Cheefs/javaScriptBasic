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
    for (var i = 0; i < MAX_LENGTH; i++) {
        var $coll = document.createElement('div');
            $coll.classList.add('board-coll');
        if ( $element.classList.contains('border_top')) {
            $coll.textContent = String.fromCharCode((65 + ( MAX_LENGTH - 1) ) - i );
        } else if ($element.classList.contains('border-right')) {
            $coll.textContent = MAX_LENGTH - i;
        } else if ($element.classList.contains('board-center')) {
            $coll.classList.add('board-row');
            $coll = boardCenter($coll);
        } else if ($element.classList.contains('border-left')) {
            $coll.textContent = (i + 1);
        } else {
            $coll.textContent = String.fromCharCode(65 + i) ;
        }
        $element.appendChild($coll);
    }
    return $element;
}

function boardCenter($element) {
    for (var j = 0; j < MAX_LENGTH; j++) {
        var $coll = document.createElement('div');
        $coll.classList.add('board-coll');
        $element.appendChild($coll);
    }
    return $element;
}
$container.appendChild($boadrd);
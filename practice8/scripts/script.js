var FIELD_SIZE_X = 50;
var FIELD_SIZE_Y = 50;
var MAX_SNAKE_SPEED = 150;
var FOOD_UNIT = 0;
var OBSCTACLE_UNIT = 1;

var snakeSpeed = MAX_SNAKE_SPEED;

var $gameTable;
var $gameField;

var snake = [];
var snakeCoordX;
var snakeCoordY;

var snakeInterval;
var score = 0;
var direction = 'top';
var $score;

function init() {
    $gameField = document.getElementById('snake-field');
    document.getElementById('btn-start').addEventListener('click', function(e) {
        if (!e.target.classList.contains('disabled')) {
            score = 0;
            $score.textContent = score;
            snakeInterval = setInterval(move, snakeSpeed);
            createElement(FOOD_UNIT);
            var $btn = document.getElementById('btn-start');
            $btn.classList.add('disabled');

            function respawn() {
                snakeCoordX = Math.floor(Math.random() * FIELD_SIZE_X);
                snakeCoordY = Math.floor(Math.random() * FIELD_SIZE_Y);
            
                var $snakeHead = $gameTable.children[snakeCoordY].children[snakeCoordX];
                $snakeHead.classList.add('snake-unit');
            
                var $snakeTail = $gameTable.children[snakeCoordY + 1].children[snakeCoordX];
                $snakeTail.classList.add('snake-unit');
            
                snake.push($snakeTail);
                snake.push($snakeHead);
            }
            respawn();
        }
    });
    window.addEventListener('keydown', function(e) {
        direction = ( !(e.keyCode === 37 && direction !== 'right')? 
            (!(e.keyCode === 38 && direction !== 'bottom')? 
                (!(e.keyCode === 39 && direction !== 'left')? 
                    (!(e.keyCode === 40 && direction !== 'top')? direction 
                        :direction = 'bottom')
                    :direction = 'right')
                :direction = 'top')
            : direction = 'left');
    });

    function buildGameField() {
        $score = document.getElementById('gameScore');
        $gameTable = document.createElement('table');
        $gameTable.classList.add('game-table');
    
        for (var i = 0; i < FIELD_SIZE_X; i++) {
            var $row = document.createElement('tr');
            $row.classList.add('game-table-row');
    
            for (var j = 0; j < FIELD_SIZE_Y; j++) {
                var $cell = document.createElement('td');
                $cell.classList.add('game-table-cell');
                $row.appendChild($cell);
            }
            $gameTable.appendChild($row);
        }
        $gameField.appendChild($gameTable);
    }

    buildGameField();
}

// * Убрать границы поля: пересекая их, змейка должна появляться с противоположной стороны.
// Просто хватило добавить пару условий, и убрать проверку на столкновение которое на уроке вы показывали
function move() {
    var $newUnit;
    var isHit = function (unit) {
        return (snake.includes(unit) || unit.classList.contains('obstacle-unit'));
    }
    function gameOver() {
        $score.textContent = 'GAME OWER total score: ' + score ;
        clearInterval(snakeInterval);
        for(var i = 0; i < snake.length; i++) {
            snake[i].classList.remove('snake-unit');
        }
    
        function removeFromField() {
            var $list = document.getElementsByClassName('game-table-cell');
            for (var i = 0; i < $list.length; i++) {
                if ($list[i].classList.contains('food-unit')) {
                    $list[i].classList.remove('food-unit');
                } else if ($list[i].classList.contains('obstacle-unit')) {
                    $list[i].classList.remove('obstacle-unit');
                }  
            }
        }
        removeFromField();
        snake = [];
        direction = 'top';
        snakeSpeed = MAX_SNAKE_SPEED;
        document.getElementById('btn-start').classList.remove('disabled');
    }

    switch (direction) {
        case 'top':
            if ( snakeCoordY === 0) {
                snakeCoordY = FIELD_SIZE_Y
            }
            snakeCoordY--;
            break;
        case 'bottom':
            if ( snakeCoordY === FIELD_SIZE_Y - 1) {
                snakeCoordY = -1;
            }
            snakeCoordY++;
            break;
        case 'left':
            if (snakeCoordX === 0 ) {
                snakeCoordX = FIELD_SIZE_X;
            }
            snakeCoordX--;
            break;
        case 'right':
            if ( snakeCoordX === FIELD_SIZE_X - 1) {
                snakeCoordX = -1
            }
            snakeCoordX++;
            break;
    }

    $newUnit = $gameTable.children[snakeCoordY].children[snakeCoordX];
    if ( !isHit($newUnit) ) {
        $newUnit.classList.add('snake-unit');
        snake.push($newUnit);

        if (!isFood($newUnit)) {
            var $snakeRemoved = snake.shift();
            $snakeRemoved.classList.remove('snake-unit');
        }
    } else {
        gameOver();
    }
}

// решил поставить чтоб каждая сьеденная еда уменьшала интервал, чтоб игрок привыкал к ускорению понемногу
function isFood(unit) {
    if (unit.classList.contains('food-unit')) {
        unit.classList.remove('food-unit');
        document.getElementById('gameScore').textContent = ++score;

        if (score % 1 === 0) {
            createElement(OBSCTACLE_UNIT);
        }

        snakeSpeed = MAX_SNAKE_SPEED - score;
        clearInterval(snakeInterval);
        snakeInterval = setInterval(move, snakeSpeed);
        createElement(FOOD_UNIT);
        return true;
    }
    return false;
}

function createElement(element) {
    var created = false;
    while (!created) {
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var $element = $gameTable.children[foodY].children[foodX];

        if (!$element.classList.contains('snake-unit') && !$element.classList.contains('obstacle-unit') && !$element.classList.contains('food-unit') ) {
            $element.classList.add(
                ( element === FOOD_UNIT? 'food-unit' : 'obstacle-unit' )
            );
            created = true;
        }
    }
}

window.addEventListener('load', init);
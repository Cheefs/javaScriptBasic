var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;
var DIRECTION_NULL = 0;

var $modaldoalog = document.getElementById('modal-dialog');
var $modal = document.getElementById('modal');

var $photo = document.getElementById('photo');
$photo.addEventListener('click', handlerPhotoClick);
$modaldoalog.addEventListener('click', handlerModalClick);

var activeIndex;

function handlerPhotoClick(e) {
    activeIndex = 0;
    if (e.target.classList.contains('photo__img')) {
        var $photos = e.target.parentElement.children[1].cloneNode(true);
        $modaldoalog.classList.toggle('hide');
        $modal.children[1].setAttribute('src', e.target.src);
        $modal.appendChild($photos);
    }
}

function handlerModalClick(e) {
    if (e.target.classList.contains('btn-dismiss-modal')) {
        changePhoto(DIRECTION_NULL);
    } else if (e.target.classList.contains('arrow')) {
        if (e.target.classList.contains('arrow-right')) {
            changePhoto(DIRECTION_LEFT)
        } else {
            changePhoto(DIRECTION_RIGHT)
        }
    }
}

// * Для задачи со звездочкой из шестого урока реализовать функционал переключения между картинками по стрелкам на клавиатуре.
var BTN_ARROW_LEFT = 37;
var BTN_ARROW_RIGHT = 39;
var BTN_ESC = 27;

function changePhoto(direction) {
    var $currPhoto  = document.getElementsByClassName('modal__img');
    $currPhoto.innerHTML = '';
    var $list = document.getElementsByClassName('photo-list');
    if (direction === 1) {
        if (activeIndex > 0) {
            activeIndex--;
        } else {
            activeIndex = $list[0].children.length - 1;
        }
    } else if (direction === -1) {
        if (activeIndex < $list[0].children.length - 1) {
            activeIndex++;
        } else {
            activeIndex = 0;
        }
    } else if ( direction === 0) {
        $modal.removeChild($list[0]);
        $modaldoalog.classList.toggle('hide');
    }
    $modal.children[1].setAttribute('src', $list[0].children[activeIndex].getAttribute('src'));
}

window.addEventListener('keydown', handlerKeyDown);

function handlerKeyDown(e) {
    console.log(e.keyCode);
    if (e.keyCode === BTN_ARROW_LEFT) {
        changePhoto(DIRECTION_LEFT);
    } else if (e.keyCode === BTN_ARROW_RIGHT) {
        changePhoto(DIRECTION_RIGHT);
    } else if (e.keyCode === BTN_ESC) {
        changePhoto(DIRECTION_NULL);
    }
}
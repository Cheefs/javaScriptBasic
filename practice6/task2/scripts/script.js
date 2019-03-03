var $modaldoalog = document.getElementById('modal-dialog');
var $modal = document.getElementById('modal');

var $photo = document.getElementById('photo');
$photo.addEventListener('click', handlerPhotoClick);
$modaldoalog.addEventListener('click', handlerModalClick);

var activeIndex;

function handlerPhotoClick(e) {
    activeIndex = 0;
    if (e.target.classList.contains('photo__img')) {
        $modaldoalog.classList.toggle('hide');
        $modal.children[1].setAttribute('src', e.target.src );
        var $photos = e.target.parentElement.children[1].cloneNode(true);
        $modal.appendChild($photos)
    }
}

function handlerModalClick(e) {
    var $list = document.getElementsByClassName('photo-list');
    var $currPhoto  = document.getElementsByClassName('modal__img');
    $currPhoto.innerHTML = '';
    if (e.target.classList.contains('btn-dismiss-modal')) {
            $modal.removeChild($list[0]);
            $modaldoalog.classList.toggle('hide');
    } else if (e.target.classList.contains('arrow')) {
        if (e.target.classList.contains('arrow-right')) {
            if (activeIndex < $list[0].children.length - 1  ) {
                activeIndex++;
            } else {
                activeIndex = 0;
            }
        } else {
            if (activeIndex > 0) {
                activeIndex--;
            } else {
                activeIndex = $list[0].children.length - 1;
            }
        }
        $modal.children[1].setAttribute('src', $list[0].children[activeIndex].getAttribute('src'));
    }
}
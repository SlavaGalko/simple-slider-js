const pictures = document.querySelectorAll('.slide');



for (let item of pictures) {
    item.addEventListener('click', function () {
        deleteActiveClass();
        item.classList.add('active');
    })
}


function deleteActiveClass() {
    pictures.forEach((slide) => {
        slide.classList.remove('active');
    })
}
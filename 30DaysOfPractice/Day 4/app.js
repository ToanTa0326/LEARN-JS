const images = document.querySelectorAll('.wrapper .image img'),
closeBtn = document.querySelector('.gallery .close'),
nextBtn = document.querySelector('.control.next'),
prevBtn = document.querySelector('.control.prev'),
gallery = document.querySelector('.gallery'),
galleryImg = document.querySelector('.gallery__inner img');

console.log(galleryImg);

let currentImg = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImg = index;
        showGallery()
    })
})

function showGallery(){
    currentImg == images.length - 1
    ? nextBtn.classList.add('hide')
    : nextBtn.classList.remove('hide');

    currentImg == 0
    ? prevBtn.classList.add('hide')
    : prevBtn.classList.remove('hide');

    gallery.classList.add('show');
    galleryImg.src = images[currentImg].src;
}

closeBtn.addEventListener('click', () => {
    gallery.classList.remove('show');
})

nextBtn.addEventListener('click', () => {
    currentImg < images.length - 1 ? currentImg++ : undefined
    showGallery()
})

prevBtn.addEventListener('click', () => {
    currentImg > 0 ? currentImg-- : undefined
    showGallery()
})


let slider_img = document.querySelector('.slider-img');
let images = ['1.jpg', '2.jpeg', '3.webp', '4.jpg', '5.jpeg', '6.jpg', '7.png', '8.jpg', '9.jpg'];
let i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}
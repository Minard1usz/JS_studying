let slider_img = document.querySelector('.slider-img');
let images = ['1.jpg', '2.jpeg', '3.webp', '4.jpg', '5.jpeg', '6.jpg', '7.png', '8.jpg', '9.jpg'];
let i = 0;

let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');

function prev() {
    if (i <= 0) {
     i = images.length;
    }
     i--;
    setImg();
    updateButtonState();
}

function next() {
    if (i >= images.length - 0) {
    i = 0;
    }
    i++;
    setImg();
    updateButtonState();
}

function setImg() {
slider_img.setAttribute('src', 'images/' + images[i]);
}

// prevBtn.addEventListener('blur', () => {
//     prevBtn.style.display = 'none';
// });

function updateButtonState() {
    if (i <= 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    if (i >= images.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}
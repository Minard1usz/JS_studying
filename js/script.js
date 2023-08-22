const images = ['1.jpg', '2.jpeg', '3.webp', '4.jpg', '5.jpeg', '6.jpg', '7.png', '8.jpg', '9.jpg'];

document.getElementById('btn').addEventListener('click', function() {

const randomIndex = Math.floor(Math.random() * images.length);

const randomImageName = images[randomIndex];

const image = new Image();

image.src = 'images/' + randomImageName;

document.body.append(image);

});


alert(`Я изучаю Java Script!`)
const galleryContainer = document.querySelector('.cats-container');
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
let currentImageIndex = 0;
function showImage(index) {

    images.forEach((image, i) => {
    if (i === index) {
    image.style.transform = 'scale(1)';
    } else {
    image.style.transform = 'scale(0)';
    }
    });
    }
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
        }
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
        }
        prevButton.addEventListener('click', showPreviousImage);
        nextButton.addEventListener('click', showNextImage);
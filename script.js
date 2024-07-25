// Get the slider container and images
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

// Set the current image index
let currentIndex = 0;

// Function to show the next image
function nextImage() {
    // Hide the current image
    images[currentIndex].classList.remove('active');

    // Increment the index
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].classList.add('active');
}

// Set an interval to automatically slide the images
setInterval(nextImage, 3000); // Change the interval time as needed
let slideIndex = 1;
showSlides(slideIndex); // Initialize the first slide

// Function to go to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    // Looping the slides back to the first or last if needed
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Automatic slideshow that advances every 3 seconds
function autoSlideShow() {
    setInterval(function() {
        plusSlides(1); // Advance to the next slide every 3 seconds
    }, 3000); // Adjust time in milliseconds for slide interval
}

// Start the automatic slideshow immediately when the page loads
window.onload = function() {
    autoSlideShow(); // Start automatic slideshow
}

function toggleCourses(courseId) {
    var coursesList = document.getElementById(courseId);
    if (coursesList.style.display === "block") {
        coursesList.style.display = "none";
    } else {
        coursesList.style.display = "block";
    }
}

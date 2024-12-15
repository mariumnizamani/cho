
// JavaScript Code for Advanced Website Interactivity

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slider-container .slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

// Auto-scroll the slider every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// Lightbox Gallery
const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.createElement("img");

if (lightbox) {
    lightbox.appendChild(lightboxImage);

    galleryImages.forEach((image) => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImage.src = image.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
}

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "Toggle Dark Mode";
darkModeToggle.style.cssText =
    "position: fixed; bottom: 10px; right: 10px; padding: 10px 15px; background: #007acc; color: #fff; border: none; border-radius: 5px; cursor: pointer; z-index: 1000;";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// Sticky Navbar Animation
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Exam Results - Dynamic Filter (Optional Example)
const resultItems = document.querySelectorAll(".result");
const searchBox = document.createElement("input");
searchBox.placeholder = "Search results...";
searchBox.style.cssText =
    "margin: 20px auto; padding: 10px; width: 80%; max-width: 400px; display: block; border: 1px solid #ccc; border-radius: 5px;";
document.getElementById("exam-result").prepend(searchBox);

searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    resultItems.forEach((item) => {
        const name = item.querySelector("h3").textContent.toLowerCase();
        if (name.includes(query)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});
// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Close" button and the welcome poster
    var closeButton = document.getElementById('close-btn');
    var welcomePoster = document.getElementById('welcome-poster');
    
    // Show the poster when the page loads
    welcomePoster.style.display = 'block';
  
    // Add event listener to the close button
    closeButton.addEventListener('click', function() {
      // Hide the poster when the close button is clicked
      welcomePoster.style.display = 'none';
    });
  });
  

  




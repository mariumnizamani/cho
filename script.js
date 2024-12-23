let currentSlide = 0;
const slides = document.querySelectorAll(".slider-container .slide");
const totalSlides = slides.length;
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

// Auto-scroll the slider every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// Manual slide navigation
if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
}

// Lightbox Gallery - enhanced styling and smoother transition
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

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
}

// Dark Mode Toggle - with persistence using localStorage
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "Toggle Dark Mode";
darkModeToggle.style.cssText =
    "position: fixed; bottom: 10px; right: 10px; padding: 10px 15px; background: #007acc; color: #fff; border: none; border-radius: 5px; cursor: pointer; z-index: 1000;";
document.body.appendChild(darkModeToggle);

const savedMode = localStorage.getItem("mode");
if (savedMode) {
    document.body.classList.add(savedMode);
}

darkModeToggle.addEventListener("click", () => {
    const currentMode = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    const newMode = currentMode === "dark-mode" ? "light-mode" : "dark-mode";
    document.body.classList.replace(currentMode, newMode);
    localStorage.setItem("mode", newMode); // Persist mode in localStorage
});

// Sticky Navbar - with smoother transition on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.transition = "box-shadow 0.3s ease-in-out"; // Smooth transition
        navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Exam Results - Dynamic Filter (with performance optimization)
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

// Show and close welcome poster
document.addEventListener('DOMContentLoaded', function() {
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

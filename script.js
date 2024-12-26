// Add fade-in animation on scroll
window.addEventListener("scroll", () => {
    const testimonials = document.querySelectorAll(".testimonial-card");
    testimonials.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initialize cards as hidden
document.querySelectorAll(".testimonial-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.5s ease";
});


// Add click event for buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`You have selected the ${button.parentElement.querySelector('.plan-title').textContent} plan!`);
    });
});


// Add fade-in animation when cards appear on the screen
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});

let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlider() {
    // Shift to next slide
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Change slides every 4 seconds
setInterval(moveSlider, 3000);

document.getElementById('submit-review').addEventListener('click', function () {
    // Get form values
    const name = document.getElementById('reviewer-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();
    const rating = document.getElementById('review-rating').value;

    // Validate inputs
    if (name === "" || reviewText === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Create a new review element
    const reviewList = document.getElementById('review-list');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
        <h4>${name}</h4>
        <p>"${reviewText}"</p>
        <span class="rating">Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>
    `;

    // Append new review
    reviewList.appendChild(newReview);

    // Clear form fields
    document.getElementById('reviewer-name').value = "";
    document.getElementById('review-text').value = "";
    document.getElementById('review-rating').value = "5";
});




// script.js

// Function to toggle the navigation menu
function toggleNavMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Event listener for the toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', toggleNavMenu);
});





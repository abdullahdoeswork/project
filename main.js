document.addEventListener('DOMContentLoaded', () => {
    const dropdownContent = document.querySelector('.dropdownContent');
    const navbarButton = document.getElementById('navbarButton');

    navbarButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

});


// document.addEventListener('DOMContentLoaded', () => {
//     const dropdown1 = document.getElementById('dropdown1');
//     const dropdown2 = document.getElementById('dropdown2');
//     const dropdown3 = document.getElementById('dropdown3');

//     dropdown1.addEventListener('click', () => {

//     })
//     }

// );

function inProductionUrl() {
    window.location.href = './main-in-progress.html'; 
}

function homeUrl() {
    window.location.href = './main.html'
}

function careersUrl () {
window.location.href = './main-careers.html'
}

function pricingUrl () {
window.location.href = './main-pricing.html'
}

function featuresUrl () {
window.location.href = './main-features.html'
}

// JS for Features Card

let currentIndex = 0;
const cards = document.querySelectorAll('.about-card');
const totalCards = cards.length;

function swipeCard() {
    // Hide current card
    cards[currentIndex].style.transform = 'translateX(-100%)';
    // Update index
    currentIndex = (currentIndex + 1) % totalCards;
    // Show next card
    cards[currentIndex].style.transform = 'translateX(0)';
}

// Set up event listeners for hover or click
cards.forEach(card => {
    card.addEventListener('click', swipeCard);
});

// Initial setup to show the first card
cards[currentIndex].style.transform = 'translateX(0)';
// This script waits for the webpage to fully load before running.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Select the necessary elements ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    // ADD THIS LINE: Select all of the navigation links within the menu
    const navLinks = document.querySelectorAll('.nav-menu a');

    // --- 2. Hamburger Button Functionality (No changes here) ---
    // This part opens and closes the menu when you click the button
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // --- 3. NEW PART: Close menu when a navigation link is clicked ---
    // This function ensures the menu closes after you make a selection
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // When a link is clicked, remove the 'active' class from both
            // the button and the menu to make them close.
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

});
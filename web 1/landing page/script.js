document.addEventListener('DOMContentLoaded', () => {
    const splashscreen = document.querySelector('.splashscreen');
    const hamburgerBtn = document.querySelector('.hamburger-btn');

    // Handle Splash Screen Fade Out
    setTimeout(() => {
        splashscreen.style.display = 'none';
    }, 5000); // Hide splashscreen after 5 seconds

    // Hamburger Menu Toggle (For mobile-friendly menu)
    hamburgerBtn.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
});

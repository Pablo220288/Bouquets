const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile-container');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
});
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    nav = document.querySelector('.nav-bar');
    nav.classList.toggle("active");
    hamb = document.querySelector('.hamburger');
    hamb.classList.toggle("active");
}
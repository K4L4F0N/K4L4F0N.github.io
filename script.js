menu = document.querySelector(".hamburger");
menu.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

    animacija = document.querySelector(".menu");
    animacija.classList.toggle("active");
}

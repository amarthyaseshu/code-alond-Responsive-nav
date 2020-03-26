const $burger = document.querySelector(".burger");
const $navLinks = document.querySelector(".nav-links");
const $navLinks_ = document.querySelectorAll(".nav-links li");

$burger.onclick = () => {
    $navLinks.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");

    $navLinks_.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index/5+0.5}s`;
        }
    });
};
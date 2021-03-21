function desplegarMenu() {
    menuContainer.style.clipPath= "circle(100% at 50% 50%)";
}

function cerrarMenu() {
    menuContainer.style.clipPath = "circle(0% at 50% 50%)";
}

var menuButton = document.querySelector(".menu-button");
var closeButton = document.querySelector(".close-button");
var menuLinks = document.querySelectorAll(".navbar__link");
var menuContainer = document.querySelector(".navbar__links");
menuButton.addEventListener("click", desplegarMenu);
closeButton.addEventListener("click", cerrarMenu);
for(var elem of menuLinks)
    elem.addEventListener("click", cerrarMenu);

const hamburgerMenu = document.getElementById("hamburgerMenu");
const nav = document.querySelector('.header__top-row');

hamburgerMenu.addEventListener("click", toggleMenu);
nav.addEventListener("click", toggleMenu1);

 
function toggleMenu() {
    hamburgerMenu.classList.toggle("change");
}

function toggleMenu1() {
    nav.classList.toggle("header__top-row-modile");
}




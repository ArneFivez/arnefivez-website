//get all relevant elements
const headerContainer = document.querySelector('header');
const headerDesktop = document.querySelector(".header.desktop");
const headerMobile = document.querySelector('.header.mobile');
const hamburger = document.querySelector('.navbutton');
const slideMenu = document.querySelector('.slidemenu');

//event listeners
var lastscroll = 0;
document.onscroll = () => {
    if(window.scrollY > 200) {
        headerContainer.classList.add("hidden");
    } else {
        headerContainer.classList.remove("hidden");
    }
}

hamburger.onclick = (e) => {
    hamburger.classList.toggle('open');
    slideMenu.classList.toggle('open');
}

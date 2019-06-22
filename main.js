var hamburgerButton = document.querySelector(".hamburger__button");
var mobileNav = document.querySelector(".mobile");

hamburgerButton.addEventListener("click", function(){
    mobileNav.classList.toggle('open');
});

mobileNav.addEventListener("click", function(){
    mobileNav.classList.remove("open");
});
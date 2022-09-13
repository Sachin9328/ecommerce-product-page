let body = document.getElementById("body");
let menuIcon = document.getElementById("hamburger-icon");
let menu = document.getElementById("mobile-menu");
let closeMenuIcon = document.getElementById("close-menu-icon");

menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = "block";
})

closeMenuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = "none";    
})
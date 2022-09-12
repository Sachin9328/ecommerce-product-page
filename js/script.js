let body = document.getElementById("body");
let menuIcon = document.getElementById("hamburger-icon");
let menu = document.getElementById("mobile-menu");
let closeMenuIcon = document.getElementById("close-menu-icon");

menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    // body.classList.toggle("overflowHidden");
    menu.style.display = "block";
})

closeMenuIcon.addEventListener("click", () => {
    menu.style.display = "none";    
})
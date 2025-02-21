document.addEventListener("DOMContentLoaded", function() { console.log("Website Loaded Successfully!");

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ffcc00";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#58a6ff";
    });
});

alert("Welcome to Team Sniper's Website!");

});


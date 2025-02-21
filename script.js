document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let sectionId = this.getAttribute("href").substring(1);
            let section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Adding Fade-in effect on load
    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.5}s`;
    });
});

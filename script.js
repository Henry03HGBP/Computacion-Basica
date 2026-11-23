const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const links = navLinks.querySelectorAll("a")

menuBtn.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");

    if (isActive) {
        menuBtn.innerHTML = "×";
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuBtn.setAttribute("aria-expanded", "false");
    }
});
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    })
})

function Whatssapp() {
    location.href = "https://wa.me/5217711310918"
}
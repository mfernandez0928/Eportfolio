const styleSwitcherToggler = document.querySelector(".style-switcher-toggle");
styleSwitcherToggler.addEventListener("click", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}
function changeColor() {
    alternateStyle.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
    })
}
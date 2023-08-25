const htmlDiv = document.getElementById("html-div");
const cssDiv = document.getElementById("css-div");
const jsDiv = document.getElementById("js-div");
const reactDiv = document.getElementById("react-div");

const body = document.querySelector("body")
const heroHead = document.getElementById("hero-head")
const heroText = document.getElementById("hero-text")
const heroButton = document.getElementById("hero-button")
const heroImg = document.getElementById("hero-img")

const projectDiv = document.getElementById("project-div");
const projectText = document.getElementById("project-text")

// projectDiv.addEventListener("mouseover", () => {
//     projectText.style.transform = "()"
//     projectDiv.style.transition = "all 1s"
// })



window.addEventListener("scroll", () => {
    let Y = window.scrollY
    console.log(Y);

    if (Y >= 500) {
        htmlDiv.classList.add("animate-html");
        console.log("Hello");
    } else {
        htmlDiv.classList.remove("animate-animate-js")
    }
    if (Y >= 210) {
        heroHead.style.transform = "translateX(-1000px)"
        heroHead.style.transition = "all .5s"

    } else if (Y <= 330) {
         heroHead.style.transform = "translateX(0)";
    }

    if (Y >= 400) {
        heroText.style.transform = "translateX(-800px)"
        heroText.style.transition = "all 1s"

    } else if (Y <= 500) {
         heroText.style.transform = "translateX(0)";
    }

    if (Y >= 400) {
        heroButton.style.transform = "translateX(-500px)"
        heroButton.style.transition = "all 1.5s"

    } else if (Y <= 450) {
         heroButton.style.transform = "translateX(0)";
    }

    if (Y >= 210) {
        heroImg.style.transform = "translateX(800px)"
        heroImg.style.transition = "all .5s"

    } else if (Y <= 330) {
         heroImg.style.transform = "translateX(0)";
    }

    if (Y >= 625) {
        htmlDiv.style.transform = "translateX(0px)"
        htmlDiv.style.transition = "all 1s"

    } else if (Y <= 625) {
         htmlDiv.style.transform = "translateX(-800px)";
    }

    if (Y >= 625) {
        cssDiv.style.transform = "translateX(0px)"
        cssDiv.style.transition = "all 1s"

    } else if (Y <= 625) {
         cssDiv.style.transform = "translateX(800px)";
    }


    if (Y >= 250) {
      jsDiv.classList.add("animate-js");
    } else {
      jsDiv.classList.remove("animate-js");
    }


    if (Y >= 1290) {
      reactDiv.classList.add("animate-js");
    } else {
      reactDiv.classList.remove("animate-js");
    }

})
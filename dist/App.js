const htmlDiv = document.getElementById("html-div");
const cssDiv = document.getElementById("css-div");
const jsDiv = document.getElementById("js-div");
const reactDiv = document.getElementById("react-div");

const body = document.querySelector("body")
const heroHead = document.getElementById("hero-head")
const heroText = document.getElementById("hero-text")
const heroButton = document.getElementById("hero-button")
const heroImg = document.getElementById("hero-img")

const shoes = document.getElementById("shoes-div")
const sunny = document.getElementById("sunny-div")
const youtube = document.getElementById("youtube-div")
const news = document.getElementById("news-div")
const flyo = document.getElementById("flyo-div")
const intro = document.getElementById("intro-div")

const openMenu = document.getElementById("open-menu");
const navigation = document.querySelector("nav")
const closeMenu = document.getElementById("close-menu")
const navList = document.getElementById("nav-list")

openMenu.addEventListener("click", () => {
  navigation.style.height = "100px"
  navigation.style.opacity = "1"
  navList.style.pointerEvents = "auto"
  navigation.classList.add("animate-nav")

  // navigation.style.bottom ="-30px"
})

closeMenu.addEventListener("click", () => {
  navigation.style.height = "0"
  navigation.style.opacity = "0"
  navList.style.pointerEvents = "none"
  navigation.classList.remove("animate-nav");


  // navigation.style.bottom ="-30px"
})




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

if (Y >= 625 && Y <= 1650) {
  htmlDiv.style.transform = "translateX(0px)";
  htmlDiv.style.transition = "all 1s";
} else {
  htmlDiv.style.transform = "translateX(-800px)";
}


 if (Y >= 625 && Y <= 1650) {
   cssDiv.style.transform = "translateX(0px)";
   cssDiv.style.transition = "all 1s";
 } else {
   cssDiv.style.transform = "translateX(800px)";
 }



 if (Y >= 250 && Y <= 1220) {
   jsDiv.style.transform = "translateX(-50%)";
   jsDiv.style.transition = "all 1s";
 } else {
   jsDiv.style.transform = "translateX(1000px)";
 }

    
    
    // if (Y >= 250) {
    //   jsDiv.classList.add("animate-js");
    // } else {
    //   jsDiv.classList.remove("animate-js");
    // }


 if (Y >= 1120 && Y <= 2240) {
   reactDiv.style.transform = "translateX(-50%)";
   reactDiv.style.transition = "all 1s";
 } else {
   reactDiv.style.transform = "translateX(-1000px)";
 }


  if (Y >= 2000) {
    shoes.style.transform = "translateX(0)";
    shoes.style.transition = "all .5s";
    youtube.style.transform = "translateX(0)";
    youtube.style.transition = "all 1s";
    flyo.style.transform = "translateX(0)";
    flyo.style.transition = "all 1.5s";
    
 } else {
    shoes.style.transform = "translateX(-450px)";
    youtube.style.transform = "translateX(-450px)";
    flyo.style.transform = "translateX(-450px)";
    
  }

  if (Y >= 2000) {
    sunny.style.transform = "translateX(0)";
   sunny.style.transition = "all .5s";
    news.style.transform = "translateX(0)";
   news.style.transition = "all 1s";
    intro.style.transform = "translateX(0)";
   intro.style.transition = "all 1.5s";
 } else {
   sunny.style.transform = "translateX(450px)";
   news.style.transform = "translateX(450px)";
   intro.style.transform = "translateX(450px)";
  }
})
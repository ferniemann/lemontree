const header = document.querySelector("#header")
const brands = document.querySelector("#brands")
const subNav = document.querySelector("#sub-nav")
const main = document.querySelector("#main")
const bottle1 = document.querySelector("#bottles-1")
const bottle2 = document.querySelector("#bottles-2")
const bottles3 = document.querySelector("#bottles-3")
const randomInt = Math.floor(Math.random() * (4 - 1)) +1
const randomId = "bottles-" + randomInt
console.log(randomId)
bottle1.hidden = true
bottle2.hidden = true
bottles3.hidden = true

randomBottle()

window.onscroll = function() {
    "use strict"
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.add("header-shrink")
    }
    else {
        header.classList.remove("header-shrink")
    }
}

brands.addEventListener("click", function(e){
    e.preventDefault()
    if (subNav.hidden == true) {
        subNav.hidden = false
    } else {
        subNav.hidden = true
    }
})

main.addEventListener("click", function() {
    subNav.hidden = true
})

function randomBottle() {
    const randomBottle = document.getElementById(randomId)
    randomBottle.hidden = false
}
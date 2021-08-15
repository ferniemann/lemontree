const header = document.getElementById("header")
const brands = document.getElementById("brands")
const subNav = document.getElementById("sub-nav")
const main = document.querySelector("main")
subNav.hidden = true

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
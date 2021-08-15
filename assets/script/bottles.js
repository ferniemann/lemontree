const main = document.getElementById("main")
const bottle1 = document.getElementById("bottles-1")
const bottle2 = document.getElementById("bottles-2")
const bottles3 = document.getElementById("bottles-3")
const randomInt = Math.floor(Math.random() * (4 - 1)) +1
const randomId = "bottles-" + randomInt
console.log(randomId)
bottle1.hidden = true
bottle2.hidden = true
bottles3.hidden = true

function randomBottle() {
    const randomBottle = document.getElementById(randomId)
    randomBottle.hidden = false
}
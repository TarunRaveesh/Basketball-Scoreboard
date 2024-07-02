let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")


function oneH() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function twoH() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function threeH() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function oneG() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function twoG() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function threeG() {
    guestScore += 3
    guestEl.textContent = guestScore
}
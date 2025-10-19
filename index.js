let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let newGameEl = document.getElementById("new-game-btn")

//sum home

let sumHome = 0

function addOneHome() {
  sumHome += 1
  scoreHomeEl.textContent = sumHome
}

function addTwoHome() {
  sumHome  += 2
  scoreHomeEl.textContent = sumHome 
}

function addThreeHome() {
  sumHome += 3
  scoreHomeEl.textContent = sumHome
}

//sum guest

let sumGuest = 0

function addOneGuest() {
  sumGuest += 1
  scoreGuestEl.textContent = sumGuest
}

function addTwoGuest() {
  sumGuest  += 2
  scoreGuestEl.textContent = sumGuest
}

function addThreeGuest() {
  sumGuest += 3
  scoreGuestEl.textContent = sumGuest
}

//reset game

function reset() {
  sumHome = 0
  sumGuest = 0
  scoreHomeEl.textContent = sumHome
  scoreGuestEl.textContent = sumGuest
}
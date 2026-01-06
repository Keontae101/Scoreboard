let homescore = document.getElementById("homescore")
let guestscore = document.getElementById("guestscore")
let homecount = 0
let guestcount = 0

function homeincrease1(){
     homecount = homecount + 1
    homescore.textContent = homecount
}

function homeincrease2(){
    homecount = homecount + 2
    homescore.textContent = homecount
}

function homeincrease3(){
    homecount = homecount + 3
    homescore.textContent = homecount
}

function guestincrease1(){

    guestcount = guestcount + 1
    guestscore.textContent = guestcount
}

function guestincrease2(){
    guestcount = guestcount + 2
    guestscore.textContent = guestcount
}

function guestincrease3(){
    guestcount = guestcount + 3
    guestscore.textContent = guestcount
}


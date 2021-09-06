"use strict"

let hunger = 3
let money = 0
let time = 12
let ownedBread = 0
let bakeryBread = 5
let bag = 0
const log = []
let turnCounter = 0

document.getElementById("hunger").innerHTML = hunger
document.getElementById("money").innerHTML = money
document.getElementById("time").innerHTML = time
document.getElementById("ownedBread").innerHTML = ownedBread
document.getElementById("bakeryBread").innerHTML = bakeryBread
document.getElementById("goToWork").onclick = kolchose
document.getElementById("buyBread").onclick = buyBread
document.getElementById("goToWorkInBakery").onclick = workInBakery
document.getElementById("eatBread").onclick = eat

function refreshLog() {
    if (hunger >= 10) {
        log.unshift("You Starved to death\n")
        document.getElementById("playerStatus").innerHTML = `You died in ${turnCounter} turns.<br>`
    }

    let logString = ""
    for (let logEntry of log) {
        logString += logEntry
    }
    document.getElementById("log").innerHTML = logString
}

function kolchose()
{
    turnCounter++
    let timeToSpend = Number(document.getElementById("timeToSpend").value)
    hunger += 1*timeToSpend
    document.getElementById("hunger").innerHTML = hunger
    money += 0.2*timeToSpend
    document.getElementById("money").innerHTML = money
    time -= timeToSpend
    document.getElementById("time").innerHTML = time
    
    log.unshift(`You worked ${timeToSpend} hours for the public!\n`)
    refreshLog()
}

function buyBread() {
    let boughtBread = Number(document.getElementById("picesOfBread").value)
    if (money > 0 && bakeryBread > 0) {
        turnCounter++
        ownedBread += boughtBread
        money -= boughtBread*0.25
        bakeryBread -= boughtBread
        document.getElementById("money").innerHTML = money
        document.getElementById("ownedBread").innerHTML = ownedBread
        document.getElementById("bakeryBread").innerHTML = bakeryBread
        log.unshift("You bought the bread of the public!\n")
        refreshLog()
    }
    else {
        log.unshift("Go to work for the public!\n")
        refreshLog()
    }
}

function workInBakery() {
    turnCounter++
    let timeToSpend = Number(document.getElementById("timeToSpendInBakery").value)
    hunger += 1*timeToSpend
    document.getElementById("hunger").innerHTML = hunger
    bakeryBread += 6*timeToSpend
    document.getElementById("bakeryBread").innerHTML = bakeryBread
    time -= timeToSpend
    document.getElementById("time").innerHTML = time

    log.unshift("You worked for bread of the public!\n")
    refreshLog()
}

function eat() {
    if (ownedBread > 0 && hunger > 0) {
        turnCounter++
        hunger--
        ownedBread--
        document.getElementById("hunger").innerHTML = hunger
        document.getElementById("ownedBread").innerHTML = ownedBread

        log.unshift("You ate the bread of the public!\n")
        refreshLog()
    }
    else {
        log.unshift("Go to Work, you hungry bum!\n")
        refreshLog()
    }
}
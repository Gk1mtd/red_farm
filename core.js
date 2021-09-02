"use strict"
// wir geben dem Bäcker Geld, wir bekommen je nach dem wieviel Geld wir ihm gegeben haben ein anderes Teil zurück.
// jetzt müssen wir für unser Geld arbeiten gehen, damit wir damit Brt kaufen können

let hunger = 3
let money = 0
let time = 12
let bag = 0

document.getElementById("hunger").innerHTML = hunger
document.getElementById("money").innerHTML = money
document.getElementById("time").innerHTML = time
document.getElementById("goToWork").onclick = function() {kolchose()}

function backshop(geld)
{   
    let teigware
    if (geld <= 0.6)
    {
        teigware = "Bröttchen"
    }
    else if (geld <= 4)
    {
        teigware = "Brott"
    }
    else
    {
        teigware = "Piroschki"
    }
    console.log("Hier hast du ein " + teigware + ", Genosse!")
    return teigware
}

function kolchose()
{
    let timeToSpend = Number(document.getElementById("timeToSpend").value)
    hunger += 1*timeToSpend
    document.getElementById("hunger").innerHTML = hunger
    money += 0.2*timeToSpend
    document.getElementById("money").innerHTML = money
    time -= timeToSpend
    document.getElementById("time").innerHTML = time

    if (hunger >= 10) {
        console.log("You Starved to death");
        document.getElementById("log").innerHTML = "You Starved to death"
    }
}
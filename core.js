"use strict"
// wir geben dem Bäcker Geld, wir bekommen je nach dem wieviel Geld wir ihm gegeben haben ein anderes Teil zurück.
// jetzt müssen wir für unser Geld arbeiten gehen, damit wir damit Brt kaufen können

let geld
let jutebeutel
let freieZeit = 12

geld = kolchose(freieZeit)
jutebeutel = backshop(geld)

console.log("***********")
console.log("In meinem roten Jutebeutel sind: " + jutebeutel)

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

function kolchose(arbeitszeit)
{
    for (let i = 1; i<=arbeitszeit; i++)
    {
        let arbeitszeitwert = 0.4
        console.log("Genosse, das ist deine " + i + " Stunden in der ruhmreichen Kolchose für Talententwicklung")
        console.log("Du hast schon " + i*arbeitszeitwert + " verdient!")
    }
    return arbeitszeit*0.4
}
const climate = document.getElementById("climate");
const consumption = document.getElementById("consumption");
const resources = document.getElementById("resources");
const people = document.getElementById("people");

climate.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')"
    document.body.style.backgroundSize = "100% 100%"
    climate.style.backgroundColor = "#2f80ed"
    consumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "transparent"
    people.style.backgroundColor = "transparent"
    document.getElementById("amount").innerHTML = "2,911,343,321"
    document.getElementById("cause").innerHTML = "Tons of CO2 emitted in the atmosphere"
    } 

consumption.onclick = () => {
        document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')"
        document.body.style.backgroundSize = "100% 100%"
        climate.style.backgroundColor = "transparent"
        consumption.style.backgroundColor = "#27ae60"
        resources.style.backgroundColor = "transparent"
        people.style.backgroundColor = "transparent"
        document.getElementById("amount").innerHTML = "878 262 909"
        document.getElementById("cause").innerHTML = "Tons of food wasted or lost"
    } 

resources.onclick = () => {
        document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')"
        document.body.style.backgroundSize = "100% 100%"
        climate.style.backgroundColor = "transparent"
        consumption.style.backgroundColor = "transparent"
        resources.style.backgroundColor = "#f2994a"
        people.style.backgroundColor = "transparent"
        document.getElementById("amount").innerHTML = "59,859,183,999"
        document.getElementById("cause").innerHTML = "Tons of minerals extracted from Earth"
    }    

people.onclick = () => {
        document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')"
        document.body.style.backgroundSize = "100% 100%"
        climate.style.backgroundColor = "transparent"
        consumption.style.backgroundColor = "transparent"
        resources.style.backgroundColor = "transparent"
        people.style.backgroundColor = "#eb5757"
        document.getElementById("amount").innerHTML = "6,080,888"
        document.getElementById("cause").innerHTML = "People who died of hunger"
    }    
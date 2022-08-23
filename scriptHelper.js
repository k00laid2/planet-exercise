// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

const displayHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
document.getElementById("missionTarget").innerHTML = displayHTML;

}

function validateInput(testInput) {
    // debugger
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
            return "Not a Number";
    } else if (!isNaN(Number(testInput))) {
                    return "Is a Number";
            }
        }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let sanitizedPilotName = validateInput(pilot);
    let sanitizedCoPilotName = validateInput(copilot);
    let sanitizedFuelLevel = validateInput(fuelLevel);
    let sanitizedCargoLevel = validateInput(cargoLevel);

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    let launchStatus = true

    // debugger
    if (sanitizedPilotName === "Not a Number") {
        pilotStatus.innerHTML = (`${pilot} is ready for launch!`)
    } else {pilotStatus.innerHTML = (`There is an error with your Pilot input.`)
            launchStatus = false}

    if (sanitizedCoPilotName === "Not a Number") {
        copilotStatus.innerHTML = (`The CoPilot ${copilot} is ready for launch!`)
    } else {copilotStatus.innerHTML = (`There is an error with your Copilot input.`)
            launchStatus = false}

    if (sanitizedFuelLevel === "Is a Number" && fuelLevel > 9999) {
        fuelStatus.innerHTML = (`You have 10,000 or more liters of fuel. You are good to go!`)
    } else { fuelStatus.innerHTML = (`There is an error with your fuel. You must have 10,000 liters or greater.`)
            launchStatus = false}

    if (sanitizedCargoLevel === "Is a Number" && cargoLevel < 9999) {
        cargoStatus.innerHTML = (`Your cargo is ready to go!`)
    } else { cargoStatus.innerHTML = (`There is an error with your cargo. Must be less than 10,000 kg.`)
            launchStatus = false}

    let launchHeader =  document.getElementById("launchStatus")
    if (launchStatus) {
        launchHeader.innerHTML = "Shuttle is ready for launch"
        launchHeader.style.color = "green"
    } else { launchHeader.innerHTML = "Shuttle not ready for launch"
        launchHeader.style.color = "red"
    }
    list.style.visibility = "visible"


}





// // the syntax to update the pilot names. input into your if else statements above
// pushPilotName.innerHTML = `Pilot ${pilot} is ready`;
// pushCopilotName.innerHTML = `Co-pilot ${copilot} is ready`;
// list.style.visibility = 'hidden';



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]
 
}





module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

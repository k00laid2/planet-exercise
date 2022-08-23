// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    // use this to get the stuff from the form, and then pass it into parameters of the formsubmition function 
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault()
        let pilotName = (document.querySelector("input[name=pilotName]").value);
        let copilotName = (document.querySelector("input[name=copilotName]").value);
        let fuelLevel = (document.querySelector("input[name=fuelLevel]").value);
        let cargoMass = (document.querySelector("input[name=cargoMass]").value);
        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

    })






   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets)
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })
   
});
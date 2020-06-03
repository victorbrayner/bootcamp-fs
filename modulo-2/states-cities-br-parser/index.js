'use strict';

const fs = require('fs');

let rawDataStates = fs.readFileSync('states.json');
let states = JSON.parse(rawDataStates);

let rawDataCities = fs.readFileSync('cities.json');
let cities = JSON.parse(rawDataCities);


function howManyCities(UF){
    let stateID = null;
    let cityCounter = 0;
    
    function lookCities(stateID){
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].Estado === stateID) {
                cityCounter++;
            }
        }
        return cityCounter;
    }


    for (let i = 0; i < states.length; i++) {
        if (states[i].Sigla === UF) {
            stateID = states[i].ID;
            return lookCities(stateID);
        }
    }
}

function mostCities(){
    const cityCounterList = [];
    const mostCitiesList = [];

    for (let i = 0; i < states.length; i++) {
        cityCounterList[i] = [howManyCities(states[i].Sigla), i];
    }

    // cityCounterList.sort((a, b) => b - a);

    console.log(cityCounterList);
}

console.log(howManyCities('ES'));
mostCities();

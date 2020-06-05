import { promises } from "fs";
const { readFile, writeFile } = promises;

readWrite();

async function readWrite(){
    try {
        const rawDataCities = await readFile("./cities.json");
        const dataCities = JSON.parse(rawDataCities);
        const rawDataStates = await readFile("./states.json");
        const dataStates = JSON.parse(rawDataStates);

        dataStates.forEach(state => {
            const citiesAndState = dataCities.filter(city => city.Estado === state.ID);
            writeFile(`files/${state.Sigla}.json`, JSON.stringify(citiesAndState));
        });


    } catch (err) {
        console.log(err);
    }
}

/* const fs = require('fs');

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
 */
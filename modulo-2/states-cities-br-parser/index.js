import { promises } from "fs";
const { readFile, writeFile } = promises;


let dataCities;
let dataStates;

async function init(){
    try {
        const readWrite = async () => {
            const rawDataCities = await readFile("./cities.json");
            dataCities = JSON.parse(rawDataCities);
            const rawDataStates = await readFile("./states.json");
            dataStates = JSON.parse(rawDataStates);
            
            dataStates.forEach(state => {
                const citiesAndState = dataCities.filter(city => city.Estado === state.ID);
                writeFile(`files/${state.Sigla}.json`, JSON.stringify(citiesAndState));
            });
            
            howManyCities();
        }
        
        const lookCities = async (state) => {
            const cityJSON = JSON.parse(await readFile (`files/${state}.json`));
            return cityJSON.length;
            }
            
        const howManyCities = async () => {
            const howManyList = [];
            await Promise.all(dataStates.map(async (states)=>{
                let howMany = await lookCities(states.Sigla);
                let formattedState = {Sigla: states.Sigla, Quantidade: howMany}; 
                            
                howManyList.push(formattedState);
                }));      
                    
            console.log(howManyList); 
            }

        readWrite();
        
    } catch (err) {
        console.log(err);
    }
}

init();
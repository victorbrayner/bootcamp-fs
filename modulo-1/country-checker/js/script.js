let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFav = 0;

let numberFormat = null;

window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFavorites = document.querySelector('#tabFavorites');
    countCountries = document.querySelector('#countCountries');
    countFavorites = document.querySelector('#countFavorites');
    
    totalPopulationList = document.querySelector('#totalPopulationList');
    totalPopulationFav = document.querySelector('#totalPopulationFavorites');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
})

async function fetchCountries(){
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    allCountries = json.map(country => {

        const {id, translations, population, flag} = country

        return {
            id: country.numericCode,
            name: country.translations.pt,
            population: country.population,
            flag: country.flag
        }
    });    
    render();
}

function render(){
    renderCountryList();
    renderFavorites();
    renderSummary();
    handleCountryButtons();
}

function renderCountryList(){
    let countriesHTML = '<div>';

    allCountries.forEach((country) => {
        const {name, flag, id, population} = country;
        const countryHTML = `
        <div class='country'>
            <div>
                <a id="${id}" class="waves-effect waves-light btn">+</a>
            </div>                
            <div>
                <img src="${flag}" alt="${name}">
            </div>
            <div>
                <ul>
                    <li>${name}</li>
                    <li>${population}</li>
            </div>
        </div>
        `;

        countriesHTML += countryHTML;
    });

    countriesHTML += '</div>';

    tabCountries.innerHTML = countriesHTML;

}

function renderFavorites(){

    let favoritesHTML = '<div>';

    favCountries.forEach(country => {
        const {name, flag, id, population} = country;
        const favCountryHTML = `
            <div class='country'>
                <div>
                    <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
                </div>                
                <div>
                    <img src="${flag}" alt="${name}">
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${population}</li>
                </div>
            </div>
            `;

        favoritesHTML += favCountryHTML;
    })

    favoritesHTML += '</div>';
    tabFavorites.innerHTML = favoritesHTML;

}

function renderSummary(){

    countCountries.textContent = allCountries.length;
    countFavorites.textContent = favCountries.length;

    const totalPopulation = allCountries.reduce((accumulator, current) => {
        return accumulator + current.population;        
    },0)

    const totalFavorites = favCountries.reduce((accumulator, current) => {
        return accumulator + current.population;        
    },0)

    totalPopulationList.textContent = totalPopulation;
    totalPopulationFav.textContent = totalFavorites;    

}

function handleCountryButtons(){

    function addToFavorites(id){
        const countryToAdd = allCountries.find(country => country.id === id);
        favCountries = [...favCountries, countryToAdd];
        favCountries.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        allCountries = allCountries.filter(country => country.id != id);

        render();
    }
    function removeFromFavorites(id){
        const countryToRemove = favCountries.find(country => country.id === id);
        allCountries = [...allCountries, countryToRemove];
        allCountries.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })

        favCountries = favCountries.filter(country => country.id != id);

        render();
    }

    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

    countryButtons.forEach(button => {
        button.addEventListener('click',() => addToFavorites(button.id));

    })

    favButtons.forEach(button => {
        button.addEventListener('click',() => removeFromFavorites(button.id));

    })
}
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

}

function handleCountryButtons(){

}

window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start(){
    preventFormSubmit();
    inputName = document.querySelector('#inputName');
    activateInput();
}

function preventFormSubmit(){

    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput(){
    inputName.focus();
}

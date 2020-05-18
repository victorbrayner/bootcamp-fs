
window.addEventListener('load', start);

var globalTasks = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
var inputTasks = null;

function start(){
    inputTasks = document.querySelector('#inputTask');
    preventFormSubmit();
    activateInput();
    render();
}

function preventFormSubmit(){

    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput(){
    function insertTask(newName){
        globalTasks.push(newName);
        render();
    }

    function handleTyping(event){
        if (event.key === 'Enter'){
            insertTask(event.target.value);
        }
    }

    inputTask.addEventListener('keyup', handleTyping)
    inputTask.focus();
    
}

function render(){
    var divTasks = document.querySelector('#tasks');
    divTasks.innerHTML = '';

    var ul = document.createElement('ul');
    for (var i = 0; i < globalTasks.length; i++){
        var currentTask = globalTasks[i];
        var li = document.createElement('li');
        li.textContent = currentTask;
        ul.appendChild(li);
    }
    divTasks.appendChild(ul);
}

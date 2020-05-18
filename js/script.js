
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

    inputTasks.addEventListener('keyup', handleTyping)
    inputTasks.focus();
    
}

function render(){

    function createDeleteButton(index){

        function deleteTask(){
            globalTasks.splice(index, 1);
            render();
        }

        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'X';

        button.addEventListener('click', deleteTask);
        
        return button;
    }

    var divTasks = document.querySelector('#tasks');
    divTasks.innerHTML = '';

    var ul = document.createElement('ul');
    for (var i = 0; i < globalTasks.length; i++){
        var currentTask = globalTasks[i];
        var li = document.createElement('li');
        
        var button = createDeleteButton(i);

        var span = document.createElement('span');
        span.textContent = currentTask;

        li.appendChild(button);
        li.appendChild(span); 
        ul.appendChild(li);
    }
    divTasks.appendChild(ul);
    clearInput();
}

function clearInput(){
    inputTasks.value = '';
    inputTasks.focus();
}
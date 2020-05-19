
window.addEventListener('load', start);

var globalTasks = [];
var inputTasks = null;
var isEditing = false;
var currentIndex = null;

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
    }
    
    function updateTask(newTask){
        globalTasks[currentIndex] = newTask;
    }
    
    function handleTyping(event){
        if (event.key === 'Enter' && event.target.value.trim() != ''){
            if (isEditing){
                updateTask(event.target.value);
            }else{
                insertTask(event.target.value);
            }
            
            
            isEditing = false;
            clearInput();
            render();
            
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
    
    function createSpan(task, index){

        function editTask(){
            inputTasks.value = task;
            inputTasks.focus();
            isEditing = true;
            currentIndex = index;
        }
        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = task;
        span.addEventListener('click', editTask);
        return span;
    }

    var divTasks = document.querySelector('#tasks');
    divTasks.innerHTML = '';

    var ul = document.createElement('ul');
    for (var i = 0; i < globalTasks.length; i++){
        var currentTask = globalTasks[i];
        var li = document.createElement('li');
        
        var button = createDeleteButton(i);
        var span = createSpan(currentTask, i);

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
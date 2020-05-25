let globalTasks = [];
let inputTasks = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
    inputTasks = document.querySelector('#inputTask');
    preventFormSubmit();
    activateInput();
    render();
});


function start(){
}

function preventFormSubmit(){

    function handleFormSubmit(event){
        event.preventDefault();
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput(){
    function insertTask(newName){
        globalTasks = [...globalTasks, newName];
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
            globalTasks = globalTasks.filter((_, i) => i !== index);
            render();
        }

        const button = document.createElement('button');
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
        const span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = task;
        span.addEventListener('click', editTask);
        return span;
    }

    const divTasks = document.querySelector('#tasks');
    divTasks.innerHTML = '';

    const ul = document.createElement('ul');
    for (var i = 0; i < globalTasks.length; i++){
        let currentTask = globalTasks[i];
        const li = document.createElement('li');
        
        let button = createDeleteButton(i);
        let span = createSpan(currentTask, i);

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
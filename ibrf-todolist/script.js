const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    if(taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.classList.add('taskItem');

    li.addEventListener('click', () => {
        li.classList.toggle('completed')
    })


    taskList.appendChild(li);
    taskInput.value = "";
}

//função de prioridade da tarefa
function addTask() {
    if(taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.classList.add('taskItem');

    const importantButton = document.createElement('button');
    importantButton.textContent = 'Importante';
    importantButton.classList.add('importantButton');
    li.appendChild(importantButton);

    const urgentButton = document.createElement('button');
    urgentButton.textContent = 'Urgente';
    urgentButton.classList.add('urgentButton');
    li.appendChild(urgentButton);
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.classList.add('removeButton');

    importantButton.addEventListener('click', () => {
        li.classList.toggle('important')
    })

    urgentButton.addEventListener('click', () => {
        li.classList.toggle('urgent')
    })

    removeButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(removeButton);

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
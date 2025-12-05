
let inputTask = document.querySelector('#newTaskInput');

window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('listeTasks');
    if (savedTasks){

        savedTasks.split(',').forEach(task => {
            createTaskElement(task);
        });
    }
});

document.querySelector('#addTaskButton').addEventListener('click', () =>{
    if (inputTask.value.trim() !== '') 
        {
            let text = inputTask.value;
            createTaskElement(text);
            saveTasksToLocalStorage();
        }
    }
);

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

        if (inputTask.value.trim() !== '') 
            {
                let text = inputTask.value;
                createTaskElement(text);
                saveTasksToLocalStorage();
            }
        }
    }
);


function createTaskElement(text) {
    let clonedTask = document.querySelector('#taskTemplate');
    let task = clonedTask.content.cloneNode(true);
    let item = task.querySelector("li");
    task.querySelector("label").textContent = text
    task.querySelector(".removeTaskButton").addEventListener('click', (e)=>{
        e.stopPropagation();
        item.remove();
        saveTasksToLocalStorage();
    });
    document.querySelector('#toDoList').appendChild(task);
    inputTask.value = '';
}

function saveTasksToLocalStorage() {
    let tasks = [];
    document.querySelectorAll(".toDoLabel").forEach(label => {
        tasks.push(label.textContent);
    });
    console.log(tasks);
    localStorage.setItem('listeTasks', tasks);
}
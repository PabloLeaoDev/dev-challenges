const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');
const taskItem = document.querySelector('.taskItem');

(function () {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        const tasksList = JSON.parse(tasks);
        addSavedTasks(tasksList);
    }
})();

function getInputValue() {
    const taskName = taskInput.value.trim();
    if (!taskName) {
        alert('Insira uma tarefa antes de adicionar.');
    } else {
        addTask(taskName);
        saveTasks();
        cleanInput();    
    }
}

function cleanInput() {
    taskInput.value = '';
    taskInput.focus();
}

function createLi(taskName) {
    const li = document.createElement('li');
    li.setAttribute('class', 'taskItem');
    li.textContent = taskName;
    return li;
}

function createRemoveBtn() {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    return removeBtn;
}

function addTask(taskName) {
    const li = createLi(taskName);
    const removeBtn = createRemoveBtn();

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    
    removeBtn.addEventListener('click', (e) => {
        taskList.removeChild(li);
        saveTasks();
    });
}

addTaskBtn.addEventListener('click', (e) => {
    getInputValue();
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getInputValue();
    }
});

function saveTasks() {
    const tList = taskList.querySelectorAll('li');
    let tasksList = [];

    for (let task of tList) {
        let textTask = task.innerText;
        textTask = textTask.replace('Remover', '').trim();
        tasksList.push(textTask);
    }

    const taskJson = JSON.stringify(tasksList);
    localStorage.setItem('tasks', taskJson);
}

function addSavedTasks(tasksList) {
    for (let task of tasksList) {
        addTask(task);
    }
}

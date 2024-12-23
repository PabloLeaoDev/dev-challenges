(() => {
  let btn: NodeListOf<HTMLButtonElement>;
  let arrBtn: HTMLButtonElement[];
  let currentBtn: HTMLButtonElement;
  let tasks: Array<HTMLLIElement> = [];
  let id: number = 0;

  enum Buttons {
    Add,
    Remove,
    Update
  }

  let buttonFlag: Buttons;

  document.addEventListener('click', (e) => {
    btn = document.querySelectorAll('.btn');
    arrBtn = Array.from(btn);

    if (e.target) {
      if (e.target.toString() !== '[object HTMLButtonElement]') return;
    }

    currentBtn = e.target as HTMLButtonElement;
    if (currentBtn === arrBtn[0]) {
      buttonFlag = Buttons.Add;
    } else if (isOdd(arrBtn.indexOf(currentBtn))) {
      buttonFlag = Buttons.Update;
    } else if (!isOdd(arrBtn.indexOf(currentBtn))) {
      buttonFlag = Buttons.Remove;
    }

    if (buttonFlag === Buttons.Add) {
      id++;
    }
    main(buttonFlag);

    function main(buttonFlag: Buttons): void {
      const inputTask = document.querySelector('input[type="text"]') as HTMLInputElement;
      const taskUl = document.querySelector('.taskList') as HTMLUListElement;

      if (!(inputTask && taskUl)) return;

      switch (buttonFlag) {
        case Buttons.Add:
          if (!inputTask.value) {
            alert('Por favor, insira uma tarefa.');
            return;
          }
          const newTask = createTask(inputTask.value, id);
          tasks.push(newTask);
          inputTask.value = '';
          break;
        case Buttons.Update:
          if (!inputTask.value) {
            alert('Por favor, insira uma tarefa.');
            return;
          }
          updateTask(tasks, currentBtn, inputTask.value, id);
          inputTask.value = '';
          break;
        case Buttons.Remove:
          const removedTask = removeTask(tasks, currentBtn);
          tasks = [...removedTask];
          break;
      }

      taskUl.innerHTML = '';
      tasks.forEach((liEl) => {
        taskUl.appendChild(liEl);
      });
    }
  });
})();


function createTask(taskName: string, id?: number): HTMLLIElement {
  const liEl: HTMLLIElement = document.createElement('li');
  liEl.innerText = `${taskName} `;
  const btnUpdateEl: HTMLButtonElement = createButton('update', id);
  liEl.appendChild(btnUpdateEl);
  const btnRemoveEl: HTMLButtonElement = createButton('remove', id);
  liEl.appendChild(btnRemoveEl);
  return liEl;
}

function updateTask(tasks: HTMLLIElement[], target: HTMLElement, content: string, id?: number): HTMLLIElement[] {
  const tasksCopy = [...tasks];
  let taskForUpdate: HTMLElement;
  for (const taskIndex in tasksCopy) {
    taskForUpdate = tasksCopy[taskIndex];
    if (taskForUpdate === target.parentElement) {
        taskForUpdate.innerHTML = `${content} <button type="button" class="btn update${id}">Update</button><button type="button" class="btn remove${id}">Remove</button>`;
    }
  }
  return tasksCopy;
}

function removeTask(tasks: HTMLLIElement[], target: HTMLElement): HTMLLIElement[] {
  const tasksCopy = [...tasks];
  for (const taskIndex in tasksCopy) {
    if (tasksCopy[taskIndex] === target.parentElement) tasksCopy.splice(Number(taskIndex), 1);
  }
  return tasksCopy;
}


function createButton(className: string, id?: number): HTMLButtonElement {
  const button: HTMLButtonElement = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('btn');
  button.classList.add(`${className}${id}`);
  className = capitalizeFirstLetter(className);
  button.innerText = `${className}`;
  return button;
}

function capitalizeFirstLetter(value: string) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function isOdd(value: number): boolean {
  if (value % 2 === 0) return false;
  return true;
}

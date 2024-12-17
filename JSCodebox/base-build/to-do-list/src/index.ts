(function () {
  let btn: NodeListOf<HTMLButtonElement>;
  let arrBtn: HTMLButtonElement[];
  let currentBtn: EventTarget | null;
  let qtdBtn: number;
  let flagAdd: boolean;
  let flagRemove: boolean;

  document.addEventListener('click', (e) => {
    btn = document.querySelectorAll('.btn');
    arrBtn = Array.from(btn);

    flagAdd = false;
    flagRemove = false;
    if (e.target) {
      if (e.target.toString() !== '[object HTMLButtonElement]') return;
    }
    currentBtn = e.target;
    if (currentBtn === arrBtn[0]) {
      flagAdd = true
    } else {
      flagRemove = true;
    }

    if (flagAdd) {
      qtdBtn = btn.length - 1;
      main(e.target, qtdBtn);
    }

    if (flagRemove) {}
  });
})();

function main(event: EventTarget | null, id: number) {
  const inputTask = document.querySelector('input[type="text"]') as HTMLInputElement;
  const taskList = document.querySelector('.taskList') as HTMLUListElement;

  if (!(inputTask && taskList)) return;

  if (!inputTask.value) {
    alert('Por favor, insira uma tarefa.');
    return;
  }

  switch (event) {
    case event:
      taskList.appendChild(createTask(inputTask.value, id));
      inputTask.value = '';
      break;
    case event:

      break;
  }
}

function createTask(taskName: string, id?: number): HTMLElement {
  const liEl: HTMLElement = document.createElement('li');
  liEl.innerText = `${taskName} `;
  const btnEl: HTMLElement = document.createElement('button');
  btnEl.setAttribute('type', 'button');
  btnEl.classList.add('btn');
  btnEl.classList.add(`remove${id}`);
  btnEl.innerText = 'Remove';
  liEl.appendChild(btnEl);
  return liEl;
}
